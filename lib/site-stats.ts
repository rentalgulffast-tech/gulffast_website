import { equipmentCategories } from '@/lib/equipment-categories';
import { equipmentClusters } from '@/lib/equipment-clusters';
import { manpowerCategories } from '@/lib/manpower-categories';
import { cities } from '@/lib/cities';

const FOUNDING_YEAR = 1999;

export interface SiteStats {
  yearsInBusiness: number;
  foundingYear: number;
  equipmentCategoryCount: number;
  equipmentClusterCount: number;
  ownedFleetUnitsCount: number;
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
    equipmentClusterCount: equipmentClusters.length,
    ownedFleetUnitsCount: equipmentCategories.reduce((sum, cat) => sum + cat.ownedFleetCount, 0),
    manpowerCategoryCount: manpowerCategories.length,
    jobTitleCount: manpowerCategories.reduce((sum, cat) => sum + cat.jobTitles.length, 0),
    cityCount: cities.length
  };
}
