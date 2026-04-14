import type { Metadata } from 'next';
import Hero from '@/components/shop/Hero';
import Marquee from '@/components/shop/Marquee';
import CategoryGrid from '@/components/shop/CategoryGrid';
import FeaturedProducts from '@/components/shop/FeaturedProducts';
import ConsultationBanner from '@/components/shop/ConsultationBanner';
import YouTubeBanner from '@/components/shop/YouTubeBanner';
import BrandStory from '@/components/shop/BrandStory';
import PolicyLinks from '@/components/shop/PolicyLinks';

export const metadata: Metadata = {
  title: 'Buy Authentic Handwoven Sarees & Bridal Lehengas Online',
  description:
    'Discover hand-picked Banarasi sarees, bridal lehengas, Chanderi silk sarees and more sourced directly from Chandni Chowk, Delhi.'
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <CategoryGrid />
      <FeaturedProducts />
      <ConsultationBanner />
      <YouTubeBanner />
      <BrandStory />
      <PolicyLinks />
    </>
  );
}
