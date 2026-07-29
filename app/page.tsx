import Link from 'next/link';
import TrustBar from '@/components/TrustBar';
import ServicePillars from '@/components/ServicePillars';
import QuoteForm from '@/components/QuoteForm';

export default function HomePage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Short Corporate Hero Section */}
      <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Direct Industrial Fleet &amp; Manpower Owner • Al Khobar, KSA
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Industrial Equipment Rental, Fleet &amp; <span className="text-amber-700">Manpower Supply</span>
              </h1>

              <p className="text-slate-600 text-base leading-relaxed font-normal max-w-2xl">
                Arabian Gulf Fast Contracting Co. (GulfFast) supplies Aramco and SABIC-approved heavy machinery, transportation trucks, and certified technical workforce directly to project sites across Saudi Arabia since 1999.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/equipment-rental"
                  className="px-6 py-3 rounded-md bg-blue-900 hover:bg-slate-900 text-white font-bold text-sm shadow-sm transition-all"
                >
                  Explore Equipment Fleet →
                </Link>
                <Link
                  href="/request-a-quote"
                  className="px-6 py-3 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-sm transition-all"
                >
                  Request Instant Quote
                </Link>
              </div>

              {/* Badges bar */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Direct Fleet Owner</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Aramco Gate Passes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>24/7 Site Support</span>
                </div>
              </div>
            </div>

            {/* Right Hero Quote Request Card */}
            <div className="lg:col-span-5">
              <QuoteForm serviceType="general" />
            </div>

          </div>
        </div>
      </section>

      {/* Trust Bar (25+ Years, Direct Owner, Vendor Status) */}
      <TrustBar />

      {/* 3 Core Service Hub Cards (Links out to full category hubs) */}
      <ServicePillars />

      {/* Corporate Call to Action Section */}
      <section className="bg-slate-900 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-amber-600/20 text-amber-400 text-xs font-bold px-3 py-1 rounded border border-amber-500/30 uppercase tracking-wider">
            Al Khobar Head Office Sales Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Need Immediate Mobilization for Your Site?
          </h2>
          <p className="text-slate-300 font-normal text-sm max-w-2xl mx-auto leading-relaxed">
            Contact our project desk for competitive daily, monthly, or long-term lease quotations.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-a-quote"
              className="px-7 py-3 rounded-md bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm transition-all"
            >
              Submit Quote Request →
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm border border-slate-700 transition-all"
            >
              View Head Office Contact Info
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
