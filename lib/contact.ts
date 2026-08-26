// Single source of truth for GulfFast's site-wide contact details.
// Import from here instead of hardcoding phone numbers, email addresses, or the
// WhatsApp number anywhere else in the codebase.

export const CONTACT = {
  phonePrimary: '+966 50 752 9347',
  phoneSecondary: '+966 56 304 3847',
  email: 'rental@gulffast.co',
  // Digits-only, no leading +, as required by the wa.me link format.
  whatsappNumber: '966507529347'
} as const;

export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

export function mailtoHref(email: string = CONTACT.email): string {
  return `mailto:${email}`;
}
