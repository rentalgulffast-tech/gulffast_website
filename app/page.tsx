import Link from 'next/link';
import DynamicCatalog from '@/components/DynamicCatalog';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import TrustBar from '@/components/TrustBar';
import QuoteForm from '@/components/QuoteForm';
import { getEquipmentCategories } from '@/lib/equipment';
import { getManpowerCategories } from '@/lib/manpower';

export default function HomePage() {
  const equipmentCategories = getEquipmentCategories();
  const manpowerCategories = getManpowerCategories();

  return (
    <div className="bg-[#F0EBE3] text-[#2B2620] min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-[#FAF6EF] border-b border-[#E2DED4] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7ED] border border-[#FFEDD5] text-[#C0714A] text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Direct Heavy Equipment &amp; Technical Workforce Owner • Est. 1999
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
                Saudi Arabia Industrial <span className="text-[#C0714A]">Fleet &amp; Manpower</span> Catalog
              </h1>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Arabian Gulf Fast Contracting Co. (GulfFast) provides Aramco &amp; SABIC compliant heavy machinery rentals, transport fleets, and certified trade crews directly from our Al Khobar operations hub.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/request-a-quote"
                  className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold text-sm shadow-sm transition-all"
                >
                  Request Fast Quote →
                </Link>
                <a
                  href="tel:+966568676710"
                  className="px-6 py-3 rounded-xl bg-[#F0EBE3] hover:bg-[#E2DED4] text-[#0F172A] font-bold text-sm border border-[#E2DED4] transition-all flex items-center gap-2"
                >
                  <span>📞</span> +966 56 867 6710
                </a>
              </div>

              <div className="pt-4 border-t border-[#E2DED4] grid grid-cols-3 gap-3 text-xs text-slate-600 font-semibold">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>100% Direct Owner</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Aramco Gate Passes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>24/7 Site Support</span>
                </div>
              </div>
            </div>

            {/* Right Hero Quote Form */}
            <div className="lg:col-span-5">
              <QuoteForm serviceType="general" />
            </div>

          </div>
        </div>
      </section>

      {/* Main Interactive Catalog Dashboard Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <DynamicCatalog
          equipmentCategories={equipmentCategories}
          manpowerCategories={manpowerCategories}
        />

        {/* Stylized KSA Interactive Service Map */}
        <div className="my-8">
          <ServiceAreaMap />
        </div>

        {/* Corporate Trust & Credentials Bar */}
        <div className="my-8">
          <TrustBar />
        </div>
      </div>

      {/* Corporate Call to Action Section */}
      <section className="bg-[#FAF6EF] text-[#2B2620] py-14 border-t border-[#E2DED4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-[#FFF7ED] text-[#C0714A] text-xs font-bold px-3 py-1 rounded-full border border-[#FFEDD5] uppercase tracking-wider">
            Al Khobar Head Office Operations Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            Need Immediate Mobilization for Your Site?
          </h2>
          <p className="text-slate-600 font-normal text-sm max-w-2xl mx-auto leading-relaxed">
            Speak directly with our technical sales engineers in Al Khobar for daily, monthly, or annual lease contracts.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-a-quote"
              className="px-7 py-3 rounded-xl bg-[#C0714A] hover:bg-amber-700 text-white font-bold text-sm transition-all shadow-md"
            >
              Submit Quote Request →
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 rounded-xl bg-white hover:bg-[#F0EBE3] text-[#0F172A] font-bold text-sm border border-[#E2DED4] transition-all shadow-xs"
            >
              View Head Office Contact Info
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
