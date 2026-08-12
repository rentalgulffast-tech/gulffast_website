import { equipmentCategories } from '@/lib/equipment-categories';
import { manpowerCategories } from '@/lib/manpower-categories';
import { cities } from '@/lib/cities';

const FOUNDING_YEAR = 1999;

// GulfFast's real WhatsApp Business number. Left empty on purpose — the number
// previously wired up here (+966 56 867 6710) belongs to a different business,
// not GulfFast, and must not be used. All WhatsApp UI (StickyWhatsApp, the header
// icon, Footer's WhatsApp line, QuoteForm's post-submit handoff) checks this value
// and renders nothing until a real GulfFast WhatsApp number is confirmed and set here.
export const WHATSAPP_NUMBER = '';

export interface SiteStats {
  yearsInBusiness: number;
  foundingYear: number;
  equipmentCategoryCount: number;
  manpowerCategoryCount: number;
  jobTitleCount: number;
  cityCount: number;
}

export function getSiteStats(): SiteStats {
  const currentYear = new Date().getFullYear();
  return {
    yearsInBusiness: currentYear - FOUNDING_YEAR,
    foundingYear: FOUNDING_YEAR,
    equipmentCategoryCount: equipmentCategories.length,
    manpowerCategoryCount: manpowerCategories.length,
    jobTitleCount: manpowerCategories.reduce((sum, cat) => sum + cat.jobTitles.length, 0),
    cityCount: cities.length
  };
}
