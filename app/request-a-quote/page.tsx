import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: 'Request a Quote | Heavy Equipment, Fleet & Manpower | GulfFast KSA',
  description: 'Submit a quote request for heavy equipment rental, vehicle transport fleets, and certified manpower supply in Saudi Arabia. Fast response within 2 hours.',
  alternates: {
    canonical: '/request-a-quote'
  }
};

export default function RequestQuotePage() {
  return (
    <div className="py-10 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Request a Quote', url: '/request-a-quote' }
          ]}
        />

        <div className="my-6 text-center max-w-2xl mx-auto">
          <span className="text-amber-700 font-bold text-xs uppercase tracking-wider bg-amber-50 px-3 py-1 rounded border border-amber-200">
            KSA Direct Supplier Quote Request
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Request Equipment or Manpower Quote
          </h1>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Direct pricing without middleman markup. Fill out your project requirements below for an official quotation from our Al Khobar operations desk.
          </p>
        </div>

        <div className="my-8">
          <QuoteForm serviceType="general" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 text-xs text-slate-600">
          <div className="bg-white border border-slate-200 p-4 rounded-lg text-center space-y-1 shadow-sm">
            <span className="text-blue-900 font-bold text-sm block">⚡ 2-Hour Response</span>
            <p>Our sales engineers review requests during working hours (07:30 - 17:30 AST).</p>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-lg text-center space-y-1 shadow-sm">
            <span className="text-blue-900 font-bold text-sm block">📋 Gate Pass Ready</span>
            <p>All quote options include gate pass processing support for Aramco/SABIC sites.</p>
          </div>
          <div className="bg-white border border-slate-200 p-4 rounded-lg text-center space-y-1 shadow-sm">
            <span className="text-blue-900 font-bold text-sm block">📞 Hotline Support</span>
            <p>Emergency dispatches: +966 56 867 6710 / +966 53 832 1732.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
