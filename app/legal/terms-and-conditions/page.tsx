import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata = {
  title: 'Terms and Conditions | GulfFast Rentals & Manpower KSA',
  description: 'Terms and conditions governing equipment rental and manpower supply services provided by Arabian Gulf Fast Contracting Co. (GulfFast) in Saudi Arabia.',
  alternates: {
    canonical: '/legal/terms-and-conditions'
  }
};

export default function TermsAndConditionsPage() {
  return (
    <div className="py-10 bg-[#F0EBE3] text-[#2B2620] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Terms and Conditions', url: '/legal/terms-and-conditions' }
          ]}
        />

        <div className="my-6 border-b border-[#E2DED4] pb-6">
          <span className="text-[#C0714A] font-bold text-xs uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FFEDD5]">
            Legal &amp; Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-2">
            Terms and Conditions
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            Last updated: 11 August 2026
          </p>
        </div>

        <div className="bg-white border border-[#E2DED4] rounded-2xl p-8 shadow-sm space-y-8 text-sm text-slate-700 leading-relaxed">

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0F172A]">1. Acceptance of Terms</h2>
            <p>
              These Terms and Conditions govern your use of this website and any equipment rental or manpower supply services requested from Arabian Gulf Fast Contracting Co. (&quot;GulfFast&quot;, &quot;we&quot;, &quot;us&quot;). By submitting a quote request or engaging our services, you agree to be bound by these terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0F172A]">2. Nature of Services</h2>
            <p>
              GulfFast is a direct rental and supply company. We primarily deploy our own owned equipment fleet and directly recruited manpower. Where demand exceeds our own fleet or workforce capacity for a given project, we may source additional equipment or personnel through our own supplier and recruitment network to fulfil the request. GulfFast is not a staffing agency or equipment brokerage; we remain the contracting party for all services quoted through this website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0F172A]">3. Quotations and Pricing</h2>
            <p>
              Quotations provided in response to requests submitted through this website are indicative and subject to confirmation following site assessment, equipment availability, and project scope review. Final pricing, rental duration, and mobilization terms are set out in the signed rental or supply agreement between GulfFast and the client.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0F172A]">4. Client Obligations</h2>
            <p>
              Clients are responsible for providing accurate project details, site access arrangements, and any client-specific gate pass or safety induction requirements necessary for equipment and personnel mobilization. GulfFast will support gate pass and Third-Party Inspection (TPI) documentation but final site access approval rests with the site operator.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0F172A]">5. Equipment Use and Liability</h2>
            <p>
              Rented equipment must be operated in accordance with manufacturer specifications and applicable Saudi Arabian safety regulations, including relevant Saudi Aramco General Instructions where the site requires. Liability for damage arising from misuse, negligence, or operation outside agreed terms rests with the party responsible for that operation, as set out in the applicable rental agreement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0F172A]">6. Cancellation</h2>
            <p>
              Cancellation or rescheduling of confirmed equipment or manpower mobilization is subject to the notice periods and any applicable charges set out in the signed rental or supply agreement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0F172A]">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes arising from services provided by GulfFast shall be subject to the jurisdiction of the competent courts of Saudi Arabia.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-[#0F172A]">8. Contact Us</h2>
            <p>
              For questions about these Terms and Conditions, contact us at{' '}
              <a href="mailto:sales@gulffast.co" className="text-[#C0714A] font-semibold hover:underline">sales@gulffast.co</a>{' '}
              or{' '}
              <a href="tel:+966568676710" className="text-[#C0714A] font-semibold hover:underline">+966 56 867 6710</a>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
