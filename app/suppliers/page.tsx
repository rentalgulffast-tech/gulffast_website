import Breadcrumbs from '@/components/Breadcrumbs';
import SupplierIntakeForm from '@/components/SupplierIntakeForm';
import { CONTACT, telHref, mailtoHref } from '@/lib/contact';

export const metadata = {
  title: 'Register Equipment as a Supplier | GulfFast KSA',
  description:
    'Equipment owners and rental suppliers in Saudi Arabia can privately register machinery with GulfFast. Submissions go straight to our fleet sourcing desk by email — nothing is published or listed publicly.',
  alternates: {
    canonical: '/suppliers'
  }
};

export default function SuppliersPage() {
  return (
    <div className="py-10 bg-background text-foreground min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Suppliers', url: '/suppliers' }
          ]}
        />

        <div className="my-6 border-b border-border pb-6">
          <span className="text-accent-strong font-bold text-xs uppercase tracking-wider bg-accent-strong/10 px-3 py-1 rounded-full border border-accent-strong/20">
            Supplier &amp; Equipment Owner Registration
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mt-2">
            Register Your Equipment With GulfFast
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            Equipment owners and rental suppliers across Saudi Arabia can register machinery with our Al Khobar
            fleet sourcing desk. Tell us what you have and where it&apos;s based, and we&apos;ll reach out directly
            when there is a fit for a project.
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-5 mb-6 text-xs text-slate-600 leading-relaxed shadow-sm flex gap-3">
          <span aria-hidden className="text-base shrink-0">🔒</span>
          <p>
            <strong className="text-primary">Your submission stays private.</strong> Everything you enter here goes
            straight to the GulfFast fleet sourcing desk by email. Nothing on this form is published, listed on the
            website, or shared publicly — we simply contact you directly if there is a match.
          </p>
        </div>

        <SupplierIntakeForm />

        <p className="text-[11px] text-slate-500 mt-4 text-center">
          Prefer to talk first? Call{' '}
          <a href={telHref(CONTACT.phonePrimary)} className="text-accent-strong font-semibold hover:underline">
            {CONTACT.phonePrimary}
          </a>{' '}
          or email{' '}
          <a href={mailtoHref()} className="text-accent-strong font-semibold hover:underline">
            {CONTACT.email}
          </a>
          .
        </p>

      </div>
    </div>
  );
}
