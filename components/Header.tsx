'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CONTACT, telHref } from '@/lib/contact';
import { BRAND_LEGAL_NAME, BRAND_TAGLINE } from '@/lib/brand';
import Pill from '@/components/Pill';

/** Primary navigation. Kept to seven items so the row fits at 1280px without clipping. */
const NAV_ITEMS = [
  { name: 'Equipment', href: '/equipment' },
  { name: 'Manpower', href: '/manpower' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

/** Secondary destinations: in the mobile drawer and the footer, not the top nav. */
const SECONDARY_ITEMS = [
  { name: 'Urgent Requirements', href: '/urgent' },
  { name: 'Register Equipment (Suppliers)', href: '/suppliers' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' }
];

function PhoneIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-accent shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.27 1.11l-2.17 2.2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--whatsapp-green)' }} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.017 2C6.492 2 2.017 6.475 2.017 12c0 1.9.53 3.729 1.53 5.312L2 22l4.812-1.514A9.94 9.94 0 0012.017 22c5.524 0 10-4.476 10-10s-4.476-10-10-10zm0 18.184a8.15 8.15 0 01-4.16-1.14l-.298-.177-3.096.974.99-3.02-.194-.31a8.157 8.157 0 01-1.242-4.323c0-4.51 3.672-8.184 8.183-8.184 4.51 0 8.184 3.673 8.184 8.184 0 4.511-3.673 8.184-8.184 8.184z" />
    </svg>
  );
}

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

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <>
      {/* Utility bar — one row at every width. Items drop out as space runs out
          rather than wrapping, which is what made this bar 86px tall before. */}
      <div className="bg-primary-deep text-white/70 text-xs">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between gap-4 overflow-hidden">
          <div className="flex items-center gap-4 min-w-0">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-white font-semibold whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              {`${BRAND_LEGAL_NAME} (Est. 1999)`}
            </span>
            <span className="hidden lg:inline w-px h-3.5 bg-white/15 shrink-0"></span>
            <Link
              href="/urgent"
              className="inline-flex items-center gap-1.5 text-accent hover:text-white font-bold transition-colors whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0"></span>
              Urgent Requirements
            </Link>
            <span className="hidden sm:inline w-px h-3.5 bg-white/15 shrink-0"></span>
            <Link
              href="/suppliers"
              className="hidden sm:inline hover:text-white transition-colors whitespace-nowrap"
            >
              Register Equipment
            </Link>
            <span className="hidden sm:inline w-px h-3.5 bg-white/15 shrink-0"></span>
            <Link
              href="/careers"
              className="hidden sm:inline hover:text-white transition-colors whitespace-nowrap"
            >
              Careers
            </Link>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={telHref(CONTACT.phonePrimary)}
              className="hover:text-white transition-colors flex items-center gap-1.5 font-semibold text-white whitespace-nowrap"
            >
              <PhoneIcon />
              {CONTACT.phonePrimary}
            </a>
            <span className="hidden md:inline w-px h-3.5 bg-white/15"></span>
            <a
              href={`https://wa.me/${CONTACT.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with GulfFast on WhatsApp"
              className="hidden md:flex hover:text-white transition-colors items-center gap-1.5 font-semibold text-white whitespace-nowrap"
            >
              <WhatsAppIcon />
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
          className={`max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-8 transition-[height] duration-300 ${
            stuck ? 'h-[70px]' : 'h-[86px]'
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="GulfFast — home">
            <Image src="/logo-mark.png" alt="" width={721} height={681} priority className="h-10 w-auto" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-primary font-bold tracking-[0.02em] text-xl leading-none">
                GULFFAST
              </span>
              <span className="text-muted text-[10px] font-semibold uppercase tracking-[0.14em] mt-0.5 whitespace-nowrap">
                {BRAND_TAGLINE}
              </span>
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link-hover text-[13px] font-semibold uppercase tracking-[0.09em] py-1.5 whitespace-nowrap transition-colors ${
                  isActive(item.href) ? 'on text-primary' : 'text-muted hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden sm:flex items-center ml-auto shrink-0">
            <Pill href="/request-a-quote">Request a Quote</Pill>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden ml-auto p-2 rounded-xl text-muted hover:text-primary hover:bg-tint focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
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

        {mobileMenuOpen && (
          <div className="xl:hidden bg-background border-t border-border px-4 pt-3 pb-6 animate-fadeInScale">
            <div className="space-y-1.5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-sm font-semibold ${
                    isActive(item.href) ? 'bg-white text-primary shadow-sm' : 'text-foreground hover:bg-white/60'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-border space-y-1.5">
              {SECONDARY_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-xl text-sm ${
                    item.href === '/urgent'
                      ? 'text-accent-ink font-bold'
                      : 'text-muted hover:text-primary hover:bg-white/60'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-border space-y-2">
              <a
                href={telHref(CONTACT.phonePrimary)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-primary"
              >
                <PhoneIcon />
                {CONTACT.phonePrimary}
              </a>
              <a
                href={telHref(CONTACT.phoneSecondary)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-primary"
              >
                <PhoneIcon />
                {CONTACT.phoneSecondary}
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-primary"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>

            <div className="pt-4">
              <Pill href="/request-a-quote" className="w-full">
                Request Equipment or Manpower Quote
              </Pill>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
