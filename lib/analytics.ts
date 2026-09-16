// Analytics wiring for GulfFast.
//
// Two supported modes, and deliberately never both at once — running GA4
// directly AND through GTM double-counts every pageview and makes the data
// useless.
//
//   NEXT_PUBLIC_GTM_ID   e.g. GTM-XXXXXXX   preferred. Loads Google Tag
//                        Manager only. GA4 is configured inside GTM, and the
//                        events below arrive as dataLayer events you build
//                        triggers on. Lets you add Google Ads or Meta tags
//                        later without a code deploy.
//
//   NEXT_PUBLIC_GA_ID    e.g. G-XXXXXXXXXX  fallback, used only when no GTM
//                        container is set. Loads GA4 directly.
//
// If both are set, GTM wins and GA4-direct is skipped.
// If neither is set, nothing loads at all and the site is unaffected.

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export const usingGtm = Boolean(GTM_ID);
export const usingGa4Direct = Boolean(!GTM_ID && GA_MEASUREMENT_ID);
export const analyticsEnabled = Boolean(GTM_ID || GA_MEASUREMENT_ID);

export function trackEvent(name: string, params: Record<string, string | number | undefined> = {}) {
  if (typeof window === 'undefined' || !analyticsEnabled) return;

  if (usingGtm) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
    return;
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

/**
 * Only used in GA4-direct mode. Under GTM, route changes are picked up by
 * GTM's own History Change trigger, so sending a page view from here as well
 * would count every navigation twice.
 */
export function trackPageView(path: string) {
  if (typeof window === 'undefined' || !usingGa4Direct) return;
  if (typeof window.gtag !== 'function' || !GA_MEASUREMENT_ID) return;
  window.gtag('config', GA_MEASUREMENT_ID, { page_path: path });
}
