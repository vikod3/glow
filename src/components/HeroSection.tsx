
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full max-w-[858px] mt-[88px] px-4 max-md:mt-10 max-md:px-2">
      <div className="w-full">
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="text-white text-center text-[68px] font-medium leading-[78px] tracking-[-2.5px] max-md:text-[32px] max-md:leading-[40px] max-md:tracking-[-1px] max-sm:text-[28px] max-sm:leading-[36px]">
            AI Solutions for Personal and
            <br />
            Business Finance
          </h1>
          <p className="text-[#AAA] text-center text-lg font-normal leading-[31px] opacity-80 w-full max-w-[697px] mt-6 max-md:text-base max-md:leading-[24px] max-md:px-4">
            Discover the power of AI-driven financial solutions for
            smarter, faster, and more secure financial decision-making
          </p>
          <div className="w-full max-w-[182px] text-base font-bold leading-[1.7] mt-6 rounded-[100px]">
            <button 
              className="w-full overflow-hidden rounded-[100px] backdrop-blur-[6px] flex justify-center items-center gap-3 transition-opacity hover:opacity-90"
              style={{
                paddingLeft: '28px',
                paddingRight: '28px',
                paddingTop: '12px',
                paddingBottom: '12px',
                background: 'linear-gradient(90deg, #FF5552 0%, #F62623 100%)',
                boxShadow: '0px 32px 24px -16px rgba(0, 0, 0, 0.40)',
                borderRadius: '100px',
                outline: '1.50px #FF5552 solid',
                outlineOffset: '-1.50px'
              }}
            >
              <div style={{
                color: 'white',
                fontSize: '16px',
                fontFamily: 'Be Vietnam',
                fontWeight: 700,
                lineHeight: '27.20px',
                wordWrap: 'break-word'
              }}>
                Get Started
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(20,20,20,1)] flex min-h-[581px] w-full max-w-[1085px] mt-[88px] rounded-[55px] max-md:mt-10 max-md:min-h-[300px] max-md:rounded-[30px]" />
    </section>
  );
};
