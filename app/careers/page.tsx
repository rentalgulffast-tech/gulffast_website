import Breadcrumbs from '@/components/Breadcrumbs';
import CandidateRegistrationForm from '@/components/CandidateRegistrationForm';
import { BRAND_LEGAL_NAME } from '@/lib/brand';
import { CONTACT } from '@/lib/contact';

export const metadata = {
  title: 'Careers — Register to Work With GulfFast | KSA',
  description: `Apply to work directly with ${BRAND_LEGAL_NAME} (GulfFast) in Saudi Arabia. Register your trade, experience, and certifications, upload your CV, and our recruitment desk will contact you about work opportunities.`,
  alternates: {
    canonical: '/careers'
  }
};

export default function CareersPage() {
  return (
    <div className="py-10 bg-background text-foreground min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Careers', url: '/careers' }
          ]}
        />

        <div className="my-6 border-b border-border pb-6">
          <span className="text-accent-strong font-bold text-xs uppercase tracking-wider bg-accent-strong/10 px-3 py-1 rounded-full border border-accent-strong/20">
            Candidate Registration
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mt-2">
            Register to Work With GulfFast
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            {BRAND_LEGAL_NAME} (GulfFast) hires certified tradespeople, equipment operators, and site professionals
            for Aramco, SABIC, SEC, and EPC projects across Saudi Arabia. Register your details below and our
            recruitment desk will contact you when a suitable opening comes up.
          </p>
        </div>

        <CandidateRegistrationForm />

        <p className="text-[11px] text-slate-500 mt-4 text-center">
          {`Questions about working with us? Call ${CONTACT.phonePrimary} or ${CONTACT.phoneSecondary}.`}
        </p>

      </div>
    </div>
  );
}
