import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-[858px] max-w-full mt-[88px] max-md:mt-10">
      <div className="w-full max-md:max-w-full">
        <div className="flex w-full flex-col items-center justify-center max-md:max-w-full">
          <h1 className="text-white text-center text-[68px] font-medium leading-[78px] tracking-[-2.5px] max-md:max-w-full max-md:text-[40px] max-md:leading-[51px]">
            AI Solutions for Personal and
            <br />
            Business Finance
          </h1>
          <p className="text-[#AAA] text-center text-lg font-normal leading-[31px] opacity-80 w-[697px] mt-6 max-md:max-w-full">
            Discover the power of AI-driven financial solutions for
            smarter, faster, and more secure financial decision-making
          </p>
          <div className="w-[182px] max-w-full text-base font-bold leading-[1.7] mt-6 rounded-[100px]">
            <button className="text-white self-stretch border-[color:var(--Linear,#FF5552)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] backdrop-blur-[6px] min-h-[58px] gap-3 overflow-hidden px-7 py-4 rounded-[100px] border-[1.5px] border-solid max-md:px-5 hover:bg-[rgba(33,33,43,0.80)] transition-colors w-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(20,20,20,1)] flex min-h-[581px] w-[1085px] max-w-full mt-[88px] rounded-[55px] max-md:mt-10" />
    </section>
  );
};
