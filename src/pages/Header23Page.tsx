import React from 'react';
import { Header23 } from '@/components/Header23';
import { Navbar16 } from '@/components/Navbar16';
import { Layout228 } from '@/components/Layout228';
import { Pricing11 } from '@/components/Pricing11';
import { Cta30 } from '@/components/Cta30';

const Header23Page: React.FC = () => {
  return (
    <div className="relative flex flex-col overflow-hidden bg-[#0D0D0D] min-h-screen w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/9de6021644f9415b8e6ba1d1ef4607ce/d527bd6bc2f45786143bfd81a1bf4f624e00cbfb?placeholderIfAbsent=true"
        className="aspect-[1.07] object-contain w-full max-w-[1440px] absolute z-0 h-auto right-0 top-0 max-md:max-w-full"
        alt="Background"
      />
      <div className="relative z-10 flex w-full flex-col items-center">
        <Navbar16 />
        <div className="flex-1 flex items-center justify-center w-full">
          <Header23 />
        </div>
        <Layout228 />
        <Pricing11 />
        <Cta30 />
      </div>
    </div>
  );
};

export default Header23Page;