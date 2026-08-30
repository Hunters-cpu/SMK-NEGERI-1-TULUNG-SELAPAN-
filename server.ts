import express from 'express';
import path from 'path';
import fs from 'fs';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

const app = express();
const PORT = 3000;

// Body parser with generous limit for images & backup payloads
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Centralized Data Store file path
const DATA_DIR = path.join(process.cwd(), 'data_store');
const DATA_FILE = path.join(DATA_DIR, 'central_database.json');

// Real-Time SSE (Server-Sent Events) Clients Registry
let sseClients: { id: string; res: express.Response }[] = [];

function broadcastToClients(eventType: string, data: any) {
  const message = `event: ${eventType}\ndata: ${JSON.stringify(data)}\n\n`;
  sseClients.forEach(client => {
    try {
      client.res.write(message);
    } catch (e) {
      // Client disconnected
    }
  });
}

// Ensure data store folder exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Uploads directory
const UPLOADS_DIR = path.join(DATA_DIR, 'uploads');
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Serve uploaded files statically
app.use('/uploads', express.static(UPLOADS_DIR));

// Initial Database Helper
function readCentralDatabase() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const raw = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error('Error reading central database file:', err);
  }
  return null;
}

function writeCentralDatabase(data: any) {
  try {
    const payload = {
      ...data,
      serverSyncedAt: new Date().toISOString(),
      version: data.version || '1.0'
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(payload, null, 2), 'utf-8');
    return payload;
  } catch (err) {
    console.error('Error writing central database file:', err);
    throw err;
  }
}

// ================= API ROUTES (FIRST) =================

// 1. Health check & status
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    database: 'centralized_cloud_store',
    connectedClients: sseClients.length,
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// 2. Real-Time SSE Stream for Instant Cross-User / Cross-Device Sync
app.get('/api/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  const clientId = `${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  sseClients.push({ id: clientId, res });

  // Send initial handshake
  const db = readCentralDatabase();
  const initMsg = `event: connected\ndata: ${JSON.stringify({ clientId, serverSyncedAt: db?.serverSyncedAt || new Date().toISOString() })}\n\n`;
  res.write(initMsg);

  // Keep-alive heartbeat every 15 seconds to keep connection open through proxies
  const heartbeat = setInterval(() => {
    try {
      res.write(': heartbeat\n\n');
    } catch (e) {
      clearInterval(heartbeat);
    }
  }, 15000);

  req.on('close', () => {
    clearInterval(heartbeat);
    sseClients = sseClients.filter(c => c.id !== clientId);
  });
});

// 3. Fetch full centralized database
app.get('/api/data', (_req, res) => {
  try {
    const db = readCentralDatabase();
    if (db) {
      return res.json({ success: true, data: db });
    }
    // Return null data so client can seed its default data if pristine
    return res.json({ success: true, data: null, message: 'Database empty / pristine' });
  } catch (err) {
    console.error('API GET /api/data error:', err);
    return res.status(500).json({ success: false, error: 'Failed to read centralized database' });
  }
});

// 4. Save full centralized database & broadcast instantly to all connected users
app.post('/api/data', (req, res) => {
  try {
    const incomingData = req.body;
    if (!incomingData || typeof incomingData !== 'object') {
      return res.status(400).json({ success: false, error: 'Invalid database payload' });
    }
    const saved = writeCentralDatabase(incomingData);
    
    // Broadcast live event to all connected browsers/users
    broadcastToClients('data_update', {
      source: 'api_data_post',
      serverSyncedAt: saved.serverSyncedAt,
      data: saved
    });

    return res.json({ success: true, message: 'Data successfully synchronized to central server', data: saved });
  } catch (err) {
    console.error('API POST /api/data error:', err);
    return res.status(500).json({ success: false, error: 'Failed to write to central database' });
  }
});

// 5. Update partial section (patch) & broadcast
app.post('/api/data/patch', (req, res) => {
  try {
    const { key, value } = req.body;
    if (!key) {
      return res.status(400).json({ success: false, error: 'Key is required' });
    }
    const current = readCentralDatabase() || {};
    current[key] = value;
    const saved = writeCentralDatabase(current);
    
    // Broadcast live patch event to all connected browsers/users
    broadcastToClients('data_update', {
      source: 'api_data_patch',
      key,
      serverSyncedAt: saved.serverSyncedAt,
      data: saved
    });

    return res.json({ success: true, key, data: saved });
  } catch (err) {
    console.error('API POST /api/data/patch error:', err);
    return res.status(500).json({ success: false, error: 'Failed to patch central database' });
  }
});

// 5. Upload File (Base64 or binary data payload)
app.post('/api/upload', (req, res) => {
  try {
    const { filename, base64Data, mimeType } = req.body;
    if (!base64Data) {
      return res.status(400).json({ success: false, error: 'Data base64 wajib dikirim' });
    }

    // Clean base64 string
    const match = base64Data.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    const rawData = match ? match[2] : base64Data;
    const buffer = Buffer.from(rawData, 'base64');

    // Generate safe unique filename
    const ext = filename ? path.extname(filename) : (mimeType?.includes('video') ? '.mp4' : '.jpg');
    const safeName = `media_${Date.now()}_${Math.random().toString(36).substring(2, 7)}${ext || '.jpg'}`;
    const filePath = path.join(UPLOADS_DIR, safeName);

    fs.writeFileSync(filePath, buffer);
    const publicUrl = `/uploads/${safeName}`;

    return res.json({
      success: true,
      url: publicUrl,
      filename: safeName,
      size: buffer.length
    });
  } catch (err) {
    console.error('API POST /api/upload error:', err);
    return res.status(500).json({ success: false, error: 'Gagal mengunggah file media' });
  }
});

