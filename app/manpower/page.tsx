import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryCard from '@/components/CategoryCard';
import { getManpowerCategories, getManpowerTier1Categories } from '@/lib/manpower';
import { generateServiceSchema } from '@/lib/seo';
import { CONTACT, telHref } from '@/lib/contact';

export const metadata = {
  title: 'Certified Manpower Supply Services in Saudi Arabia | GulfFast',
  description: 'Direct-supply certified manpower in Saudi Arabia. Welders, riggers, scaffolders, equipment operators, electricians, safety officers, and more from Al Khobar.',
  alternates: {
    canonical: '/manpower'
  }
};

export default function ManpowerHubPage() {
  const allCategories = getManpowerCategories();
  const featuredCategories = getManpowerTier1Categories();
  const serviceSchema = generateServiceSchema(
    'Certified Manpower Supply Services in Saudi Arabia',
    'Direct-supply certified industrial manpower across Saudi Arabia, sourced directly through job postings, referrals, and outreach.',
    '/manpower'
  );

  return (
    <div className="py-10 bg-background text-foreground min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Breadcrumbs
          items={[
            { name: 'Home', url: '/' },
            { name: 'Manpower', url: '/manpower' }
          ]}
        />

        <div className="my-6 border-b border-border pb-6">
          <span className="text-accent-strong font-bold text-xs uppercase tracking-wider bg-accent-strong/10 px-3 py-1 rounded-full border border-accent-strong/20">
            Certified Trade Workforce Hub
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mt-2">
            Certified Manpower Supply in Saudi Arabia
          </h1>
          <p className="text-slate-600 text-sm max-w-3xl mt-2 leading-relaxed">
            GulfFast supplies certified welders, riggers, scaffolders, equipment operators, and safety officers directly, sourced through our own recruitment, referrals, and outreach — not through a staffing agency.
          </p>
        </div>

        {/* Featured Tier 1 categories */}
        <section className="my-10">
          <h2 className="text-xl font-extrabold text-primary mb-5 border-l-4 border-accent pl-3">
            Featured Manpower Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <CategoryCard
                key={category.slug}
                name={category.name}
                slug={category.slug}
                tier={category.tier}
                basePath="/manpower"
                meta={`${category.jobTitles.length} job titles`}
              />
            ))}
          </div>
        </section>

        {/* Full category list with sample job titles */}
        <section className="my-10">
          <h2 className="text-xl font-extrabold text-primary mb-5 border-l-4 border-accent pl-3">
            All Manpower Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/manpower/${category.slug}`}
                className="bg-white border border-border rounded-2xl p-5 hover:border-primary transition-colors shadow-sm block"
              >
                <h3 className="font-bold text-primary text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {category.jobTitles.slice(0, 3).join(', ')}
                  {category.jobTitles.length > 3 ? ', …' : ''}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Informational Callout */}
        <div className="bg-white border border-border rounded-2xl p-8 text-center my-10 space-y-3 shadow-sm">
          <h2 className="text-xl font-extrabold text-primary">Need Turnkey Trade Crew Mobilization with Camp &amp; Transport?</h2>
          <p className="text-slate-600 text-xs max-w-2xl mx-auto leading-relaxed">
            GulfFast handles full mobilization including Iqama verification, Aramco/SABIC gate passes, trade coupon testing, food, housing camps, and site transport.
          </p>
          <a
            href={telHref(CONTACT.phonePrimary)}
            className="inline-block px-6 py-2.5 bg-primary hover:bg-accent-strong text-white font-bold text-xs rounded-xl transition-colors mt-2 shadow-sm"
          >
            Call Direct Workforce Desk: {CONTACT.phonePrimary}
          </a>
        </div>

      </div>
    </div>
  );
}
