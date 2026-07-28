import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import ServicePillars from '@/components/ServicePillars';
import CategoryCard from '@/components/CategoryCard';
import QuoteForm from '@/components/QuoteForm';
import { getEquipmentCategories, getVehicleCategories, getJobTitles } from '@/lib/data';

export default function HomePage() {
  const featuredEquipment = getEquipmentCategories().slice(0, 3);
  const featuredVehicles = getVehicleCategories().slice(0, 3);
  const featuredManpower = getJobTitles().slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white overflow-hidden pt-12 pb-20 border-b border-slate-800">
        {/* Dark Industrial Grid Pattern Background */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                Direct Industrial Supplier • Al Khobar, Saudi Arabia
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                Equipment Rental, Fleet &amp; <span className="text-amber-500">Manpower Supply</span> in KSA
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                GulfFast supplies certified heavy construction machinery, transport vehicle fleets, and Aramco/TUV qualified manpower directly to oil &amp; gas refineries, power plants, and infrastructure projects across Saudi Arabia.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/request-a-quote"
                  className="px-7 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5"
                >
                  Request Equipment / Manpower Quote →
                </Link>
                <a
                  href="tel:+966568676710"
                  className="px-7 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-100 font-bold text-sm transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.17 2.2z"/>
                  </svg>
                  Call +966 56 867 6710
                </a>
              </div>

              {/* Badges bar */}
              <div className="pt-6 border-t border-slate-900 grid grid-cols-3 gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-amber-500 text-base">✓</span>
                  <span>100% Direct Fleet Owner</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-500 text-base">✓</span>
                  <span>Aramco &amp; SABIC Gate Passes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-500 text-base">✓</span>
                  <span>24/7 Site Support KSA</span>
                </div>
              </div>
            </div>

            {/* Right Hero Interactive Quote Widget */}
            <div className="lg:col-span-5">
              <QuoteForm serviceType="general" />
            </div>

          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* 3 Core Pillars */}
      <ServicePillars />

      {/* Featured Equipment Categories */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">
                Heavy Machinery &amp; Power
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                Featured Equipment Rental Categories
              </h2>
            </div>
            <Link
              href="/equipment-rental"
              className="text-amber-400 font-bold text-sm hover:underline flex items-center gap-1"
            >
              View All Equipment Categories ({getEquipmentCategories().length}) →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredEquipment.map((cat) => (
              <CategoryCard key={cat.id} category={cat} basePath="/equipment-rental" />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-16 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">
                Transport &amp; Heavy Logistics
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                Heavy Vehicle Rental Categories
              </h2>
            </div>
            <Link
              href="/vehicle-rental"
              className="text-amber-400 font-bold text-sm hover:underline flex items-center gap-1"
            >
              View All Vehicle Fleets ({getVehicleCategories().length}) →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVehicles.map((cat) => (
              <CategoryCard key={cat.id} category={cat} basePath="/vehicle-rental" />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Manpower Trades */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">
                Certified Workforce Deployment
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-1">
                Skilled Manpower Supply Trades
              </h2>
            </div>
            <Link
              href="/manpower-supply"
              className="text-amber-400 font-bold text-sm hover:underline flex items-center gap-1"
            >
              View All Certified Trades ({getJobTitles().length}) →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredManpower.map((trade) => (
              <CategoryCard key={trade.id} category={trade} basePath="/manpower-supply" />
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors Served */}
      <section className="py-16 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">
              Industrial Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Key Sectors Served Across Saudi Arabia
            </h2>
            <p className="text-slate-400 text-sm mt-3">
              GulfFast Rental &amp; Manpower solutions are tailored to the strict safety and technical requirements of KSA's primary economic drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
              <div className="text-amber-500 text-3xl font-black mb-3">01</div>
              <h3 className="text-xl font-bold text-white mb-2">Oil, Gas &amp; Petrochemicals</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Aramco-approved equipment and 6G certified welders for refinery turnarounds, cross-country gas pipelines, and offshore rig maintenance.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
              <div className="text-amber-500 text-3xl font-black mb-3">02</div>
              <h3 className="text-xl font-bold text-white mb-2">Commercial Construction</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Heavy earthmoving machinery, mobile tower lights, and scaffolding crews for high-rise towers and commercial complexes in Riyadh &amp; Jeddah.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
              <div className="text-amber-500 text-3xl font-black mb-3">03</div>
              <h3 className="text-xl font-bold text-white mb-2">Mega Infrastructure</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Longbed trailers, high-capacity generators, and heavy excavators servicing NEOM, Red Sea, and highway network developments.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
              <div className="text-amber-500 text-3xl font-black mb-3">04</div>
              <h3 className="text-xl font-bold text-white mb-2">EPC &amp; Heavy Industrial</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Multi-ton mobile crane fleets, TUV riggers, and mechanical fitters for power station erection and steel plant fabrication yards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="bg-slate-800 text-amber-400 text-xs font-bold px-3 py-1 rounded border border-slate-700">
              TODO: Verified Client Reviews
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-3">
              Trusted by Contractor Teams Across KSA
            </h2>
            <p className="text-slate-400 text-xs mt-2">
              (Client references and project testimonials are undergoing client clearance approval)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-slate-300 space-y-4">
              <div className="flex text-amber-500 gap-1 text-sm">★★★★★</div>
              <p className="text-xs italic leading-relaxed">
                &ldquo;GulfFast mobilized 12 unit 500 kVA generators and diesel tankers to our Jubail plant turnaround within 24 hours. Zero downtime during the 45-day shutdown.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                <strong>[TODO: Major Industrial Contractor - Jubail]</strong>
                <p>Petrochemical Plant Shutdown Project</p>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-slate-300 space-y-4">
              <div className="flex text-amber-500 gap-1 text-sm">★★★★★</div>
              <p className="text-xs italic leading-relaxed">
                &ldquo;The 6G welders and TUV riggers provided by GulfFast arrived with valid Aramco IDs and passed coupon RT testing on first attempt. Highly recommended manpower partner.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                <strong>[TODO: Pipeline EPC Contractor - Eastern Province]</strong>
                <p>Gas Pipeline Extension Project</p>
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 text-slate-300 space-y-4">
              <div className="flex text-amber-500 gap-1 text-sm">★★★★★</div>
              <p className="text-xs italic leading-relaxed">
                &ldquo;Renting lowbeds and heavy excavators from a direct equipment owner like GulfFast saved us significant time compared to dealing with middleman brokers.&rdquo;
              </p>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                <strong>[TODO: Civil Infrastructure Contractor - Riyadh]</strong>
                <p>Bulk Earthmoving &amp; Site Preparation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black">
            Ready to Mobilize Equipment or Manpower for Your Project?
          </h2>
          <p className="text-slate-900 font-semibold text-sm max-w-2xl mx-auto">
            Contact our direct sales desk in Al Khobar today for competitive monthly or long-term project rates.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-a-quote"
              className="px-8 py-3.5 rounded-lg bg-slate-950 hover:bg-slate-900 text-white font-extrabold text-sm shadow-xl transition-all"
            >
              Get Instant Quote →
            </Link>
            <a
              href="tel:+966568676710"
              className="px-8 py-3.5 rounded-lg bg-white/20 hover:bg-white/30 text-slate-950 font-extrabold text-sm transition-all border border-slate-950/20"
            >
              Call +966 56 867 6710
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
