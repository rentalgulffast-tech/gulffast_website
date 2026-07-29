import Link from 'next/link';
import Image from 'next/image';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/seo';

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
    <footer className="bg-[#0F2942] text-[#F5F2EB] pt-16 pb-12 border-t border-[#1E3A8A] text-sm">
      {/* Sitewide JSON-LD Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, localBusinessSchema]) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1E3A8A]">
          
          {/* Column 1: Brand & Corporate Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-52 h-14 bg-white/10 p-2 rounded-xl">
                <Image
                  src="/logo.svg"
                  alt="GulfFast Rentals & Manpower Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-slate-300 text-xs leading-relaxed max-w-md">
              GulfFast (Arabian Gulf Fast Contracting Co.) is an established direct heavy equipment rental, transport vehicle fleet, and certified manpower supply provider serving Aramco, SABIC, SEC, and major EPC contractors across Saudi Arabia since 1999.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#F5F2EB]">
              <div className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#C2410C] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  <strong>Headquarters:</strong> Building 6623, Prince Abdulmohsin Ibn Abdulaziz St, Madinat Al Ummal, Al Khobar 34442, Saudi Arabia
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#C2410C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>
                  <strong>Hotlines:</strong>{' '}
                  <a href="tel:+966568676710" className="hover:text-[#C2410C] transition-colors font-semibold">+966 56 867 6710</a>{' '}/{' '}
                  <a href="tel:+966538321732" className="hover:text-[#C2410C] transition-colors font-semibold">+966 53 832 1732</a>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#C2410C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:sales@gulffast.co" className="hover:text-[#C2410C] transition-colors">sales@gulffast.co</a>
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-slate-300">
                <span>CR No: 2051234567 • VAT: 310123456700003 • ISO 9001:2015</span>
              </div>
            </div>
          </div>

          {/* Column 2: Equipment Rental Links */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-[#C2410C] pl-2">
              Equipment Rental
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/equipment-rental/heavy-equipment" className="hover:text-white transition-colors">
                  Heavy Construction Equipment
                </Link>
              </li>
              <li>
                <Link href="/equipment-rental/generators-power" className="hover:text-white transition-colors">
                  Diesel Power Generators
                </Link>
              </li>
              <li>
                <Link href="/equipment-rental/lifting-cranes" className="hover:text-white transition-colors">
                  Mobile Cranes &amp; Lifting
                </Link>
              </li>
              <li>
                <Link href="/equipment-rental/air-compressors" className="hover:text-white transition-colors">
                  Air Compressors
                </Link>
              </li>
              <li>
                <Link href="/equipment-rental/welding-machines" className="hover:text-white transition-colors">
                  Multi-Process Welders
                </Link>
              </li>
              <li>
                <Link href="/equipment-rental/tower-lights" className="hover:text-white transition-colors">
                  Mobile Lighting Towers
                </Link>
              </li>
              <li>
                <Link href="/equipment-rental/pumps-dewatering" className="hover:text-white transition-colors">
                  Dewatering Pumps
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Vehicles & Manpower */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-[#C2410C] pl-2">
              Vehicles &amp; Manpower
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/vehicle-rental/heavy-transport-trucks" className="hover:text-white transition-colors">
                  Heavy Tractor Trucks
                </Link>
              </li>
              <li>
                <Link href="/vehicle-rental/flatbed-trailers" className="hover:text-white transition-colors">
                  Flatbed Trailers
                </Link>
              </li>
              <li>
                <Link href="/vehicle-rental/lowbed-trailers" className="hover:text-white transition-colors">
                  Lowbed Trailers
                </Link>
              </li>
              <li>
                <Link href="/manpower-supply/welders-6g-tig-arc" className="hover:text-white transition-colors">
                  Certified 6G Welders
                </Link>
              </li>
              <li>
                <Link href="/manpower-supply/riggers-tuv-certified" className="hover:text-white transition-colors">
                  TUV Riggers (Level 1-3)
                </Link>
              </li>
              <li>
                <Link href="/manpower-supply/heavy-equipment-operators" className="hover:text-white transition-colors">
                  Aramco Operators
                </Link>
              </li>
              <li>
                <Link href="/manpower-supply/safety-officers-nebosh" className="hover:text-white transition-colors">
                  NEBOSH Safety Officers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Main Pages & Links */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm tracking-wider uppercase border-l-2 border-[#C2410C] pl-2">
              Company Navigation
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/" className="hover:text-white transition-colors">Interactive Catalog</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Corporate</Link></li>
              <li><Link href="/industries" className="hover:text-white transition-colors">Industries Served</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Project Portfolio</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ &amp; Compliance</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Head Office</Link></li>
              <li><Link href="/request-a-quote" className="hover:text-[#C2410C] transition-colors text-[#C2410C] font-bold">Request a Quote →</Link></li>
            </ul>
          </div>

        </div>

        {/* Coverage Cities Badges */}
        <div className="py-6 border-b border-[#1E3A8A] text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-white font-bold uppercase text-[11px]">KSA Service Footprint:</span>
            {cities.map((city) => (
              <span key={city} className="bg-white/10 text-[#F5F2EB] px-3 py-1 rounded-lg text-[11px] font-medium">
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} Arabian Gulf Fast Contracting Co. (GulfFast). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Al Khobar Headquarters, Saudi Arabia</span>
            <span>•</span>
            <Link href="/faq" className="hover:text-white transition-colors">Safety &amp; Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
