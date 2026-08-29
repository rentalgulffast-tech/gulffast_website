'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CONTACT, telHref, mailtoHref } from '@/lib/contact';
import { BRAND_LEGAL_NAME, BRAND_TAGLINE } from '@/lib/brand';
import Pill from '@/components/Pill';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    <>
      {/* Utility bar */}
      <div className="bg-primary-deep text-white/70 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-2 h-auto md:h-10 py-2 md:py-0">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-white font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {BRAND_LEGAL_NAME} (Est. 1999)
            </span>
            <span className="hidden sm:inline w-px h-3.5 bg-white/15"></span>
            <span>Al Khobar, KSA • Direct Industrial Supplier</span>
            <span className="hidden sm:inline w-px h-3.5 bg-white/15"></span>
            <Link href="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
            <span className="hidden sm:inline w-px h-3.5 bg-white/15"></span>
            <Link href="/suppliers" className="hover:text-white transition-colors">
              For Suppliers
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a href={telHref(CONTACT.phonePrimary)} className="hover:text-white transition-colors flex items-center gap-1 font-semibold text-white">
              <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.17 2.2z"/>
              </svg>
              {CONTACT.phonePrimary}
            </a>
            <span className="w-px h-3.5 bg-white/15"></span>
            <a href={telHref(CONTACT.phoneSecondary)} className="hover:text-white transition-colors font-semibold text-white">
              {CONTACT.phoneSecondary}
            </a>
            <span className="hidden lg:inline w-px h-3.5 bg-white/15"></span>
            <a href={mailtoHref()} className="hidden lg:inline hover:text-white transition-colors">
              {CONTACT.email}
            </a>
            <span className="w-px h-3.5 bg-white/15"></span>
            <a
              href={`https://wa.me/${CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with GulfFast on WhatsApp"
              className="hover:text-white transition-colors flex items-center gap-1 font-semibold text-white"
            >
              <svg className="w-3.5 h-3.5" style={{ color: 'var(--whatsapp-green)' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12.017 2C6.492 2 2.017 6.475 2.017 12c0 1.9.53 3.729 1.53 5.312L2 22l4.812-1.514A9.94 9.94 0 0012.017 22c5.524 0 10-4.476 10-10s-4.476-10-10-10zm0 18.184a8.15 8.15 0 01-4.16-1.14l-.298-.177-3.096.974.99-3.02-.194-.31a8.157 8.157 0 01-1.242-4.323c0-4.51 3.672-8.184 8.183-8.184 4.51 0 8.184 3.673 8.184 8.184 0 4.511-3.673 8.184-8.184 8.184z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Sticky nav */}
      <header
        className={`w-full sticky top-0 z-50 bg-card-background transition-shadow duration-300 ${stuck ? 'header-stuck' : ''}`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-10 transition-[height] duration-300 ${
            stuck ? 'h-[70px]' : 'h-[86px]'
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="GulfFast — home">
            <Image
              src="/logo-mark.png"
              alt=""
              width={721}
              height={681}
              priority
              className="h-10 w-auto"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-primary font-bold tracking-[0.02em] text-xl leading-none">
                GULFFAST
              </span>
              <span className="text-muted text-[10px] font-semibold uppercase tracking-[0.14em] mt-0.5">
                {BRAND_TAGLINE}
              </span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link-hover text-[13px] font-semibold uppercase tracking-[0.09em] py-1.5 transition-colors ${
                    isActive ? 'on text-primary' : 'text-muted hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Primary Quote CTA Button */}
          <div className="hidden sm:flex items-center ml-auto shrink-0">
            <Pill href="/request-a-quote">Request a Quote</Pill>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden ml-auto p-2 rounded-xl text-muted hover:text-primary hover:bg-tint focus:outline-none"
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
          <div className="xl:hidden bg-background border-t border-border px-4 pt-3 pb-6 space-y-2 animate-fadeInScale">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-xl text-sm font-medium ${
                    isActive ? 'bg-white text-primary font-bold shadow-sm' : 'text-foreground hover:bg-white/60'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-2">
              <Pill href="/request-a-quote" className="w-full" >
                Request Equipment or Manpower Quote
              </Pill>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
