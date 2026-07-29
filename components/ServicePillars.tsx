import Link from 'next/link';

export default function ServicePillars() {
  return (
    <section className="py-12 bg-[#F0EBE3] text-[#2B2620]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#C0714A] font-bold text-xs uppercase tracking-widest bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Our 3 Core Industrial Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
            Direct Equipment, Transport &amp; Manpower Solutions
          </h2>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed font-normal">
            Direct supplier operations engineered for oil refineries, chemical plants, mega-infrastructure, and heavy civil construction in Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: Equipment Rental */}
          <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 card-hover-lift flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] flex items-center justify-center text-[#C0714A] mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F172A] mb-3 group-hover:text-[#C0714A] transition-colors">
                Equipment Rental
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                Third-Party Inspected heavy machinery including excavators, dozers, generators (20-1500 kVA), mobile cranes up to 500T, air compressors, and welding racks.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-6 border-t border-[#E2DED4] pt-4 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C0714A]"></span>
                  Saudi Aramco &amp; SABIC Site Sticker Ready
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C0714A]"></span>
                  Daily, Monthly &amp; Long-Term Project Leases
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C0714A]"></span>
                  24/7 Field Maintenance Technicians
                </li>
              </ul>
            </div>
            <Link
              href="/equipment-rental"
              className="inline-flex items-center gap-1.5 text-[#C0714A] font-bold text-xs uppercase tracking-wider hover:underline"
            >
              Explore Equipment Hub →
            </Link>
          </div>

          {/* Pillar 2: Vehicle Rental */}
          <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 card-hover-lift flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] flex items-center justify-center text-[#C0714A] mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F172A] mb-3 group-hover:text-[#C0714A] transition-colors">
                Vehicle Rental
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                Heavy transport tractor trucks (6x4), 40ft/50ft flatbeds, 100T lowbeds, diesel/water tankers, 50-seat crew AC buses, and 4x4 double cabin pickups.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-6 border-t border-[#E2DED4] pt-4 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C0714A]"></span>
                  IVMS GPS Telemetry &amp; Speed Governors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C0714A]"></span>
                  SAG Licensed Professional Drivers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C0714A]"></span>
                  Over-Dimensional Load Highway Permits
                </li>
              </ul>
            </div>
            <Link
              href="/vehicle-rental"
              className="inline-flex items-center gap-1.5 text-[#C0714A] font-bold text-xs uppercase tracking-wider hover:underline"
            >
              Explore Vehicle Hub →
            </Link>
          </div>

          {/* Pillar 3: Manpower Supply */}
          <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 card-hover-lift flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] flex items-center justify-center text-[#C0714A] mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F172A] mb-3 group-hover:text-[#C0714A] transition-colors">
                Manpower Supply
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                Direct deployment of certified 6G welders, pipefitters, TUV riggers (Levels 1-3), equipment operators, scaffolders (GI 8.001), and NEBOSH safety officers.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-6 border-t border-[#E2DED4] pt-4 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C0714A]"></span>
                  Valid Iqamas &amp; Gate Pass Eligibility
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C0714A]"></span>
                  TUV / WQT Certified Coupon Tested
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C0714A]"></span>
                  Turnkey Camp &amp; Mobilization Support
                </li>
              </ul>
            </div>
            <Link
              href="/manpower-supply"
              className="inline-flex items-center gap-1.5 text-[#C0714A] font-bold text-xs uppercase tracking-wider hover:underline"
            >
              Explore Manpower Hub →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
