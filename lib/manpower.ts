import { manpowerCategories, ManpowerCategory } from '@/lib/manpower-categories';
import { slugify } from '@/lib/slug';
import { cities } from '@/lib/cities';
import { FaqEntry } from '@/lib/faq';

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

const NAME_STOPWORDS = new Set(['and', 'the', 'supply', 'trades']);

function nameTokens(name: string): Set<string> {
  return new Set(
    name.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 2 && !NAME_STOPWORDS.has(w))
  );
}

export function getRelatedManpowerCategories(category: ManpowerCategory, count = 4): ManpowerCategory[] {
  const tokens = nameTokens(category.name);
  const scored = manpowerCategories
    .filter((c) => c.slug !== category.slug)
    .map((c) => {
      const shared = [...nameTokens(c.name)].filter((t) => tokens.has(t)).length;
      return { c, score: shared * 10 + (c.tier === category.tier ? 1 : 0) };
    })
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.c);
}

export function categoryHasCertification(category: ManpowerCategory): { aramco: boolean; tuv: boolean } {
  return {
    aramco: category.jobTitles.some((t) => t.includes('Aramco')),
    tuv: category.jobTitles.some((t) => t.includes('TUV'))
  };
}

export function getManpowerCategoryFaqs(category: ManpowerCategory): FaqEntry[] {
  const cert = categoryHasCertification(category);
  const certLine = cert.aramco || cert.tuv
    ? `Yes — our ${category.name} category includes ${[cert.aramco && 'Aramco-approved', cert.tuv && 'TUV-certified'].filter(Boolean).join(' and ')} job titles specifically. Check the job title grid on this page for which ones.`
    : `Certification requirements vary by job title within ${category.name}. Confirm your site's specific requirement when requesting a quote.`;

  const coverageLine = category.tier === 1
    ? `${category.name} crews are dispatched to all ${cities.length} of our covered cities: ${cities.map((c) => c.name).join(', ')}.`
    : `${category.name} crews are available nationwide across Saudi Arabia through our direct recruitment and outreach network.`;

  return [
    {
      question: `Are ${category.name} trades Aramco or TUV certified?`,
      answer: certLine
    },
    {
      question: `Does GulfFast directly employ its ${category.name.toLowerCase()} workforce?`,
      answer: `Yes. GulfFast directly recruits and sponsors ${category.name.toLowerCase()} personnel — we are not a staffing agency placing third-party-employed workers.`
    },
    {
      question: `Which cities can GulfFast mobilize ${category.name.toLowerCase()} crews to?`,
      answer: coverageLine
    }
  ];
}
