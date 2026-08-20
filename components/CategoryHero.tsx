import Link from 'next/link';

interface CategoryHeroProps {
  badgeText: string;
  h1: string;
  intro: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export default function CategoryHero({
  badgeText,
  h1,
  intro,
  ctaHref = '/request-a-quote',
  ctaLabel = 'Request a Quote',
}: CategoryHeroProps) {
  return (
    <div className="my-6 border-b border-[#D7E6F5] pb-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF4FC] border border-[#D7E6F5] text-[#2B6CB0] text-xs font-bold uppercase tracking-wider mb-3">
        <span>{badgeText}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12233B] tracking-tight leading-tight">
        {h1}
      </h1>

      <p className="text-slate-600 text-sm max-w-3xl mt-3 leading-relaxed">
        {intro}
      </p>

      <Link
        href={ctaHref}
        className="inline-flex items-center gap-1.5 mt-4 px-6 py-2.5 rounded-xl bg-[#2B6CB0] hover:bg-[#1D6FB8] text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
      >
        {`${ctaLabel} →`}
      </Link>
    </div>
  );
}
