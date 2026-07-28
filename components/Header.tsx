'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-xl">
      {/* Top Emergency/Direct Contact Bar */}
      <div className="bg-slate-950 border-b border-slate-800/80 px-4 py-2 text-xs font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Direct KSA Supplier (Est. 1999)
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-300">Headquarters: Al Khobar, Saudi Arabia</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="tel:+966568676710"
              className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-200"
            >
              <svg className="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.17 2.2z"/>
              </svg>
              +966 56 867 6710
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="tel:+966538321732"
              className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-200"
            >
              +966 53 832 1732
            </a>
            <span className="hidden lg:inline text-slate-600">|</span>
            <a
              href="mailto:sales@gulffast.co"
              className="hidden lg:inline hover:text-amber-400 transition-colors text-slate-300"
            >
              sales@gulffast.co
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
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
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide">
          <Link href="/equipment-rental" className="text-slate-200 hover:text-amber-400 transition-colors">
            Equipment Rental
          </Link>
          <Link href="/vehicle-rental" className="text-slate-200 hover:text-amber-400 transition-colors">
            Vehicle Rental
          </Link>
          <Link href="/manpower-supply" className="text-slate-200 hover:text-amber-400 transition-colors">
            Manpower Supply
          </Link>
          <Link href="/industries" className="text-slate-200 hover:text-amber-400 transition-colors">
            Industries
          </Link>
          <Link href="/projects" className="text-slate-200 hover:text-amber-400 transition-colors">
            Projects
          </Link>
          <Link href="/blog" className="text-slate-200 hover:text-amber-400 transition-colors">
            Insights
          </Link>
          <Link href="/faq" className="text-slate-200 hover:text-amber-400 transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Primary Quote CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/request-a-quote"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Request a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
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
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <Link
            href="/equipment-rental"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Equipment Rental
          </Link>
          <Link
            href="/vehicle-rental"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Vehicle Rental
          </Link>
          <Link
            href="/manpower-supply"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Manpower Supply
          </Link>
          <Link
            href="/industries"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Industries Served
          </Link>
          <Link
            href="/projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Project Showcase
          </Link>
          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Industry Insights &amp; MDX Blog
          </Link>
          <Link
            href="/faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Frequently Asked Questions
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Contact &amp; Location
          </Link>
          <div className="pt-2">
            <Link
              href="/request-a-quote"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-3 rounded-lg bg-amber-500 text-slate-950 font-bold text-base"
            >
              Request Equipment or Manpower Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
