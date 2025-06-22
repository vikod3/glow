import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="self-stretch flex w-full flex-col items-center text-base justify-center px-2 py-6 max-md:max-w-full">
      <div className="w-[1200px] max-w-full">
        <div className="flex w-full max-w-[1200px] items-center gap-[40px_100px] justify-between flex-wrap max-md:max-w-full">
          <div className="self-stretch flex items-center gap-3 text-[28px] text-white font-medium whitespace-nowrap text-center tracking-[-1.88px] leading-[1.1] my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9de6021644f9415b8e6ba1d1ef4607ce/e4bfb5a3f9037dab7d49b7c2771e5de52593d8aa?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto"
              alt="Webfluin Logo"
            />
            <div className="text-white self-stretch my-auto">
              Webfluin
            </div>
          </div>
          <nav className="self-stretch min-w-60 font-normal leading-[1.7] w-[349px] my-auto">
            <div className="flex gap-[38px]">
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
          <div className="self-stretch font-bold w-[201px] my-auto">
            <div className="flex items-center gap-[17px]">
              <button className="text-white self-stretch gap-1 my-auto py-2.5 rounded-[10px] hover:bg-white/10 transition-colors">
                Log in
              </button>
              <button className="text-white border-[color:var(--Linear,#FF5552)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] backdrop-blur-[6px] bg-[rgba(33,33,43,0.60)] self-stretch gap-3 overflow-hidden my-auto px-6 py-3 rounded-[100px] border-[1.5px] border-solid max-md:px-5 hover:bg-[rgba(33,33,43,0.80)] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
