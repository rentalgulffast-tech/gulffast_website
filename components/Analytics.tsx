'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  GA_MEASUREMENT_ID,
  GTM_ID,
  analyticsEnabled,
  usingGtm,
  trackEvent,
  trackPageView
} from '@/lib/analytics';

/**
 * Loads Google Tag Manager, or GA4 directly when no GTM container is set,
 * and reports the events that actually matter for this business.
 *
 * Renders nothing at all when neither environment variable is present, so the
 * site is completely unaffected until you switch tracking on.
 *
 * Phone, WhatsApp and email clicks are captured with one delegated listener
 * rather than an onClick on every link, so every instance sitewide is covered —
 * header, footer, urgent page, sticky button — including any added later.
 */
export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  useEffect(() => {
    if (!analyticsEnabled) return;

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest?.('a');
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

  if (!analyticsEnabled) return null;

  if (usingGtm) {
    return (
      <>
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
      </>
    );
  }

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
