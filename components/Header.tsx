'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
    <header className="w-full sticky top-0 z-50 bg-[#FAF6EF] border-b border-[#E2DED4] text-[#0F172A] shadow-sm">
      {/* Top Corporate Direct Contact Bar */}
      <div className="bg-[#F0EBE3] border-b border-[#E2DED4] px-4 py-2 text-xs font-medium text-slate-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-[#0F172A] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Arabian Gulf Fast Contracting Co. (Est. 1999)
            </span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="text-slate-600">Al Khobar, KSA • Direct Industrial Supplier</span>
          </div>
          <div className="flex items-center gap-4 text-slate-700">
            <a
              href="tel:+966568676710"
              className="hover:text-[#C0714A] transition-colors flex items-center gap-1 font-semibold text-[#0F172A]"
            >
              <svg className="w-3.5 h-3.5 text-[#C0714A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.17 2.2z"/>
              </svg>
              +966 56 867 6710
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="tel:+966538321732"
              className="hover:text-[#C0714A] transition-colors text-[#0F172A] font-semibold"
            >
              +966 53 832 1732
            </a>
            <span className="hidden lg:inline text-slate-300">|</span>
            <a
              href="mailto:sales@gulffast.co"
              className="hidden lg:inline hover:text-[#C0714A] transition-colors text-slate-600 font-medium"
            >
              sales@gulffast.co
            </a>
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
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link-hover transition-colors py-1 ${
                  isActive ? 'text-[#0F172A] font-bold border-b-2 border-[#C0714A]' : 'hover:text-[#0F172A]'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Primary Quote CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/request-a-quote"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-[#0F172A] hover:bg-[#F0EBE3] focus:outline-none"
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
        <div className="xl:hidden bg-[#F0EBE3] border-b border-[#E2DED4] px-4 pt-3 pb-6 space-y-2 animate-fadeInScale">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-xl text-sm font-medium ${
                  isActive ? 'bg-white text-[#0F172A] font-bold shadow-sm' : 'text-slate-800 hover:bg-white/60'
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
              className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-[#0F172A] hover:bg-[#C0714A] text-white font-bold text-sm shadow-sm"
            >
              Request Equipment or Manpower Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
