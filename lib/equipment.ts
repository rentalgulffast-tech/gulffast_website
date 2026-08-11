import { equipmentCategories, EquipmentCategory } from '@/lib/equipment-categories';
import { fleetReference, FleetItem } from '@/lib/fleet-reference';
import { slugify } from '@/lib/slug';

export interface EquipmentLandingPage {
  keyword: string;
  keywordSlug: string;
  category: EquipmentCategory;
}

export function getEquipmentCategories(): EquipmentCategory[] {
  return equipmentCategories;
}

export function getEquipmentCategoryBySlug(slug: string): EquipmentCategory | undefined {
  return equipmentCategories.find((cat) => cat.slug === slug);
}

export function getEquipmentTier1Categories(): EquipmentCategory[] {
  return equipmentCategories.filter((cat) => cat.tier === 1);
}

export function getEquipmentLandingPages(): EquipmentLandingPage[] {
  return equipmentCategories
    .filter((cat) => cat.tier === 1)
    .flatMap((category) =>
      category.landingKeywords.map((keyword) => ({
        keyword,
        keywordSlug: slugify(keyword),
        category,
      }))
    );
}

export function getEquipmentLandingPageBySlug(keywordSlug: string): EquipmentLandingPage | undefined {
  return getEquipmentLandingPages().find((page) => page.keywordSlug === keywordSlug);
}

export function getOwnedFleetForCategory(categoryName: string): FleetItem[] {
  return fleetReference.filter(
    (item) => item.category === categoryName && item.recordType === 'Owned Fleet Asset'
  );
}
