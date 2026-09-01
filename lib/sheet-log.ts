// Mirrors website form submissions into the GulfFast Registrations Google Sheet
// via an Apps Script web app.
//
// This is deliberately best-effort. Email is the system of record; the sheet is
// a convenience copy. If the webhook is unset, slow, or failing, the visitor's
// submission must still succeed and the email must still send — so every call
// here is awaited with its own timeout and every error is swallowed.
//
// Environment variables (set in Vercel, never committed):
//   SHEETS_WEBHOOK_URL     the Apps Script deployment URL
//   SHEETS_WEBHOOK_SECRET  the same random string set at the top of the script

const TIMEOUT_MS = 5000;

export type SheetRecordType = 'candidate' | 'supplier' | 'quote';

interface SheetPayload {
  type: SheetRecordType;
  record: Record<string, string | number | undefined>;
  /** Base64-encoded CV, candidates only. */
  cvBase64?: string;
}

export async function logToSheet(payload: SheetPayload): Promise<void> {
  const url = process.env.SHEETS_WEBHOOK_URL;
  const secret = process.env.SHEETS_WEBHOOK_SECRET;

  // Not configured yet — this is a normal state, not an error.
  if (!url || !secret) return;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, ...payload }),
      signal: controller.signal,
      redirect: 'follow'
    });
  } catch {
    // Never surface this to the visitor and never log the payload — it holds
    // personal data. The email has already been sent by this point.
    console.error('Sheet log failed');
  } finally {
    clearTimeout(timer);
  }
}
