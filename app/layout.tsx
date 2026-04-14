import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/shop/Navbar';
import CartDrawer from '@/components/shop/CartDrawer';
import WhatsAppFloat from '@/components/shop/WhatsAppFloat';
import Footer from '@/components/shop/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://jindalvastrakala.com'),
  title: {
    default: 'Jindal Vastrakala | Buy Authentic Handwoven Sarees & Bridal Lehengas Online | Chandni Chowk Delhi',
    template: '%s | Jindal Vastrakala'
  },
  description:
    'Shop authentic handwoven Banarasi sarees, bridal lehengas, Chanderi sarees and more — sourced directly from Chandni Chowk, Delhi. Worldwide shipping available.',
  keywords: [
    'banarasi saree online',
    'buy saree online',
    'bridal lehenga',
    'handwoven saree',
    'Chandni Chowk saree shop',
    'Indian ethnic wear online'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jindalvastrakala.com',
    siteName: 'Jindal Vastrakala',
    title: 'Jindal Vastrakala — Timeless Sarees. Woven Traditions.',
    description: 'Authentic handwoven sarees and bridal lehengas from Chandni Chowk, Delhi.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Jindal Vastrakala' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jindal Vastrakala',
    description: 'Authentic handwoven sarees and lehengas from Chandni Chowk.'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <CartDrawer />
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