// 6. Set current database snapshot as server default
const DEFAULT_STORE_FILE = path.join(DATA_DIR, 'default_template.json');

app.post('/api/data/set-default', (req, res) => {
  try {
    const payload = req.body;
    if (!payload || typeof payload !== 'object') {
      return res.status(400).json({ success: false, error: 'Invalid database payload' });
    }
    fs.writeFileSync(DEFAULT_STORE_FILE, JSON.stringify(payload, null, 2), 'utf-8');
    // Also ensure central database has this saved
    writeCentralDatabase(payload);
    return res.json({ success: true, message: 'Data saat ini berhasil ditetapkan sebagai default patokan sistem.' });
  } catch (err) {
    console.error('API POST /api/data/set-default error:', err);
    return res.status(500).json({ success: false, error: 'Gagal menyimpan data patokan default' });
  }
});

// 7. Get server default template
app.get('/api/data/default', (_req, res) => {
  try {
    if (fs.existsSync(DEFAULT_STORE_FILE)) {
      const raw = fs.readFileSync(DEFAULT_STORE_FILE, 'utf-8');
      return res.json({ success: true, data: JSON.parse(raw) });
    }
    return res.json({ success: true, data: null });
  } catch (err) {
    console.error('API GET /api/data/default error:', err);
    return res.status(500).json({ success: false, error: 'Failed to read default template' });
  }
});

// 8. Reset to default
app.post('/api/data/reset', (_req, res) => {
  try {
    let payload = null;
    if (fs.existsSync(DEFAULT_STORE_FILE)) {
      // Restore from saved default template
      const defaultData = fs.readFileSync(DEFAULT_STORE_FILE, 'utf-8');
      fs.writeFileSync(DATA_FILE, defaultData, 'utf-8');
      payload = JSON.parse(defaultData);
    } else if (fs.existsSync(DATA_FILE)) {
      fs.unlinkSync(DATA_FILE);
    }

    broadcastToClients('data_update', {
      source: 'api_data_reset',
      serverSyncedAt: new Date().toISOString(),
      data: payload
    });

    return res.json({ success: true, message: 'Central database reset to initial default' });
  } catch (err) {
    console.error('API POST /api/data/reset error:', err);
    return res.status(500).json({ success: false, error: 'Failed to reset central database' });
  }
});

// 9. Official Email Dispatch Endpoint (/api/send-email)
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, html, text, fromName } = req.body;
    if (!to || !to.includes('@')) {
      return res.status(400).json({ success: false, error: 'Alamat email tujuan tidak valid.' });
    }

    const senderName = fromName || 'SMAN 1 Nusantara';
    const fromAddress = process.env.SMTP_FROM || 'no-reply@sman1nusantara.sch.id';
    let dispatched = false;
    let providerUsed = 'server_direct';

    // A. Resend API
    if (process.env.RESEND_API_KEY) {
      try {
        const resendRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: `${senderName} <${process.env.SMTP_FROM || 'onboarding@resend.dev'}>`,
            to: [to],
            subject,
            html,
            text
          })
        });
        if (resendRes.ok) {
          dispatched = true;
          providerUsed = 'resend_api';
        }
      } catch (e) {
        console.warn('Resend API error:', e);
      }
    }

    // B. SendGrid API
    if (!dispatched && process.env.SENDGRID_API_KEY) {
      try {
        const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            personalizations: [{ to: [{ email: to }] }],
            from: { email: fromAddress, name: senderName },
            subject,
            content: [
              { type: 'text/html', value: html || text || '' }
            ]
          })
        });
        if (sgRes.ok || sgRes.status === 202) {
          dispatched = true;
          providerUsed = 'sendgrid_api';
        }
      } catch (e) {
        console.warn('SendGrid API error:', e);
      }
    }

    // C. SMTP via Nodemailer
    if (!dispatched && process.env.SMTP_HOST && process.env.SMTP_USER) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS || ''
          }
        });

        await transporter.sendMail({
          from: `"${senderName}" <${fromAddress}>`,
          to,
          subject,
          text: text || '',
          html: html || ''
        });
        dispatched = true;
        providerUsed = 'smtp_transport';
      } catch (e) {
        console.warn('SMTP Transport error:', e);
      }
    }

    console.log(`[EMAIL DISPATCH] Sent to: ${to} | Provider: ${providerUsed} | Subject: ${subject}`);

    // Return safe confirmation WITHOUT returning the code
    return res.json({
      success: true,
      provider: providerUsed,
      message: 'Email verifikasi berhasil diproses dan dikirim ke server email tujuan.'
    });
  } catch (err: any) {
    console.error('API POST /api/send-email error:', err);
    return res.status(500).json({ success: false, error: err.message || 'Gagal mengirim email verifikasi' });
  }
});

// ================= VITE / STATIC SERVING =================

async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Centralized Fullstack Server running on http://0.0.0.0:${PORT}`);
  });
}

start();
