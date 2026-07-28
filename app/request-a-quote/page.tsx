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
    <div className="py-10 bg-slate-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Request a Quote', url: '/request-a-quote' }
          ]}
        />

        <div className="my-8 text-center max-w-2xl mx-auto">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
            KSA Direct Supplier Quote Request
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3">
            Request Equipment or Manpower Quote
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Direct pricing without middleman markup. Fill out your project requirements below for an official quotation from our Al Khobar operations desk.
          </p>
        </div>

        <div className="my-10">
          <QuoteForm serviceType="general" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 text-xs text-slate-400">
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center space-y-1">
            <span className="text-amber-400 font-bold text-sm block">⚡ 2-Hour Response</span>
            <p>Our sales engineers review requests during working hours (07:30 - 17:30 AST).</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center space-y-1">
            <span className="text-amber-400 font-bold text-sm block">📋 Gate Pass Ready</span>
            <p>All quote options include gate pass processing support for Aramco/SABIC sites.</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center space-y-1">
            <span className="text-amber-400 font-bold text-sm block">📞 Hotline Support</span>
            <p>Emergency inquiries: +966 56 867 6710 / +966 53 832 1732.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
