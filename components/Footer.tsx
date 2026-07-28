import Link from 'next/link';
import Image from 'next/image';
import { generateOrganizationSchema, generateLocalBusinessSchema, SITE_CONFIG } from '@/lib/seo';

export default function Footer() {
  const orgSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  const cities = [
    'Al Khobar',
    'Dammam',
    'Jubail',
    'Riyadh',
    'Jeddah',
    'Yanbu',
    'NEOM',
    'Ras Tanura',
    'Jizan',
    'Tabuk',
    'Rabigh',
    'Wa\'ad Al Shamal'
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-sm">
      {/* Sitewide JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, localBusinessSchema]) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & NAP */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-52 h-14">
                <Image
                  src="/logo.svg"
                  alt="GulfFast Rentals & Manpower Logo"
                  fill
                  className="object-contain object-left filter brightness-110"
                />
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              GulfFast Rentals &amp; Manpower is a direct equipment owner and manpower supply division serving oil &amp; gas, infrastructure, and heavy construction projects across the Kingdom of Saudi Arabia. Operating under parent company GulfFast Trading (established 1999).
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  <strong>Address:</strong> Building No.6623, Prince Abdulmohsin Ibn Abdulaziz Street, Madinat Al Ummal Dist., Al Khobar, KSA – 34442
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>
                  <strong>Hotlines:</strong>{' '}
                  <a href="tel:+966568676710" className="hover:text-amber-400 transition-colors">+966 56 867 6710</a>{' '}/{' '}
                  <a href="tel:+966538321732" className="hover:text-amber-400 transition-colors">+966 53 832 1732</a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:sales@gulffast.co" className="hover:text-amber-400 transition-colors">sales@gulffast.co</a>
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <svg className="w-4 h-4 text-amber-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>
                  <strong>Parent Portal:</strong>{' '}
                  <a href={SITE_CONFIG.parentDomain} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
                    www.gulffast.co
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Equipment Rental Links */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-amber-500 pl-2">
              Equipment Rental
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/equipment-rental/heavy-equipment" className="hover:text-amber-400 transition-colors">
                  Heavy Construction Machinery
                </Link>
              </li>
              <li>
                <Link href="/equipment-rental/generators-power" className="hover:text-amber-400 transition-colors">
                  Industrial Power Generators
                </Link>
              </li>
              <li>
                <Link href="/equipment-rental/lifting-cranes" className="hover:text-amber-400 transition-colors">
                  Mobile Cranes &amp; Telehandlers
                </Link>
              </li>
              <li>
                <Link href="/equipment-rental/air-compressors" className="hover:text-amber-400 transition-colors">
                  Diesel Air Compressors
                </Link>
              </li>
              <li>
                <Link href="/equipment-rental/welding-machines" className="hover:text-amber-400 transition-colors">
                  Multi-Process Welding Sets
                </Link>
              </li>
              <li>
                <Link href="/equipment-rental/tower-lights" className="hover:text-amber-400 transition-colors">
                  Mobile Lighting Towers
                </Link>
              </li>
              <li>
                <Link href="/equipment-rental/pumps-dewatering" className="hover:text-amber-400 transition-colors">
                  Dewatering &amp; Sludge Pumps
                </Link>
              </li>
              <li>
                <Link href="/equipment-rental/scaffolding-formwork" className="hover:text-amber-400 transition-colors">
                  Cuplock &amp; Ringlock Scaffolding
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Vehicles & Manpower */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-amber-500 pl-2">
              Vehicles &amp; Manpower
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/vehicle-rental/heavy-transport-trucks" className="hover:text-amber-400 transition-colors">
                  Heavy Tractor Trucks 6x4
                </Link>
              </li>
              <li>
                <Link href="/vehicle-rental/flatbed-trailers" className="hover:text-amber-400 transition-colors">
                  40ft &amp; 50ft Flatbed Trailers
                </Link>
              </li>
              <li>
                <Link href="/vehicle-rental/lowbed-trailers" className="hover:text-amber-400 transition-colors">
                  Heavy Duty Lowbed Trailers
                </Link>
              </li>
              <li>
                <Link href="/vehicle-rental/tanker-trucks" className="hover:text-amber-400 transition-colors">
                  Fuel &amp; Water Tanker Fleet
                </Link>
              </li>
              <li>
                <Link href="/manpower-supply/welders-6g-tig-arc" className="hover:text-amber-400 transition-colors">
                  Certified 6G / TIG Welders
                </Link>
              </li>
              <li>
                <Link href="/manpower-supply/riggers-tuv-certified" className="hover:text-amber-400 transition-colors">
                  TUV Riggers (Level 1, 2, 3)
                </Link>
              </li>
              <li>
                <Link href="/manpower-supply/heavy-equipment-operators" className="hover:text-amber-400 transition-colors">
                  Aramco Certified Operators
                </Link>
              </li>
              <li>
                <Link href="/manpower-supply/safety-officers-nebosh" className="hover:text-amber-400 transition-colors">
                  NEBOSH Safety Officers &amp; WPR
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Machine Crawl */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-amber-500 pl-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/industries" className="hover:text-amber-400 transition-colors">Oil &amp; Gas / Industrial Sectors</Link></li>
              <li><Link href="/projects" className="hover:text-amber-400 transition-colors">Case Studies &amp; Project Showcase</Link></li>
              <li><Link href="/blog" className="hover:text-amber-400 transition-colors">Compliance Insights &amp; MDX Blog</Link></li>
              <li><Link href="/faq" className="hover:text-amber-400 transition-colors">Sitewide FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact &amp; Location Map</Link></li>
              <li><Link href="/request-a-quote" className="hover:text-amber-400 transition-colors text-amber-400 font-semibold">Request a Quote</Link></li>
              <li className="pt-2 border-t border-slate-800">
                <a href="/llms.txt" target="_blank" className="text-slate-400 hover:text-amber-400 flex items-center gap-1 text-[11px]">
                  <svg className="w-3 h-3 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                  llms.txt (AI Search Summary)
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" className="text-slate-400 hover:text-amber-400 flex items-center gap-1 text-[11px]">
                  <svg className="w-3 h-3 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0l-1.586-1.586a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L8 11.414l1.586 1.586a3 3 0 004.242 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" />
                  </svg>
                  sitemap.xml
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Coverage Cities Badges */}
        <div className="py-6 border-b border-slate-800 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-300 font-bold uppercase text-[11px]">Saudi Arabia Coverage Hubs:</span>
            {cities.map((city) => (
              <span key={city} className="bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded text-[11px]">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} GulfFast Rentals &amp; Manpower. Division of GulfFast Trading (Est. 1999). All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Al Khobar, Kingdom of Saudi Arabia</span>
            <span>•</span>
            <Link href="/faq" className="hover:text-amber-400 transition-colors">Privacy &amp; Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
