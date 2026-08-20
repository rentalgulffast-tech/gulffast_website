'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { WHATSAPP_NUMBER } from '@/lib/site-stats';
import { getEquipmentCategoriesByCluster } from '@/lib/equipment';
import { slugify } from '@/lib/slug';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [equipmentMenuOpen, setEquipmentMenuOpen] = useState(false);
  const [mobileEquipmentOpen, setMobileEquipmentOpen] = useState(false);
  const pathname = usePathname();
  const equipmentClusters = getEquipmentCategoriesByCluster();

  const navItems = [
    { name: 'Equipment', href: '/equipment' },
    { name: 'Manpower', href: '/manpower' },
    { name: 'Industries', href: '/industries' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#FFFFFF] border-b border-[#D7E6F5] text-[#12233B] shadow-sm">
      {/* Top Corporate Direct Contact Bar */}
      <div className="bg-[#EAF4FC] border-b border-[#D7E6F5] px-4 py-2 text-xs font-medium text-slate-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-[#12233B] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Arabian Gulf Fast Contracting Co. (Est. 1999)
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="text-slate-600">Al Khobar, KSA • Direct Industrial Supplier</span>
          </div>
          <div className="flex items-center gap-4 text-slate-700">
            <a
              href="tel:+966568676710"
              className="hover:text-[#2B6CB0] transition-colors flex items-center gap-1 font-semibold text-[#12233B]"
            >
              <svg className="w-3.5 h-3.5 text-[#2B6CB0]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.17 2.2z"/>
              </svg>
              +966 56 867 6710
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="tel:+966538321732"
              className="hover:text-[#2B6CB0] transition-colors text-[#12233B] font-semibold"
            >
              +966 53 832 1732
            </a>
            <span className="hidden lg:inline text-slate-300">|</span>
            <a
              href="mailto:sales@gulffast.co"
              className="hidden lg:inline hover:text-[#2B6CB0] transition-colors text-slate-600 font-medium"
            >
              sales@gulffast.co
            </a>
            {/* No real GulfFast WhatsApp number configured yet — see lib/site-stats.ts */}
            {WHATSAPP_NUMBER && (
              <>
                <span className="text-slate-300">|</span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with GulfFast on WhatsApp"
                  className="hover:text-[#25D366] transition-colors flex items-center gap-1 font-semibold text-[#12233B]"
                >
                  <svg className="w-3.5 h-3.5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12.017 2C6.492 2 2.017 6.475 2.017 12c0 1.9.53 3.729 1.53 5.312L2 22l4.812-1.514A9.94 9.94 0 0012.017 22c5.524 0 10-4.476 10-10s-4.476-10-10-10zm0 18.184a8.15 8.15 0 01-4.16-1.14l-.298-.177-3.096.974.99-3.02-.194-.31a8.157 8.157 0 01-1.242-4.323c0-4.51 3.672-8.184 8.183-8.184 4.51 0 8.184 3.673 8.184 8.184 0 4.511-3.673 8.184-8.184 8.184z"/>
                  </svg>
                  WhatsApp
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-48 h-12">
            <Image
              src="/logo.svg"
              alt="GulfFast Rentals & Manpower Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-5 text-xs sm:text-sm font-semibold tracking-tight text-slate-700">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

            if (item.name === 'Equipment') {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setEquipmentMenuOpen(true)}
                  onMouseLeave={() => setEquipmentMenuOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`nav-link-hover transition-colors py-1 flex items-center gap-1 ${
                      isActive ? 'text-[#12233B] font-bold border-b-2 border-[#2B6CB0]' : 'hover:text-[#2B6CB0]'
                    }`}
                  >
                    {item.name}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {equipmentMenuOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[640px] z-50">
                      <div className="bg-white border border-[#D7E6F5] rounded-2xl shadow-lg p-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
                          {equipmentClusters.map((cluster) => (
                            <Link
                              key={cluster.name}
                              href={`/equipment#${slugify(cluster.name)}`}
                              className="text-xs font-semibold text-slate-700 hover:text-[#2B6CB0] transition-colors py-1"
                            >
                              {cluster.name}
                              <span className="text-slate-400 font-normal"> ({cluster.categories.length})</span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-[#D7E6F5]">
                          <Link
                            href="/equipment"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2B6CB0] hover:underline"
                          >
                            View All 85 Equipment Categories →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link-hover transition-colors py-1 ${
                  isActive ? 'text-[#12233B] font-bold border-b-2 border-[#2B6CB0]' : 'hover:text-[#2B6CB0]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Primary Quote CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/downloads/gulffast-company-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-slate-700 hover:text-[#2B6CB0] hover:bg-[#EAF4FC] font-semibold text-xs transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H8a2 2 0 01-2-2V5a2 2 0 012-2h6l6 6v11a2 2 0 01-2 2z" />
            </svg>
            Company Profile
          </a>
          <Link
            href="/request-a-quote"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#2B6CB0] hover:bg-[#1D6FB8] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-[#2B6CB0] hover:bg-[#EAF4FC] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#EAF4FC] border-b border-[#D7E6F5] px-4 pt-3 pb-6 space-y-2 animate-fadeInScale">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

            if (item.name === 'Equipment') {
              return (
                <div key={item.href}>
                  <div className={`flex items-center justify-between rounded-xl ${isActive ? 'bg-white shadow-sm' : ''}`}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex-1 px-3 py-2 text-sm font-medium ${isActive ? 'text-[#12233B] font-bold' : 'text-slate-800'}`}
                    >
                      {item.name}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileEquipmentOpen(!mobileEquipmentOpen)}
                      className="px-3 py-2 text-slate-600"
                      aria-label="Toggle Equipment Categories"
                    >
                      <svg className={`w-4 h-4 transition-transform ${mobileEquipmentOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  {mobileEquipmentOpen && (
                    <div className="pl-3 pr-2 py-2 grid grid-cols-1 gap-1">
                      {equipmentClusters.map((cluster) => (
                        <Link
                          key={cluster.name}
                          href={`/equipment#${slugify(cluster.name)}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-xs font-semibold text-slate-700 hover:text-[#2B6CB0] py-1.5"
                        >
                          {cluster.name} ({cluster.categories.length})
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-xl text-sm font-medium ${
                  isActive ? 'bg-white text-[#12233B] font-bold shadow-sm' : 'text-slate-800 hover:bg-white/60'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/request-a-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-[#2B6CB0] hover:bg-[#1D6FB8] text-white font-bold text-sm shadow-sm"
            >
              Request Equipment or Manpower Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
