import Link from 'next/link';
import { CategoryItem } from '@/lib/data';

interface CategoryCardProps {
  category: CategoryItem;
  basePath: string; // e.g. '/equipment-rental', '/vehicle-rental', '/manpower-supply'
}

export default function CategoryCard({ category, basePath }: CategoryCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-200 px-2 py-0.5 rounded">
            KSA Direct Supply
          </span>
          <span className="text-[11px] text-slate-500 font-medium">
            {category.cityCoverage.length} Cities
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors mb-2">
          {category.title}
        </h3>

        <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4 font-normal">
          {category.shortSummary}
        </p>

        {/* Specs highlights */}
        {category.specs && category.specs.length > 0 && (
          <div className="bg-slate-50 rounded-md p-3 border border-slate-200 space-y-1.5 mb-4 text-[11px]">
            {category.specs.slice(0, 2).map((spec, i) => (
              <div key={i} className="flex justify-between items-center text-slate-700">
                <span className="text-slate-500 font-medium">{spec.name}:</span>
                <span className="font-bold text-slate-900 truncate max-w-[60%]">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Certifications highlights for manpower */}
        {category.certifications && category.certifications.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {category.certifications.slice(0, 3).map((cert, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] px-2 py-0.5 rounded border border-slate-200 font-medium">
                ✓ {cert}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] text-slate-500 font-medium">
          Aramco / SABIC Approved
        </span>
        <Link
          href={`${basePath}/${category.slug}`}
          className="inline-flex items-center gap-1 text-amber-700 font-bold text-xs hover:text-amber-800 transition-colors"
        >
          View Specs &amp; Quote →
        </Link>
      </div>
    </div>
  );
}
