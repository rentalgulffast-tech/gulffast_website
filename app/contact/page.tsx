import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import { SITE_CONFIG } from '@/lib/seo';

export const metadata = {
  title: 'Contact Us & Head Office Location | GulfFast Al Khobar',
  description: 'Contact GulfFast Rentals & Manpower in Al Khobar, KSA. Call +966 56 867 6710 or email sales@gulffast.co for direct equipment and manpower inquiries.',
  alternates: {
    canonical: '/contact'
  }
};

export default function ContactPage() {
  return (
    <div className="py-10 bg-slate-950 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Contact Us', url: '/contact' }
          ]}
        />

        <div className="my-8 border-b border-slate-800 pb-8">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20">
            Headquarters &amp; Direct Sales Desk
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-3">
            Contact GulfFast Rentals &amp; Manpower
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mt-3 leading-relaxed">
            Get in touch with our operations team in Al Khobar for direct equipment quotes, vehicle fleet leasing, and Aramco-certified manpower supply.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-10">
          
          {/* Contact Details & Office NAP */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h2 className="text-xl font-bold text-white border-l-4 border-amber-500 pl-3">
                Al Khobar Head Office (NAP)
              </h2>

              <div className="space-y-4 text-xs text-slate-300">
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold shrink-0">📍</div>
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Physical Address:</strong>
                    <span>{SITE_CONFIG.address.street}</span>
                    <br />
                    <span>{SITE_CONFIG.address.city}, {SITE_CONFIG.address.region} – {SITE_CONFIG.address.postalCode}, Kingdom of Saudi Arabia</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold shrink-0">📞</div>
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Direct Sales Hotlines:</strong>
                    <a href="tel:+966568676710" className="hover:text-amber-400 font-bold block text-sm text-amber-300">+966 56 867 6710</a>
                    <a href="tel:+966538321732" className="hover:text-amber-400 font-bold block text-sm text-amber-300">+966 53 832 1732</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold shrink-0">✉️</div>
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Official Email:</strong>
                    <a href="mailto:sales@gulffast.co" className="hover:text-amber-400 font-bold text-sm text-amber-300">sales@gulffast.co</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold shrink-0">🌐</div>
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Parent Trading Site:</strong>
                    <a href={SITE_CONFIG.parentDomain} target="_blank" rel="noopener noreferrer" className="hover:underline text-amber-400">
                      www.gulffast.co (Founded 1999)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold shrink-0">🕒</div>
                  <div>
                    <strong className="text-white block text-sm mb-0.5">Working Hours:</strong>
                    <span>Sunday – Thursday: 07:30 AM – 05:30 PM</span>
                    <br />
                    <span className="text-slate-400 italic">24/7 Site Emergency Dispatch Line Active</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-3">
              <h3 className="text-base font-bold text-white border-l-4 border-amber-500 pl-3">
                Operations Yard Location Map
              </h3>
              <div className="w-full h-48 bg-slate-950 rounded-lg border border-slate-800 flex flex-col items-center justify-center text-center p-4">
                <span className="text-amber-500 text-2xl font-bold mb-1">🗺️ Al Khobar Hub</span>
                <p className="text-xs text-slate-300 font-semibold">Madinat Al Ummal District, Al Khobar, KSA</p>
                <p className="text-[11px] text-slate-400 mt-1">Geo Coordinates: 26.2842° N, 50.2083° E</p>
              </div>
            </div>

          </div>

          {/* Contact Quote Form */}
          <div className="lg:col-span-7">
            <QuoteForm serviceType="general" />
          </div>

        </div>

      </div>
    </div>
  );
}
