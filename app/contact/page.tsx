import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';

export const metadata = {
  title: 'Contact GulfFast Head Office | Al Khobar, Saudi Arabia',
  description: 'Contact Arabian Gulf Fast Contracting Co. (GulfFast) head office in Al Khobar, KSA. Direct hotline: +966 56 867 6710, email: sales@gulffast.co.',
  alternates: {
    canonical: '/contact'
  }
};

export default function ContactPage() {
  return (
    <div className="py-10 bg-[#F0EBE3] text-[#2B2620] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Contact Us', url: '/contact' }
          ]}
        />

        <div className="my-6 border-b border-[#E2DED4] pb-6">
          <span className="text-[#C0714A] font-bold text-xs uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Head Office Contact &amp; Dispatch Desk
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
            Contact GulfFast Operations HQ
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            Get in direct contact with our Al Khobar equipment rental and manpower mobilization engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-8">
          
          {/* Left Column: Contact NAP Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 shadow-sm space-y-4">
              <h2 className="text-xl font-extrabold text-[#0F172A] border-l-4 border-[#C0714A] pl-3">
                Al Khobar Headquarters
              </h2>
              
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-base shrink-0">📍</span>
                  <div>
                    <strong className="text-[#0F172A] block">Physical Address:</strong>
                    <span>Building No. 6623, Prince Abdulmohsin Ibn Abdulaziz Street</span>
                    <span className="block text-slate-500">Madinat Al Ummal District, Al Khobar 34442</span>
                    <span className="block text-slate-500">Kingdom of Saudi Arabia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#E2DED4]">
                  <span className="text-base shrink-0">📞</span>
                  <div>
                    <strong className="text-[#0F172A] block">Direct Sales Hotlines:</strong>
                    <a href="tel:+966568676710" className="text-[#C0714A] font-bold block hover:underline">+966 56 867 6710</a>
                    <a href="tel:+966538321732" className="text-[#C0714A] font-bold block hover:underline">+966 53 832 1732</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#E2DED4]">
                  <span className="text-base shrink-0">✉️</span>
                  <div>
                    <strong className="text-[#0F172A] block">Official Email:</strong>
                    <a href="mailto:sales@gulffast.co" className="text-[#0F172A] font-semibold hover:underline">sales@gulffast.co</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#E2DED4]">
                  <span className="text-base shrink-0">⏰</span>
                  <div>
                    <strong className="text-[#0F172A] block">Working Hours:</strong>
                    <span>Sunday – Thursday: 07:30 AM – 05:30 PM (AST)</span>
                    <span className="block text-[#C0714A] font-semibold mt-0.5">24/7 Emergency Site Dispatch Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder Card */}
            <div className="bg-white border border-[#E2DED4] rounded-2xl p-6 shadow-sm text-center space-y-3">
              <h3 className="text-base font-bold text-[#0F172A]">Al Khobar Operations Yard Location</h3>
              <div className="bg-[#F9F8F5] border border-[#E2DED4] rounded-xl p-8 text-xs text-slate-500 font-mono">
                📍 Al Khobar Yard (34442, Eastern Province)
                <p className="text-[11px] text-slate-400 mt-1">Latitude: 26.2833 • Longitude: 50.2000</p>
              </div>
            </div>

          </div>

          {/* Right Column: Quote & Contact Form */}
          <div className="lg:col-span-7">
            <QuoteForm serviceType="general" />
          </div>

        </div>

      </div>
    </div>
  );
}
