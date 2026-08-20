import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  slug: string;
  tier: 1 | 2;
  basePath: string; // '/equipment' or '/manpower'
  meta?: string; // e.g. "10 units in our own fleet" or "19 certified job titles"
  certificationBadge?: string; // only pass when real data backs it, e.g. "Aramco-Approved" / "TUV-Certified"
}

export default function CategoryCard({ name, slug, tier, basePath, meta, certificationBadge }: CategoryCardProps) {
  return (
    <div className="bg-white border border-[#D7E6F5] rounded-2xl p-6 card-hover-lift flex flex-col justify-between group shadow-sm">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#EAF4FC] text-[#2B6CB0] border border-[#D7E6F5] px-2.5 py-1 rounded-full">
            {tier === 1 ? 'Featured' : 'Direct Fleet Ready'}
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-[#12233B] group-hover:text-[#2B6CB0] transition-colors mb-2">
          {name}
        </h3>

        {meta && (
          <p className="text-slate-600 text-xs leading-relaxed mb-4 font-normal">
            {meta}
          </p>
        )}
      </div>

      <div className={`pt-4 border-t border-[#D7E6F5] flex items-center ${certificationBadge ? 'justify-between' : 'justify-end'}`}>
        {certificationBadge && (
          <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> {certificationBadge}
          </span>
        )}
        <Link
          href={`${basePath}/${slug}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#2B6CB0] hover:bg-[#1D6FB8] text-white font-bold text-xs transition-colors shadow-sm"
        >
          View &amp; Quote →
        </Link>
      </div>
    </div>
  );
}
