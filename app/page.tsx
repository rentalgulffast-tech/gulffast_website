import Link from 'next/link';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import StatsBar from '@/components/StatsBar';
import WhyChooseUsChecklist from '@/components/WhyChooseUsChecklist';
import CertificationsBadges from '@/components/CertificationsBadges';
import CategoryCard from '@/components/CategoryCard';
import { getEquipmentTier1Categories } from '@/lib/equipment';
import { getManpowerTier1Categories } from '@/lib/manpower';
import { industries } from '@/lib/industries';
import { getFeaturedFaqs } from '@/lib/faq';
import { WHATSAPP_NUMBER } from '@/lib/site-stats';

export default function HomePage() {
  const featuredEquipment = getEquipmentTier1Categories();
  const featuredManpower = getManpowerTier1Categories();
  const featuredFaqs = getFeaturedFaqs(4);

  return (
    <div className="bg-[#F0EBE3] text-[#2B2620] min-h-screen">

      {/* 2. Hero — segmented dual CTA */}
      <section className="bg-[#FAF6EF] border-b border-[#E2DED4] py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7ED] border border-[#FFEDD5] text-[#C0714A] text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Direct Heavy Equipment &amp; Technical Workforce Owner • Est. 1999
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
              Saudi Arabia Industrial <span className="text-[#C0714A]">Equipment &amp; Manpower</span> Supply
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Arabian Gulf Fast Contracting Co. (GulfFast) provides Aramco &amp; SABIC compliant heavy machinery rentals and certified trade crews directly from our Al Khobar operations hub.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/request-a-quote?need=equipment"
                className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold text-sm shadow-sm transition-all"
              >
                Request a Quote →
              </Link>
              <Link
                href="/request-a-quote?need=manpower"
                className="px-6 py-3 rounded-xl bg-white hover:bg-[#F0EBE3] text-[#0F172A] font-bold text-sm border border-[#E2DED4] shadow-sm transition-all"
              >
                Request Manpower →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">

        {/* 3. Stats bar */}
        <StatsBar />

        {/* 4. Where We Work */}
        <ServiceAreaMap />

        {/* 5. Featured Equipment categories */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#C0714A] pl-3">
              Featured Equipment Categories
            </h2>
            <Link href="/equipment" className="text-xs font-bold text-[#C0714A] hover:underline shrink-0">
              View All 85 Categories →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEquipment.map((category) => (
              <CategoryCard
                key={category.slug}
                name={category.name}
                slug={category.slug}
                tier={category.tier}
                basePath="/equipment"
                meta={
                  category.ownedFleetCount > 0
                    ? `${category.ownedFleetCount} ${category.ownedFleetCount === 1 ? 'unit' : 'units'} in our own fleet`
                    : 'Sourced through our partner network'
                }
              />
            ))}
          </div>
        </section>

        {/* 6. Featured Manpower categories */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#C0714A] pl-3">
              Featured Manpower Categories
            </h2>
            <Link href="/manpower" className="text-xs font-bold text-[#C0714A] hover:underline shrink-0">
              View All 22 Categories →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredManpower.map((category) => (
              <Link
                key={category.slug}
                href={`/manpower/${category.slug}`}
                className="bg-white border border-[#E2DED4] rounded-2xl p-6 hover:border-[#0F172A] transition-colors shadow-sm block group"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFF7ED] text-[#C0714A] border border-[#FFEDD5] px-2.5 py-1 rounded-full">
                  Featured
                </span>
                <h3 className="text-xl font-extrabold text-[#0F172A] group-hover:text-[#C0714A] transition-colors mt-3 mb-2">
                  {category.name}
                </h3>
                <ul className="text-xs text-slate-600 space-y-1">
                  {category.jobTitles.slice(0, 4).map((title) => (
                    <li key={title} className="flex items-start gap-1.5">
                      <span className="text-[#C0714A] font-bold">✓</span>
                      <span>{title}</span>
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </section>

        {/* 7. Why Choose GulfFast */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-5 border-l-4 border-[#C0714A] pl-3">
            Why Choose GulfFast
          </h2>
          <WhyChooseUsChecklist />
        </section>

        {/* 8. Industries We Serve */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-5 border-l-4 border-[#C0714A] pl-3">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="bg-white border border-[#E2DED4] rounded-2xl p-5 hover:border-[#0F172A] transition-colors shadow-sm block group"
              >
                <h3 className="font-bold text-[#0F172A] text-sm group-hover:text-[#C0714A] transition-colors mb-1">
                  {industry.name}
                </h3>
                <p className="text-xs text-slate-500">{industry.tagline}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 9. Certifications & Compliance */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-5 border-l-4 border-[#C0714A] pl-3">
            Certifications &amp; Compliance
          </h2>
          <CertificationsBadges />
        </section>

        {/* 10. Named projects / case studies */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-5 border-l-4 border-[#C0714A] pl-3">
            Project Case Studies
          </h2>
          <div className="bg-white border border-[#E2DED4] rounded-2xl p-10 text-center shadow-sm">
            <p className="text-slate-600 text-sm">
              Named project case studies coming soon.
            </p>
            <Link href="/projects" className="inline-block mt-3 text-xs font-bold text-[#C0714A] hover:underline">
              View Project Showcase →
            </Link>
          </div>
        </section>

        {/* 11. Client logos — omitted: no real, labelled client logos available yet */}

        {/* 12. FAQ teaser */}
        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] border-l-4 border-[#C0714A] pl-3">
              Frequently Asked Questions
            </h2>
            <Link href="/faq" className="text-xs font-bold text-[#C0714A] hover:underline shrink-0">
              View Full FAQ →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredFaqs.map((faq) => (
              <div key={faq.question} className="bg-white border border-[#E2DED4] rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-[#0F172A] text-sm mb-1.5">{faq.question}</h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* 13. Final CTA band */}
      <section className="bg-[#FAF6EF] text-[#2B2620] py-14 border-t border-[#E2DED4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="bg-[#FFF7ED] text-[#C0714A] text-xs font-bold px-3 py-1 rounded-full border border-[#FFEDD5] uppercase tracking-wider">
            Al Khobar Head Office Operations Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            Need Immediate Mobilization for Your Site?
          </h2>
          <p className="text-slate-600 font-normal text-sm max-w-2xl mx-auto leading-relaxed">
            Speak directly with our technical sales engineers in Al Khobar for daily, monthly, or annual contracts.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Link
              href="/request-a-quote?need=equipment"
              className="px-7 py-3 rounded-xl bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold text-sm transition-all shadow-md"
            >
              Request a Quote →
            </Link>
            <Link
              href="/request-a-quote?need=manpower"
              className="px-7 py-3 rounded-xl bg-white hover:bg-[#F0EBE3] text-[#0F172A] font-bold text-sm border border-[#E2DED4] transition-all shadow-xs"
            >
              Request Manpower →
            </Link>
          </div>
          <div className="pt-4 flex flex-wrap justify-center items-center gap-4 text-xs text-slate-600 font-semibold">
            {/* No real GulfFast WhatsApp number configured yet — falls back to phone/email only. See lib/site-stats.ts */}
            {WHATSAPP_NUMBER && (
              <>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-[#C0714A] transition-colors">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> WhatsApp Us
                </a>
                <span className="text-slate-300">|</span>
              </>
            )}
            <a href="tel:+966568676710" className="hover:text-[#C0714A] transition-colors">
              📞 +966 56 867 6710
            </a>
            <span className="text-slate-300">|</span>
            <a href="mailto:sales@gulffast.co" className="hover:text-[#C0714A] transition-colors">
              ✉️ sales@gulffast.co
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
