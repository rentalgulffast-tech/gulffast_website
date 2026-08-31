import Breadcrumbs from '@/components/Breadcrumbs';
import CandidateRegistrationForm from '@/components/CandidateRegistrationForm';
import { BRAND_LEGAL_NAME } from '@/lib/brand';
import { CONTACT } from '@/lib/contact';

export const metadata = {
  title: 'Register for Work — Trades, Operators & Site Staff | GulfFast KSA',
  description: `Register your availability to work with ${BRAND_LEGAL_NAME} (GulfFast) in Saudi Arabia. Add your trade, experience and certifications, upload your CV, and our deployment desk will contact you when suitable project work comes up.`,
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
            { name: 'Register for Work', url: '/careers' }
          ]}
        />

        <div className="my-6 border-b border-border pb-6">
          <span className="text-accent-strong font-bold text-xs uppercase tracking-wider bg-accent-strong/10 px-3 py-1 rounded-full border border-accent-strong/20">
            Candidate Registration — Availability
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mt-2">
            Register for Work with GulfFast
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            {BRAND_LEGAL_NAME} (GulfFast) supplies certified tradespeople, equipment operators and site
            professionals to oil and gas, petrochemical, power and construction projects across Saudi Arabia.
            This is not a list of vacancies — register your trade, certifications and availability, and our
            deployment desk will contact you when project work matching your trade comes up.
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
