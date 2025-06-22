import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ClientLogos } from '@/components/ClientLogos';
import { FeaturesSection } from '@/components/FeaturesSection';
import { SpecialFeatures } from '@/components/SpecialFeatures';
import { Testimonials } from '@/components/Testimonials';
import { CTASection } from '@/components/CTASection';

const Index: React.FC = () => {
  return (
    <div className="items-start relative flex gap-2.5 overflow-hidden bg-[#0D0D0D] min-h-screen">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/9de6021644f9415b8e6ba1d1ef4607ce/d527bd6bc2f45786143bfd81a1bf4f624e00cbfb?placeholderIfAbsent=true"
        className="aspect-[1.07] object-contain w-[1440px] absolute z-0 h-[1344px] right-0 top-0 max-md:max-w-full"
        alt="Background"
      />
      <div className="z-0 flex w-[1440px] flex-col items-center my-auto max-md:max-w-full">
        <div className="self-stretch flex w-full flex-col items-center text-white max-md:max-w-full">
          <Header />
          <main>
            <HeroSection />
            <ClientLogos />
            <FeaturesSection />
            <SpecialFeatures />
            <Testimonials />
            <CTASection />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
