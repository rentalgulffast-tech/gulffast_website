import Link from 'next/link';
import Image from 'next/image';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { getEquipmentTier1Categories } from '@/lib/equipment';
import { getManpowerTier1Categories } from '@/lib/manpower';
import { cities } from '@/lib/cities';
import { CONTACT, telHref, mailtoHref } from '@/lib/contact';
import { BRAND_LEGAL_NAME } from '@/lib/brand';
import CertificationsBadges from '@/components/CertificationsBadges';
import { CREDENTIALS, ISO_CERTIFICATES } from '@/lib/credentials';

export default function Footer() {
  const orgSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const footerEquipment = getEquipmentTier1Categories().slice(0, 6);
  const footerManpower = getManpowerTier1Categories().slice(0, 6);

  return (
    <footer className="bg-primary-deep text-white/60 pt-16 pb-9 text-sm">
      {/* Sitewide JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, localBusinessSchema]) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/10">

          {/* Column 1: Brand & Corporate Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="GulfFast — home">
              <Image
                src="/logo-mark.png"
                alt=""
                width={721}
                height={681}
                className="h-11 w-auto"
              />
              <span className="font-display text-white font-bold tracking-[0.02em] text-2xl leading-none">
                GULFFAST
              </span>
            </Link>

            <p className="text-xs leading-relaxed max-w-md">
              GulfFast ({BRAND_LEGAL_NAME}) is an established direct heavy equipment rental and certified manpower supply provider serving oil and gas, petrochemical, power, and construction projects across Saudi Arabia since 1999.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  <strong className="text-white/80">Headquarters:</strong> Building 6623, Prince Abdulmohsin Ibn Abdulaziz St, Madinat Al Ummal, Al Khobar 34442, Saudi Arabia
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>
                  <strong className="text-white/80">Hotlines:</strong>{' '}
                  <a href={telHref(CONTACT.phonePrimary)} className="hover:text-white transition-colors font-semibold">{CONTACT.phonePrimary}</a>{' '}/{' '}
                  <a href={telHref(CONTACT.phoneSecondary)} className="hover:text-white transition-colors font-semibold">{CONTACT.phoneSecondary}</a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 shrink-0" style={{ color: 'var(--whatsapp-green)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 2C6.492 2 2.017 6.475 2.017 12c0 1.9.53 3.729 1.53 5.312L2 22l4.812-1.514A9.94 9.94 0 0012.017 22c5.524 0 10-4.476 10-10s-4.476-10-10-10z" />
                </svg>
                <span>
                  <strong className="text-white/80">WhatsApp:</strong>{' '}
                  <a href={`https://wa.me/${CONTACT.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-semibold">
                    {CONTACT.phonePrimary}
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>
                  <strong className="text-white/80">Email:</strong>{' '}
                  <a href={mailtoHref()} className="hover:text-white transition-colors">{CONTACT.email}</a>
                </span>
              </div>

              <div className="flex flex-col gap-1 pt-1 text-white/40">
                <span>{`CR ${CREDENTIALS.crNumber} • VAT ${CREDENTIALS.vatNumber} • Unified No. ${CREDENTIALS.unifiedNationalNumber}`}</span>
                <span>{ISO_CERTIFICATES.map((cert) => cert.standard).join(' • ')}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Equipment Categories */}
          <div className="space-y-4">
            <h4 className="text-white text-[11px] font-bold tracking-[0.16em] uppercase">Equipment</h4>
            <ul className="space-y-2.5 text-xs">
              {footerEquipment.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/equipment/${cat.slug}`} className="hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/equipment" className="hover:text-accent transition-colors text-accent font-bold">
                  All Equipment →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Manpower Categories */}
          <div className="space-y-4">
            <h4 className="text-white text-[11px] font-bold tracking-[0.16em] uppercase">Manpower</h4>
            <ul className="space-y-2.5 text-xs">
              {footerManpower.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/manpower/${cat.slug}`} className="hover:text-white transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/manpower" className="hover:text-accent transition-colors text-accent font-bold">
                  All Manpower →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company Navigation */}
          <div className="space-y-4">
            <h4 className="text-white text-[11px] font-bold tracking-[0.16em] uppercase">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Corporate</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Project Solutions</Link></li>
              <li><Link href="/urgent" className="hover:text-white transition-colors">Urgent Requirements</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Project Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ &amp; Compliance</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Head Office</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Register for Work</Link></li>
              <li><Link href="/suppliers" className="hover:text-white transition-colors">Suppliers</Link></li>
              <li><Link href="/request-a-quote?need=equipment" className="hover:text-accent transition-colors text-accent font-bold">Request a Quote →</Link></li>
            </ul>
          </div>

        </div>

        {/* Certifications */}
        <div className="py-6 border-b border-white/10">
          <span className="text-white font-bold uppercase text-[11px] block mb-3">Certifications:</span>
          <CertificationsBadges compact dark />
        </div>

        {/* Coverage Cities Badges */}
        <div className="py-6 border-b border-white/10 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-white font-bold uppercase text-[11px]">KSA Service Footprint:</span>
            {cities.map((city) => (
              <span key={city.slug} className="bg-white/5 text-white/70 border border-white/10 px-3 py-1 rounded-lg text-[11px] font-medium">
                {city.name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>{`© ${new Date().getFullYear()} ${BRAND_LEGAL_NAME} (GulfFast). All rights reserved.`}</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span>Al Khobar Headquarters, Saudi Arabia</span>
            <span>•</span>
            <Link href="/faq" className="hover:text-white transition-colors">Safety &amp; Compliance</Link>
            <span>•</span>
            <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/legal/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
