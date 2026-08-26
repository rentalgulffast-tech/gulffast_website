import Breadcrumbs from '@/components/Breadcrumbs';
import { CONTACT, telHref, mailtoHref } from '@/lib/contact';
import { BRAND_LEGAL_NAME } from '@/lib/brand';

export const metadata = {
  title: 'Privacy Policy | GulfFast Rentals & Manpower KSA',
  description: `How ${BRAND_LEGAL_NAME} (GulfFast) collects, uses, and protects personal data submitted through quote requests and site inquiries in Saudi Arabia.`,
  alternates: {
    canonical: '/legal/privacy-policy'
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-10 bg-background text-foreground min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Privacy Policy', url: '/legal/privacy-policy' }
          ]}
        />

        <div className="my-6 border-b border-border pb-6">
          <span className="text-accent-strong font-bold text-xs uppercase tracking-wider bg-accent-strong/10 px-3 py-1 rounded-full border border-accent-strong/20">
            Legal &amp; Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mt-2">
            Privacy Policy
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            Last updated: 11 August 2026
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-8 shadow-sm space-y-8 text-sm text-slate-700 leading-relaxed">

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-primary">1. Introduction</h2>
            <p>
              {BRAND_LEGAL_NAME} (&quot;GulfFast&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), headquartered at Building No.6623, Prince Abdulmohsin Ibn Abdulaziz Street, Madinat Al Ummal District, Al Khobar, Saudi Arabia, respects your privacy and is committed to protecting personal data collected through this website in accordance with the Kingdom of Saudi Arabia&apos;s Personal Data Protection Law (PDPL) and its implementing regulations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-primary">2. Information We Collect</h2>
            <p>
              When you submit a quote request, contact form, or otherwise interact with this website, we may collect: your full name, company or contractor name, work email address, mobile/WhatsApp number, project city or site location, requested equipment category or job title, and any project details you choose to provide.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-primary">3. How We Use Your Information</h2>
            <p>
              We use the information you submit to: respond to quote requests and inquiries, prepare commercial proposals for equipment rental or manpower supply, coordinate mobilization logistics and gate pass processing where applicable, and maintain records required for commercial and regulatory purposes. We do not sell your personal data to third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-primary">4. Data Sharing</h2>
            <p>
              We may share your information with our own operational and sales personnel, and, where required to fulfil your request, with site operators or client representatives for gate pass and mobilization coordination. We do not share your data with third-party marketing brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-primary">5. Data Retention</h2>
            <p>
              We retain quote request and contact records for as long as reasonably necessary to fulfil the purposes described in this policy and to comply with our legal, accounting, and commercial record-keeping obligations under Saudi Arabian law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-primary">6. Your Rights</h2>
            <p>
              Under the PDPL, you may request access to, correction of, or deletion of your personal data held by us. To exercise these rights, contact us using the details below.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-extrabold text-primary">7. Contact Us</h2>
            <p>
              For questions about this Privacy Policy or to exercise your data protection rights, contact us at{' '}
              <a href={mailtoHref()} className="text-accent-strong font-semibold hover:underline">{CONTACT.email}</a>{' '}
              or{' '}
              <a href={telHref(CONTACT.phonePrimary)} className="text-accent-strong font-semibold hover:underline">{CONTACT.phonePrimary}</a>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
