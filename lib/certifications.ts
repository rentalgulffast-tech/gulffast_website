import { manpowerCategories } from '@/lib/manpower-categories';

export interface CertificationSignal {
  name: string;
  description: string;
  categorySlugs: string[];
}

function categoriesMentioning(keyword: string): string[] {
  return manpowerCategories
    .filter((cat) => cat.jobTitles.some((title) => title.includes(keyword)))
    .map((cat) => cat.slug);
}

// Derived directly from job titles in lib/manpower-categories.ts that contain
// "Aramco" or "TUV" — do not hand-edit; regenerate if the source data changes.
export function getCertificationSignals(): CertificationSignal[] {
  return [
    {
      name: 'Aramco-Approved Trades',
      description: 'Job titles explicitly qualified under Saudi Aramco approval appear in our QA/QC, Rigging & Scaffolding, and Heavy Equipment Operator categories.',
      categorySlugs: categoriesMentioning('Aramco')
    },
    {
      name: 'TUV-Certified Trades',
      description: 'TUV-certified riggers, scaffolders, and operators appear in our Rigging & Scaffolding, Painting & Coating, and Heavy Equipment Operator categories.',
      categorySlugs: categoriesMentioning('TUV')
    }
  ];
}
