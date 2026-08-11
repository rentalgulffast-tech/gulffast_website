import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  slug: string;
  tier: 1 | 2;
  basePath: string; // '/equipment' or '/manpower'
  meta?: string; // e.g. "10 units in our own fleet" or "19 certified job titles"
}

export default function CategoryCard({ name, slug, tier, basePath, meta }: CategoryCardProps) {
  return (
    <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 card-hover-lift flex flex-col justify-between group shadow-sm">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFF7ED] text-[#C0714A] border border-[#FFEDD5] px-2.5 py-1 rounded-full">
            {tier === 1 ? 'Featured' : 'Direct Fleet Ready'}
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-[#0F172A] group-hover:text-[#C0714A] transition-colors mb-2">
          {name}
        </h3>

        {meta && (
          <p className="text-slate-600 text-xs leading-relaxed mb-4 font-normal">
            {meta}
          </p>
        )}
      </div>

      <div className="pt-4 border-t border-[#E2DED4] flex items-center justify-between">
        <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Aramco / SABIC Ready
        </span>
        <Link
          href={`${basePath}/${slug}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold text-xs transition-colors shadow-sm"
        >
          View &amp; Quote →
        </Link>
      </div>
    </div>
  );
}
