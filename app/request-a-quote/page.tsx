import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: 'Request a Quote | Heavy Equipment & Manpower | GulfFast KSA',
  description: 'Submit a quote request for heavy equipment rental and certified manpower supply in Saudi Arabia. Fast response within 2 hours.',
  alternates: {
    canonical: '/request-a-quote'
  }
};

interface PageProps {
  searchParams: Promise<{ need?: string }>;
}

export default async function RequestQuotePage({ searchParams }: PageProps) {
  const { need } = await searchParams;
  const initialNeed = need === 'equipment' || need === 'manpower' || need === 'both' ? need : undefined;

  return (
    <div className="py-10 bg-[#F0EBE3] text-[#2B2620] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Request a Quote', url: '/request-a-quote' }
          ]}
        />

        <div className="my-6 text-center max-w-2xl mx-auto">
          <span className="text-[#C0714A] font-bold text-xs uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            KSA Direct Supplier Quote Request
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
            Request Equipment or Manpower Quote
          </h1>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Direct pricing without middleman markup. Fill out your project requirements below for an official quotation from our Al Khobar operations desk.
          </p>
        </div>

        <div className="my-8">
          <QuoteForm serviceType="general" initialNeed={initialNeed} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 text-xs text-slate-600">
          <div className="bg-white border border-[#E2DED4] p-4 rounded-2xl text-center space-y-1 shadow-sm">
            <span className="text-[#0F172A] font-bold text-sm block">⚡ 2-Hour Response</span>
            <p>Our sales engineers review requests during working hours (07:30 - 17:30 AST).</p>
          </div>
          <div className="bg-white border border-[#E2DED4] p-4 rounded-2xl text-center space-y-1 shadow-sm">
            <span className="text-[#0F172A] font-bold text-sm block">📋 Gate Pass Ready</span>
            <p>All quote options include gate pass processing support for Aramco/SABIC sites.</p>
          </div>
          <div className="bg-white border border-[#E2DED4] p-4 rounded-2xl text-center space-y-1 shadow-sm">
            <span className="text-[#0F172A] font-bold text-sm block">📞 Hotline Support</span>
            <p>Emergency dispatches: +966 56 867 6710 / +966 53 832 1732.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
