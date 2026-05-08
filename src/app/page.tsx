'use client';

import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import PathsPreview from '@/components/home/PathsPreview';
import DemoSection from '@/components/home/DemoSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PathsPreview />
      <DemoSection />
    </>
  );
}
