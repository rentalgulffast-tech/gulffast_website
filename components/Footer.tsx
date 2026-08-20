import Link from 'next/link';
import Image from 'next/image';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { getEquipmentTier1Categories } from '@/lib/equipment';
import { getManpowerTier1Categories } from '@/lib/manpower';
import { industries } from '@/lib/industries';
import { cities } from '@/lib/cities';
import { WHATSAPP_NUMBER } from '@/lib/site-stats';
import CertificationsBadges from '@/components/CertificationsBadges';

export default function Footer() {
  const orgSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const footerEquipment = getEquipmentTier1Categories().slice(0, 7);
  const footerManpower = getManpowerTier1Categories().slice(0, 7);

  return (
    <footer className="bg-[#FFFFFF] text-[#12233B] pt-16 pb-12 border-t border-[#D7E6F5] text-sm">
      {/* Sitewide JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, localBusinessSchema]) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-[#D7E6F5]">

          {/* Column 1: Brand & Corporate Info (consistent contact block) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-52 h-14 bg-white p-2 rounded-xl border border-[#D7E6F5]">
                <Image
                  src="/logo.svg"
                  alt="GulfFast Rentals & Manpower Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-slate-600 text-xs leading-relaxed max-w-md">
              GulfFast (Arabian Gulf Fast Contracting Co.) is an established direct heavy equipment rental and certified manpower supply provider serving industrial and EPC contractors across Saudi Arabia since 1999.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#12233B]">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#2B6CB0] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  <strong>Headquarters:</strong> Building 6623, Prince Abdulmohsin Ibn Abdulaziz St, Madinat Al Ummal, Al Khobar 34442, Saudi Arabia
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#2B6CB0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>
                  <strong>Hotlines:</strong>{' '}
                  <a href="tel:+966568676710" className="hover:text-[#2B6CB0] transition-colors font-semibold">+966 56 867 6710</a>{' '}/{' '}
                  <a href="tel:+966538321732" className="hover:text-[#2B6CB0] transition-colors font-semibold">+966 53 832 1732</a>
                </span>
              </div>

              {/* No real GulfFast WhatsApp number configured yet — see lib/site-stats.ts */}
              {WHATSAPP_NUMBER && (
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 2C6.492 2 2.017 6.475 2.017 12c0 1.9.53 3.729 1.53 5.312L2 22l4.812-1.514A9.94 9.94 0 0012.017 22c5.524 0 10-4.476 10-10s-4.476-10-10-10z" />
                  </svg>
                  <span>
                    <strong>WhatsApp:</strong>{' '}
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors font-semibold">
                      {WHATSAPP_NUMBER}
                    </a>
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#2B6CB0] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:sales@gulffast.co" className="hover:text-[#2B6CB0] transition-colors">sales@gulffast.co</a>
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-slate-500">
                <span>Registered Saudi entity — documentation available on request</span>
              </div>
            </div>
          </div>

          {/* Column 2: Equipment Categories */}
          <div className="space-y-3">
            <h3 className="text-[#12233B] font-bold text-sm tracking-wider uppercase border-l-2 border-[#2B6CB0] pl-2">
              Equipment
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              {footerEquipment.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/equipment/${cat.slug}`} className="hover:text-[#2B6CB0] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/equipment" className="hover:text-[#2B6CB0] transition-colors text-[#2B6CB0] font-bold">
                  All Equipment →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Manpower Categories */}
          <div className="space-y-3">
            <h3 className="text-[#12233B] font-bold text-sm tracking-wider uppercase border-l-2 border-[#2B6CB0] pl-2">
              Manpower
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              {footerManpower.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/manpower/${cat.slug}`} className="hover:text-[#2B6CB0] transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/manpower" className="hover:text-[#2B6CB0] transition-colors text-[#2B6CB0] font-bold">
                  All Manpower →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Industries */}
          <div className="space-y-3">
            <h3 className="text-[#12233B] font-bold text-sm tracking-wider uppercase border-l-2 border-[#2B6CB0] pl-2">
              Industries
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link href={`/industries/${industry.slug}`} className="hover:text-[#2B6CB0] transition-colors">
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Company Navigation */}
          <div className="space-y-3">
            <h3 className="text-[#12233B] font-bold text-sm tracking-wider uppercase border-l-2 border-[#2B6CB0] pl-2">
              Company
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li><Link href="/about" className="hover:text-[#2B6CB0] transition-colors">About Corporate</Link></li>
              <li><Link href="/projects" className="hover:text-[#2B6CB0] transition-colors">Project Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-[#2B6CB0] transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-[#2B6CB0] transition-colors">FAQ &amp; Compliance</Link></li>
              <li><Link href="/contact" className="hover:text-[#2B6CB0] transition-colors">Contact Head Office</Link></li>
              <li>
                <a href="/downloads/gulffast-company-profile.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#2B6CB0] transition-colors inline-flex items-center gap-1">
                  <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H8a2 2 0 01-2-2V5a2 2 0 012-2h6l6 6v11a2 2 0 01-2 2z" />
                  </svg>
                  Company Profile (PDF)
                </a>
              </li>
              <li><Link href="/request-a-quote?need=equipment" className="hover:text-[#2B6CB0] transition-colors text-[#2B6CB0] font-bold">Request a Quote →</Link></li>
              <li><Link href="/request-a-quote?need=manpower" className="hover:text-[#2B6CB0] transition-colors text-[#2B6CB0] font-bold">Request Manpower →</Link></li>
            </ul>
          </div>

        </div>

        {/* Certifications — Aramco/TUV only, no unverified claims */}
        <div className="py-6 border-b border-[#D7E6F5]">
          <span className="text-[#12233B] font-bold uppercase text-[11px] block mb-3">Certifications:</span>
          <CertificationsBadges compact />
        </div>

        {/* Client logos — omitted: no real, labelled client logos available yet */}

        {/* Coverage Cities Badges */}
        <div className="py-6 border-b border-[#D7E6F5] text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[#12233B] font-bold uppercase text-[11px]">KSA Service Footprint:</span>
            {cities.map((city) => (
              <span key={city.slug} className="bg-white text-[#12233B] border border-[#D7E6F5] px-3 py-1 rounded-lg text-[11px] font-medium shadow-xs">
                {city.name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>{`© ${new Date().getFullYear()} Arabian Gulf Fast Contracting Co. (GulfFast). All rights reserved.`}</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span>Al Khobar Headquarters, Saudi Arabia</span>
            <span>•</span>
            <Link href="/faq" className="hover:text-[#2B6CB0] transition-colors">Safety &amp; Compliance</Link>
            <span>•</span>
            <Link href="/legal/privacy-policy" className="hover:text-[#2B6CB0] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/legal/terms-and-conditions" className="hover:text-[#2B6CB0] transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
