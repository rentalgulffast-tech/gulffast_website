import { getSiteStats } from '@/lib/site-stats';

export default function StatsBar() {
  const stats = getSiteStats();

  const items = [
    { value: String(stats.foundingYear), label: 'Established in KSA', sub: `${stats.yearsInBusiness}+ Years in Al Khobar` },
    { value: String(stats.equipmentCategoryCount), label: 'Equipment Categories', sub: 'Direct-supply fleet & partner network' },
    { value: String(stats.jobTitleCount), label: 'Manpower Job Titles', sub: `Across ${stats.manpowerCategoryCount} trade categories` },
    { value: String(stats.cityCount), label: 'Cities Covered', sub: 'Direct dispatch coverage' }
  ];

  return (
    <section className="bg-white border border-[#D7E6F5] rounded-2xl p-6 sm:p-8 shadow-sm text-[#12233B]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#D7E6F5]">
        {items.map((item) => (
          <div key={item.label} className="pt-4 md:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-[#12233B] font-mono">{item.value}</div>
            <p className="text-xs uppercase tracking-wider font-bold text-[#2B6CB0] mt-1">{item.label}</p>
            <p className="text-[11px] text-slate-600 mt-0.5 font-medium">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
