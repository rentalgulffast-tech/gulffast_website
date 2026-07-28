import Link from 'next/link';
import { CategoryItem } from '@/lib/data';

interface CategoryCardProps {
  category: CategoryItem;
  basePath: string; // e.g. '/equipment-rental', '/vehicle-rental', '/manpower-supply'
}

export default function CategoryCard({ category, basePath }: CategoryCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group shadow-lg">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2.5 py-1 rounded">
            KSA Direct Supply
          </span>
          <span className="text-[11px] text-slate-400">
            {category.cityCoverage.length} Cities Covered
          </span>
        </div>

        <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
          {category.title}
        </h3>

        <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4">
          {category.shortSummary}
        </p>

        {/* Specs highlights */}
        {category.specs && category.specs.length > 0 && (
          <div className="bg-slate-950/80 rounded-lg p-3 border border-slate-800/80 space-y-1.5 mb-4 text-[11px]">
            {category.specs.slice(0, 2).map((spec, i) => (
              <div key={i} className="flex justify-between items-center text-slate-300">
                <span className="text-slate-400 font-medium">{spec.name}:</span>
                <span className="font-semibold text-amber-300 truncate max-w-[60%]">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Certifications highlights for manpower */}
        {category.certifications && category.certifications.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {category.certifications.slice(0, 3).map((cert, idx) => (
              <span key={idx} className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded border border-slate-700">
                ✓ {cert}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <span className="text-[11px] text-slate-400">
          Aramco / SABIC Compliant
        </span>
        <Link
          href={`${basePath}/${category.slug}`}
          className="inline-flex items-center gap-1.5 text-amber-400 font-bold text-xs hover:text-amber-300 group-hover:translate-x-0.5 transition-transform"
        >
          View Details &amp; Quote →
        </Link>
      </div>
    </div>
  );
}
