// 📅 Google Calendar API Integration Service
import { AcademicCalendarEvent } from '../types';

export interface GoogleCalendarItem {
  id: string;
  summary: string;
  description?: string;
  primary?: boolean;
  backgroundColor?: string;
  foregroundColor?: string;
  timeZone?: string;
}

export interface GoogleCalendarEvent {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  htmlLink?: string;
  status?: string;
  start: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  creator?: {
    email?: string;
    displayName?: string;
  };
  organizer?: {
    email?: string;
    displayName?: string;
  };
  attendees?: Array<{
    email: string;
    displayName?: string;
    responseStatus?: string;
  }>;
}

export interface CreateEventInput {
  summary: string;
  description?: string;
  location?: string;
  startDate: string; // YYYY-MM-DD
  endDate?: string;  // YYYY-MM-DD
  startTime?: string; // HH:mm
  endTime?: string;   // HH:mm
  allDay?: boolean;
}

/**
 * List primary and secondary calendars
 */
export async function listGoogleCalendars(accessToken: string): Promise<GoogleCalendarItem[]> {
  const response = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal memuat daftar Google Calendar (${response.status})`);
  }

  const data = await response.json();
  return data.items || [];
}

/**
 * List events from primary calendar
 */
export async function listGoogleCalendarEvents(
  accessToken: string,
  calendarId: string = 'primary',
  params?: {
    timeMin?: string;
    timeMax?: string;
    maxResults?: number;
    q?: string;
  }
): Promise<GoogleCalendarEvent[]> {
  const query = new URLSearchParams();
  query.append('singleEvents', 'true');
  query.append('orderBy', 'startTime');
  query.append('maxResults', String(params?.maxResults || 50));

  if (params?.timeMin) query.append('timeMin', params.timeMin);
  if (params?.timeMax) query.append('timeMax', params.timeMax);
  if (params?.q) query.append('q', params.q);

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?${query.toString()}`;
  
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal memuat agenda Google Calendar (${response.status})`);
  }

  const data = await response.json();
  return data.items || [];
}

/**
 * Create a new event on Google Calendar
 */
export async function createGoogleCalendarEvent(
  accessToken: string,
  event: CreateEventInput,
  calendarId: string = 'primary'
): Promise<GoogleCalendarEvent> {
  const isAllDay = event.allDay !== false && (!event.startTime || !event.endTime);

  let startObj: { date?: string; dateTime?: string; timeZone?: string } = {};
  let endObj: { date?: string; dateTime?: string; timeZone?: string } = {};

  if (isAllDay) {
    startObj = { date: event.startDate };
    // Google Calendar API all-day end date is exclusive, so next day
    const endDate = event.endDate || event.startDate;
    const endD = new Date(endDate);
    endD.setDate(endD.getDate() + 1);
    const endFormatted = endD.toISOString().split('T')[0];
    endObj = { date: endFormatted };
  } else {
    const startIso = `${event.startDate}T${event.startTime || '08:00'}:00`;
    const endIso = `${event.endDate || event.startDate}T${event.endTime || '09:00'}:00`;
    startObj = { dateTime: new Date(startIso).toISOString() };
    endObj = { dateTime: new Date(endIso).toISOString() };
  }

  const payload = {
    summary: event.summary,
    description: event.description || '',
    location: event.location || '',
    start: startObj,
    end: endObj
  };

  const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal membuat agenda Google Calendar (${response.status})`);
  }

  return response.json();
}

/**
 * Update an existing event on Google Calendar
 */
export async function updateGoogleCalendarEvent(
  accessToken: string,
  eventId: string,
  event: Partial<CreateEventInput>,
  calendarId: string = 'primary'
): Promise<GoogleCalendarEvent> {
  const payload: any = {};
  if (event.summary !== undefined) payload.summary = event.summary;
  if (event.description !== undefined) payload.description = event.description;
  if (event.location !== undefined) payload.location = event.location;

  if (event.startDate) {
    if (event.allDay) {
      payload.start = { date: event.startDate };
      const endDate = event.endDate || event.startDate;
      const endD = new Date(endDate);
      endD.setDate(endD.getDate() + 1);
      payload.end = { date: endD.toISOString().split('T')[0] };
    } else {
      const startIso = `${event.startDate}T${event.startTime || '08:00'}:00`;
      const endIso = `${event.endDate || event.startDate}T${event.endTime || '09:00'}:00`;
      payload.start = { dateTime: new Date(startIso).toISOString() };
      payload.end = { dateTime: new Date(endIso).toISOString() };
    }
  }

  const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events/${encodeURIComponent(eventId)}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal memperbarui agenda Google Calendar (${response.status})`);
  }

  return response.json();
}

/**
 * Delete an event from Google Calendar (MUST prompt user confirmation first!)
 */
export async function deleteGoogleCalendarEvent(
  accessToken: string,
  eventId: string,
  calendarId: string = 'primary'
): Promise<boolean> {
  const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events/${encodeURIComponent(eventId)}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!response.ok && response.status !== 204 && response.status !== 404 && response.status !== 410) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.error?.message || `Gagal menghapus agenda Google Calendar (${response.status})`);
  }

  return true;
}

/**
 * Sync School Academic Calendar events to User's Google Calendar in batch
 */
export async function syncSchoolEventsToGoogleCalendar(
  accessToken: string,
  events: AcademicCalendarEvent[],
  schoolName: string = 'SMA Negeri 1 Nusantara'
): Promise<{ successCount: number; failCount: number; createdEvents: GoogleCalendarEvent[] }> {
  const createdEvents: GoogleCalendarEvent[] = [];
  let successCount = 0;
  let failCount = 0;

  for (const event of events) {
    try {
      const summary = `[${schoolName}] ${event.title}`;
      const description = `Kategori: ${event.category || 'Akademik'}\nSemester: ${event.semester || 'Ganjil'}\n${event.description || ''}\n\nDisinkronkan otomatis dari Portal Sekolah ${schoolName}`;

      const created = await createGoogleCalendarEvent(accessToken, {
        summary,
        description,
        location: schoolName,
        startDate: event.startDate,
        endDate: event.endDate || event.startDate,
        allDay: true
      });

      createdEvents.push(created);
      successCount++;
    } catch (err) {
      console.warn(`Failed to sync calendar event '${event.title}':`, err);
      failCount++;
    }
  }

  return { successCount, failCount, createdEvents };
}
