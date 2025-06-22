
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col items-center text-base justify-center px-4 py-6 max-md:px-2">
      <div className="w-full max-w-[1200px]">
        <div className="flex w-full items-center justify-between gap-4 max-md:flex-col max-md:gap-6">
          <div className="flex items-center gap-3 text-[28px] text-white font-medium whitespace-nowrap text-center tracking-[-1.88px] leading-[1.1] max-md:text-[24px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9de6021644f9415b8e6ba1d1ef4607ce/e4bfb5a3f9037dab7d49b7c2771e5de52593d8aa?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 shrink-0"
              alt="Webfluin Logo"
            />
            <div className="text-white">
              Webfluin
            </div>
          </div>
          <nav className="font-normal leading-[1.7] max-md:order-3 max-md:w-full">
            <div className="flex gap-[38px] max-md:gap-6 max-md:justify-center max-md:flex-wrap">
              <a href="#home" className="text-white hover:text-gray-300 transition-colors">
                Home
              </a>
              <a href="#features" className="text-white hover:text-gray-300 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-white hover:text-gray-300 transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-white hover:text-gray-300 transition-colors">
                About Us
              </a>
            </div>
          </nav>
          <div className="font-bold max-md:order-2">
            <div className="flex items-center gap-[17px] max-md:gap-3">
              <button className="text-white gap-1 py-2.5 px-3 rounded-[10px] hover:bg-white/10 transition-colors max-md:text-sm">
                Log in
              </button>
              <button className="text-white border-[color:var(--Linear,#FF5552)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] backdrop-blur-[6px] bg-[rgba(33,33,43,0.60)] gap-3 overflow-hidden px-6 py-3 rounded-[100px] border-[1.5px] border-solid max-md:px-4 max-md:text-sm hover:bg-[rgba(33,33,43,0.80)] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
