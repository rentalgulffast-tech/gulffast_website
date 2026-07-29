import Link from 'next/link';
import { CategoryItem } from '@/lib/data';

interface CategoryCardProps {
  category: CategoryItem;
  basePath: string; // e.g. '/equipment-rental', '/vehicle-rental', '/manpower-supply'
}

export default function CategoryCard({ category, basePath }: CategoryCardProps) {
  return (
    <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 card-hover-lift flex flex-col justify-between group shadow-sm">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFF7ED] text-[#C2410C] border border-[#FFEDD5] px-2.5 py-1 rounded-full">
            Direct Fleet Ready
          </span>
          <span className="text-[11px] text-slate-500 font-semibold">
            📍 {category.cityCoverage.length} KSA Cities
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-[#0F2942] group-hover:text-[#C2410C] transition-colors mb-2">
          {category.title}
        </h3>

        <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4 font-normal">
          {category.shortSummary}
        </p>

        {/* Specs highlights */}
        {category.specs && category.specs.length > 0 && (
          <div className="bg-[#F9F8F5] rounded-xl p-3 border border-[#E2DED4] space-y-1.5 mb-4 text-[11px]">
            {category.specs.slice(0, 2).map((spec, i) => (
              <div key={i} className="flex justify-between items-center text-slate-700">
                <span className="text-slate-500 font-medium">{spec.name}:</span>
                <span className="font-bold text-[#0F2942] truncate max-w-[60%]">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Certifications highlights for manpower */}
        {category.certifications && category.certifications.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {category.certifications.slice(0, 3).map((cert, idx) => (
              <span key={idx} className="bg-[#F5F2EB] text-[#0F2942] text-[10px] px-2.5 py-1 rounded-lg border border-[#E2DED4] font-semibold">
                ✓ {cert}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-[#E2DED4] flex items-center justify-between">
        <span className="text-[11px] text-slate-500 font-medium flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Aramco / SABIC Ready
        </span>
        <Link
          href={`${basePath}/${category.slug}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0F2942] hover:bg-[#C2410C] text-white font-bold text-xs transition-colors shadow-sm"
        >
          View Specs &amp; Quote →
        </Link>
      </div>
    </div>
  );
}
