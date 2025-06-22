import React from 'react';

export const CTASection: React.FC = () => {
  return (
    <section className="border-[color:var(--stroke-15-card,rgba(255,255,255,0.40))] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] backdrop-blur-[50px] bg-[rgba(116,116,116,0.07)] w-[1200px] max-w-full overflow-hidden mt-[134px] pl-[60px] pr-4 rounded-[32px] border-[1.5px] border-solid max-md:mt-10 max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="mr-[-108px] self-stretch my-auto max-md:max-w-full max-md:mt-10">
            <div className="w-full max-md:max-w-full">
              <h2 className="text-white text-5xl font-medium leading-[58px] tracking-[-1.5px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
                Unlock Your Image Editing Potential with AI
              </h2>
              <p className="text-[#f8f8f8] text-base font-normal leading-[1.7] opacity-80 mt-4 max-md:max-w-full">
                Start Your Journey with and Revolutionize Your Creative
                Process
              </p>
            </div>
            <div className="w-[182px] max-w-full text-base text-white font-bold leading-[1.7] mt-10 rounded-[100px]">
              <button className="text-white self-stretch border-[color:var(--Linear,#FF5552)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] backdrop-blur-[6px] min-h-[58px] gap-3 overflow-hidden px-7 py-4 rounded-[100px] border-[1.5px] border-solid max-md:px-5 hover:bg-[rgba(33,33,43,0.80)] transition-colors w-full">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/9de6021644f9415b8e6ba1d1ef4607ce/d161b852c3d5e5e0986ff12ae5863ac088519d5d?placeholderIfAbsent=true"
            className="aspect-[1.31] object-contain w-full grow max-md:max-w-full"
            alt="AI Finance Platform Demo"
          />
        </div>
      </div>
    </section>
  );
};
