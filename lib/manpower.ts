import { manpowerCategories, ManpowerCategory } from '@/lib/manpower-categories';
import { slugify } from '@/lib/slug';

export interface ManpowerLandingPage {
  keyword: string;
  keywordSlug: string;
  category: ManpowerCategory;
}

export function getManpowerCategories(): ManpowerCategory[] {
  return manpowerCategories;
}

export function getManpowerCategoryBySlug(slug: string): ManpowerCategory | undefined {
  return manpowerCategories.find((cat) => cat.slug === slug);
}

export function getManpowerTier1Categories(): ManpowerCategory[] {
  return manpowerCategories.filter((cat) => cat.tier === 1);
}

export function getManpowerLandingPages(): ManpowerLandingPage[] {
  return manpowerCategories
    .filter((cat) => cat.tier === 1)
    .flatMap((category) =>
      category.landingKeywords.map((keyword) => ({
        keyword,
        keywordSlug: slugify(keyword),
        category,
      }))
    );
}

export function getManpowerLandingPageBySlug(keywordSlug: string): ManpowerLandingPage | undefined {
  return getManpowerLandingPages().find((page) => page.keywordSlug === keywordSlug);
}
