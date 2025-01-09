import React from 'react';
import HeroSection from '../components/home/sections/HeroSection';
import FeaturesSection from '../components/home/sections/FeaturesSection';
import GallerySection from '../components/gallery/GallerySection';
import PricingSection from '../components/home/sections/PricingSection';
import CTASection from '../components/home/sections/CTASection';

export default function HomePage() {
  return (
    <main className="pt-16">
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <PricingSection />
      <CTASection />
    </main>
  );
}