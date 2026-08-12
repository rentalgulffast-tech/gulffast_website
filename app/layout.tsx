import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'GulfFast Rentals & Manpower | Equipment & Manpower Supply Saudi Arabia',
    template: '%s | GulfFast Rentals & Manpower KSA'
  },
  description: 'Direct supplier of certified heavy equipment rental and Aramco/TUV certified manpower supply in Saudi Arabia. Operating from Al Khobar since 1999.',
  keywords: [
    'Heavy Equipment Rental Saudi Arabia',
    'Manpower Supply Saudi Arabia',
    'Truck Rental KSA',
    'Aramco Certified Welders Al Khobar',
    'Mobile Crane Rental Jubail',
    'Diesel Generator Rental Dammam',
    'GulfFast Rentals'
  ],
  authors: [{ name: 'GulfFast Rentals & Manpower' }],
  creator: 'GulfFast Trading & Industrial Supply',
  metadataBase: new URL('https://gulffast-rentals.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gulffast-rentals.com',
    title: 'GulfFast Rentals & Manpower | Equipment & Manpower Supply Saudi Arabia',
    description: 'Direct supplier of certified heavy equipment rental and Aramco/TUV certified manpower supply across Saudi Arabia.',
    siteName: 'GulfFast Rentals & Manpower'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GulfFast Rentals & Manpower Saudi Arabia',
    description: 'Direct supplier of heavy equipment rental and certified manpower supply in Saudi Arabia.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#F0EBE3] text-[#2B2620] antialiased font-sans selection:bg-[#C0714A] selection:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
