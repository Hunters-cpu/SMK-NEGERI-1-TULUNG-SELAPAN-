// 📧 Gmail API Integration Service for Google Workspace
export interface GmailMessageSummary {
  id: string;
  threadId: string;
  snippet?: string;
  subject?: string;
  from?: string;
  fromName?: string;
  to?: string;
  date?: string;
  timestamp?: number;
  labelIds?: string[];
  unread?: boolean;
}

export interface GmailMessageFull extends GmailMessageSummary {
  bodyText?: string;
  bodyHtml?: string;
  rawPayload?: any;
}

export interface GmailProfile {
  emailAddress: string;
  messagesTotal: number;
  threadsTotal: number;
  historyId: string;
}

/**
 * Creates RFC 2822 base64url encoded email string
 */
function createMimeMessage(to: string, subject: string, body: string, isHtml: boolean = true, cc?: string, bcc?: string): string {
  const headers = [
    `To: ${to}`,
    cc ? `Cc: ${cc}` : null,
    bcc ? `Bcc: ${bcc}` : null,
    `Subject: =?utf-8?B?${btoa(unescape(encodeURIComponent(subject)))}?=`,
    'MIME-Version: 1.0',
    `Content-Type: ${isHtml ? 'text/html; charset=UTF-8' : 'text/plain; charset=UTF-8'}`,
    'Content-Transfer-Encoding: 7bit',
    '',
    body
  ].filter(Boolean);

  const raw = headers.join('\r\n');
  return btoa(unescape(encodeURIComponent(raw)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

/**
 * Decode base64url to UTF-8 string safely
 */
function decodeBase64Url(str: string): string {
  try {
    const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
    return decodeURIComponent(escape(atob(base64)));
  } catch (e) {
    try {
      return atob(str.replace(/-/g, '+').replace(/_/g, '/'));
    } catch {
      return str;
    }
  }
}

/**
 * Extract email body recursively from payload parts
 */
function extractBody(payload: any): { text?: string; html?: string } {
  let text = '';
  let html = '';

  if (!payload) return { text, html };

  if (payload.body?.data) {
    const decoded = decodeBase64Url(payload.body.data);
    if (payload.mimeType === 'text/html') {
      html = decoded;
    } else {
      text = decoded;
    }
  }

  if (payload.parts && Array.isArray(payload.parts)) {
    for (const part of payload.parts) {
      if (part.mimeType === 'text/plain' && part.body?.data && !text) {
        text = decodeBase64Url(part.body.data);
      } else if (part.mimeType === 'text/html' && part.body?.data && !html) {
        html = decodeBase64Url(part.body.data);
      } else if (part.parts) {
        const sub = extractBody(part);
        if (!text && sub.text) text = sub.text;
        if (!html && sub.html) html = sub.html;
      }
    }
  }

  return { text, html };
}

/**
 * Get the user's Gmail profile
 */
export async function getGmailProfile(accessToken: string): Promise<GmailProfile> {
  const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/profile', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal memuat profil Gmail (${response.status})`);
  }

  return response.json();
}

/**
 * List messages from user's Gmail mailbox
 */
export async function listGmailMessages(
  accessToken: string,
  params?: {
    q?: string;
    maxResults?: number;
    labelIds?: string[];
  }
): Promise<{ messages: GmailMessageSummary[]; totalEstimate?: number }> {
  const query = new URLSearchParams();
  query.append('maxResults', String(params?.maxResults || 20));
  if (params?.q) query.append('q', params.q);
  if (params?.labelIds && params.labelIds.length > 0) {
    params.labelIds.forEach(lbl => query.append('labelIds', lbl));
  }

  const url = `https://gmail.googleapis.com/gmail/v1/users/me/messages?${query.toString()}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal memuat daftar email Gmail (${response.status})`);
  }

  const data = await response.json();
  const rawList: Array<{ id: string; threadId: string }> = data.messages || [];

  if (rawList.length === 0) {
    return { messages: [], totalEstimate: 0 };
  }

  // Fetch headers for each message (limit to first 15 for fast response)
  const detailPromises = rawList.slice(0, 15).map(async item => {
    try {
      const msgRes = await fetch(
        `https://gmail.googleapis.com/gmail/v1/users/me/messages/${item.id}?format=metadata&metadataHeaders=Subject&metadataHeaders=From&metadataHeaders=To&metadataHeaders=Date`,
        {
          headers: { Authorization: `Bearer ${accessToken}` }
        }
      );
      if (!msgRes.ok) return null;
      const msgData = await msgRes.json();

      const headers = msgData.payload?.headers || [];
      const getHeader = (name: string) => headers.find((h: any) => h.name.toLowerCase() === name.toLowerCase())?.value || '';

      const fromRaw = getHeader('From');
      let fromName = fromRaw;
      let fromEmail = fromRaw;
      if (fromRaw.includes('<')) {
        const match = fromRaw.match(/(.*)<(.*)>/);
        if (match) {
          fromName = match[1].trim().replace(/^["']|["']$/g, '');
          fromEmail = match[2].trim();
        }
      }

      return {
        id: msgData.id,
        threadId: msgData.threadId,
        snippet: msgData.snippet || '',
        subject: getHeader('Subject') || '(Tanpa Subjek)',
        from: fromEmail,
        fromName: fromName || fromEmail,
        to: getHeader('To'),
        date: getHeader('Date'),
        timestamp: Number(msgData.internalDate) || Date.now(),
        labelIds: msgData.labelIds || [],
        unread: msgData.labelIds?.includes('UNREAD')
      } as GmailMessageSummary;
    } catch {
      return null;
    }
  });

  const detailed = (await Promise.all(detailPromises)).filter(Boolean) as GmailMessageSummary[];
  return {
    messages: detailed,
    totalEstimate: data.resultSizeEstimate || detailed.length
  };
}

/**
 * Get full email details including rendered HTML/Text body
 */
export async function getGmailMessageDetails(
  accessToken: string,
  messageId: string
): Promise<GmailMessageFull> {
  const response = await fetch(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages/${encodeURIComponent(messageId)}?format=full`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal memuat isi surat email (${response.status})`);
  }

  const data = await response.json();
  const headers = data.payload?.headers || [];
  const getHeader = (name: string) => headers.find((h: any) => h.name.toLowerCase() === name.toLowerCase())?.value || '';

  const fromRaw = getHeader('From');
  let fromName = fromRaw;
  let fromEmail = fromRaw;
  if (fromRaw.includes('<')) {
    const match = fromRaw.match(/(.*)<(.*)>/);
    if (match) {
      fromName = match[1].trim().replace(/^["']|["']$/g, '');
      fromEmail = match[2].trim();
    }
  }

  const { text, html } = extractBody(data.payload);

  return {
    id: data.id,
    threadId: data.threadId,
    snippet: data.snippet,
    subject: getHeader('Subject') || '(Tanpa Subjek)',
    from: fromEmail,
    fromName: fromName || fromEmail,
    to: getHeader('To'),
    date: getHeader('Date'),
    timestamp: Number(data.internalDate) || Date.now(),
    labelIds: data.labelIds || [],
    unread: data.labelIds?.includes('UNREAD'),
    bodyText: text || data.snippet,
    bodyHtml: html || (text ? `<p style="white-space: pre-wrap;">${text}</p>` : `<p>${data.snippet}</p>`),
    rawPayload: data.payload
  };
}

/**
 * Send an email directly via Gmail API on behalf of the user
 * MUST be accompanied by explicit user confirmation before executing!
 */
export async function sendGmailEmail(
  accessToken: string,
  params: {
    to: string;
    subject: string;
    body: string;
    isHtml?: boolean;
    cc?: string;
    bcc?: string;
  }
): Promise<{ id: string; threadId: string; success: boolean }> {
  const raw = createMimeMessage(
    params.to,
    params.subject,
    params.body,
    params.isHtml !== false,
    params.cc,
    params.bcc
  );

  const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ raw })
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal mengirim email melalui Gmail API (${response.status})`);
  }

  const data = await response.json();
  return {
    id: data.id,
    threadId: data.threadId,
    success: true
  };
}

/**
 * Move a Gmail message to Trash (requires user confirmation)
 */
export async function trashGmailMessage(
  accessToken: string,
  messageId: string
): Promise<boolean> {
  const response = await fetch(
    `https://gmail.googleapis.com/gmail/v1/users/me/messages/${encodeURIComponent(messageId)}/trash`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal memindahkan email ke kotak sampah (${response.status})`);
  }

  return true;
}
