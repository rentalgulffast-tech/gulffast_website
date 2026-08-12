import { equipmentCategories, EquipmentCategory } from '@/lib/equipment-categories';
import { fleetReference, FleetItem } from '@/lib/fleet-reference';
import { slugify } from '@/lib/slug';
import { cities } from '@/lib/cities';
import { FaqEntry } from '@/lib/faq';

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

const NAME_STOPWORDS = new Set(['and', 'the', 'equipment', 'machines', 'machinery']);

function nameTokens(name: string): Set<string> {
  return new Set(
    name.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !NAME_STOPWORDS.has(w))
  );
}

export function getRelatedEquipmentCategories(category: EquipmentCategory, count = 4): EquipmentCategory[] {
  const tokens = nameTokens(category.name);
  const scored = equipmentCategories
    .filter((c) => c.slug !== category.slug)
    .map((c) => {
      const shared = [...nameTokens(c.name)].filter((t) => tokens.has(t)).length;
      return { c, score: shared * 10 + (c.tier === category.tier ? 1 : 0) };
    })
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.c);
}

export function getEquipmentCategoryFaqs(category: EquipmentCategory): FaqEntry[] {
  const fleetLine = category.ownedFleetCount > 0
    ? `GulfFast holds ${category.ownedFleetCount} ${category.ownedFleetCount === 1 ? 'unit' : 'units'} of ${category.name.toLowerCase()} in our own fleet, dispatched directly from Al Khobar.`
    : `${category.name} is sourced through our partner network for this category — GulfFast remains the direct contracting party, not a broker handoff.`;

  const coverageLine = category.tier === 1
    ? `${category.name} is dispatched to all ${cities.length} of our covered cities: ${cities.map((c) => c.name).join(', ')}.`
    : `${category.name} is available nationwide across Saudi Arabia through our direct and partner network.`;

  return [
    {
      question: `Is ${category.name} available bare (dry-hire) or with an operator (wet-hire)?`,
      answer: `Both are available — GulfFast offers ${category.name.toLowerCase()} as bare-rental (dry-hire) or fully operated & maintained (wet-hire) with a certified operator. Let us know which you need when requesting a quote.`
    },
    {
      question: `Does GulfFast own its ${category.name.toLowerCase()} fleet?`,
      answer: fleetLine
    },
    {
      question: `Which cities can GulfFast dispatch ${category.name.toLowerCase()} to?`,
      answer: coverageLine
    }
  ];
}
