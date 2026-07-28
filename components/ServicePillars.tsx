import Link from 'next/link';

export default function ServicePillars() {
  return (
    <section className="py-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
            Our 3 Core Industrial Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Direct Equipment, Transport &amp; Manpower Solutions
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Direct supplier operations engineered for oil refineries, chemical plants, mega-infrastructure, and heavy civil construction in Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Equipment Rental */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 group flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                Equipment Rental
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Third-Party Inspected heavy machinery including excavators, dozers, generators (20-1500 kVA), mobile cranes up to 500T, air compressors, and welding racks.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6 border-t border-slate-800 pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Saudi Aramco &amp; SABIC Site Sticker Ready
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Daily, Monthly &amp; Long-Term Project Leases
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  24/7 Field Maintenance Technicians
                </li>
              </ul>
            </div>
            <Link
              href="/equipment-rental"
              className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider hover:text-amber-300"
            >
              Explore Equipment Fleet →
            </Link>
          </div>

          {/* Pillar 2: Vehicle Rental */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 group flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                Vehicle Rental
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Heavy transport tractor trucks (6x4), 40ft/50ft flatbeds, 100T lowbeds, diesel/water tankers, 50-seat crew AC buses, and 4x4 double cabin pickups.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6 border-t border-slate-800 pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  IVMS GPS Telemetry &amp; Speed Governors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  SAG Licensed Professional Drivers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Over-Dimensional Load Highway Permits
                </li>
              </ul>
            </div>
            <Link
              href="/vehicle-rental"
              className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider hover:text-amber-300"
            >
              Explore Vehicle Fleet →
            </Link>
          </div>

          {/* Pillar 3: Manpower Supply */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 group flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                Manpower Supply
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Direct deployment of certified 6G welders, pipefitters, TUV riggers (Levels 1-3), equipment operators, scaffolders (GI 8.001), and NEBOSH safety officers.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6 border-t border-slate-800 pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Valid Iqamas &amp; Gate Pass Eligibility
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  TUV / WQT Certified Coupon Tested
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Turnkey Camp &amp; Mobilization Support
                </li>
              </ul>
            </div>
            <Link
              href="/manpower-supply"
              className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider hover:text-amber-300"
            >
              Explore Skilled Trades →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
