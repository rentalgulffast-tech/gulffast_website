'use client';

import { WHATSAPP_NUMBER } from '@/lib/site-stats';

const WHATSAPP_MESSAGE = encodeURIComponent('Hello GulfFast, I would like to request a quote.');

export default function StickyWhatsApp() {
  // No real GulfFast WhatsApp number configured yet — render nothing rather than
  // point at the wrong business or a dead link. See lib/site-stats.ts.
  if (!WHATSAPP_NUMBER) return null;

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with GulfFast on WhatsApp"
      className="wa-pulse fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
      style={{ background: 'var(--whatsapp-green)' }}
    >
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12.017 2C6.492 2 2.017 6.475 2.017 12c0 1.9.53 3.729 1.53 5.312L2 22l4.812-1.514A9.94 9.94 0 0012.017 22c5.524 0 10-4.476 10-10s-4.476-10-10-10zm0 18.184a8.15 8.15 0 01-4.16-1.14l-.298-.177-3.096.974.99-3.02-.194-.31a8.157 8.157 0 01-1.242-4.323c0-4.51 3.672-8.184 8.183-8.184 4.51 0 8.184 3.673 8.184 8.184 0 4.511-3.673 8.184-8.184 8.184z"/>
      </svg>
    </a>
  );
}
