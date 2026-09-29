import { InquiryFormData } from '../types';

// Defina VITE_FORM_ENDPOINT (ex.: https://formspree.io/f/xxxx) para enviar as consultas de verdade.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export const IS_DEMO_FORM = !ENDPOINT;

export async function submitInquiry(data: InquiryFormData): Promise<{ ok: boolean }> {
  if (!ENDPOINT) {
    await new Promise((r) => setTimeout(r, 700));
    return { ok: true };
  }
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
    return { ok: res.ok };
  } catch {
    return { ok: false };
  }
}
