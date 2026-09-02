'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { GA_MEASUREMENT_ID, trackEvent, trackPageView } from '@/lib/analytics';

/**
 * GA4 with the events that actually matter for this business.
 *
 * Renders nothing at all unless NEXT_PUBLIC_GA_ID is set, so the site is
 * unaffected until the GA4 property exists.
 *
 * Phone and WhatsApp clicks are captured with one delegated listener rather
 * than an onClick on every link, so every instance sitewide is covered —
 * header, footer, urgent page, sticky button — including any added later.
 */
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';

      if (href.startsWith('tel:')) {
        trackEvent('contact_phone_click', { link_url: href, page_path: window.location.pathname });
      } else if (href.includes('wa.me')) {
        trackEvent('contact_whatsapp_click', { page_path: window.location.pathname });
      } else if (href.startsWith('mailto:')) {
        trackEvent('contact_email_click', { page_path: window.location.pathname });
      }
    };

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
