import React from 'react';
interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  className = ""
}) => {
  return <article className={`items-center border-[color:var(--stroke-15-card,rgba(255,255,255,0.40))] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] backdrop-blur-[50px] bg-[rgba(116,116,116,0.07)] flex min-w-60 min-h-[580px] flex-col overflow-hidden pt-[333px] pb-8 rounded-[32px] border-[1.5px] border-solid max-md:pt-[100px] max-md:min-h-[400px] ${className}`}>
      <div className="flex max-w-full flex-col items-stretch justify-center px-14 max-md:px-6">
        <div className="w-full">
          <div className="flex w-full flex-col items-stretch">
            <div className="w-full">
              <h3 className="text-white text-2xl font-medium leading-[1.4] tracking-[-0.5px] max-md:text-xl">
                {title}
              </h3>
              <div className="flex w-full items-center gap-2 text-lg text-[#f8f8f8] font-normal leading-[31px] mt-2 max-md:text-base">
                <p className="opacity-80">
                  {description}
                </p>
              </div>
            </div>
            <button className="text-white border border-[color:var(--stroke-25-button,rgba(255,255,255,0.40))] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] backdrop-blur-[50px] gap-2.5 text-base font-bold text-center mt-8 px-8 py-3 rounded-[32px] border-solid max-md:px-5 max-md:text-sm hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </article>;
};
export const FeaturesSection: React.FC = () => {
  return <section className="w-full max-w-[1200px] mt-[134px] pb-[370px] px-4 max-md:mt-10 max-md:pb-[100px] max-md:px-2">
      <div className="flex flex-col items-stretch">
        <header className="flex w-full max-w-[911px] mx-auto flex-col items-center text-center">
          <h2 className="text-white text-6xl font-medium leading-[72px] tracking-[-1.5px] max-md:text-[32px] max-md:leading-[40px] max-md:tracking-[-1px]">
            Explore the Robust Features of
            <br />
            Our AI Finance Platform
          </h2>
          <p className="text-[#AAA] text-lg font-normal leading-[31px] opacity-80 w-full max-w-[633px] mt-6 max-md:text-base max-md:leading-[24px]">
            Discover the power of AI-driven financial solutions for smarter,
            faster, and more secure financial decision-making
          </p>
        </header>
        <div className="w-full mt-20 max-md:mt-10">
          <div className="flex min-h-[580px] w-full gap-6 max-md:hidden" />
          <div className="flex w-full items-center gap-6 flex-wrap mt-6 max-md:flex-col max-md:gap-4">
            <FeatureCard title="Risk Management" description="Utilize AI-powered tools to assess and manage financial risks, offering strategies to mitigate potential losses and protect your investments." className="grow shrink w-full max-w-[648px] max-md:w-full" />
            <FeatureCard title="Real-Time Market Analysis" description="Access up-to-the-minute market data and analysis to make informed investment decisions." className="grow shrink w-full max-w-[352px] max-md:w-full" />
          </div>
        </div>
      </div>
      <div className="flex flex-col relative z-10 min-h-[1007px] mt-[-1236px] mb-[-74px] w-full overflow-hidden pt-[784px] pb-[141px] px-20 max-md:mt-[-200px] max-md:mb-2.5 max-md:px-5 max-md:py-[100px] max-md:min-h-[400px]">
        
        <div className="relative bg-blend-luminosity backdrop-blur-[9.333333969116211px] bg-[rgba(18,18,18,0.50)] flex w-[110px] max-w-full flex-col items-stretch justify-center -mb-7 p-1 rounded-[23.333px] max-md:mb-2.5 max-md:w-[80px]">
          <div className="border-[color:var(--stroke-25-button,rgba(255,255,255,0.40))] shadow-[0px_0px_9.333px_0px_rgba(248,248,248,0.25)_inset,0px_37.333px_28px_-18.667px_rgba(0,0,0,0.40)] backdrop-blur-[7.000000476837158px] bg-[rgba(248,248,248,0.05)] flex shrink-0 h-[74px] rounded-[18.667px] border-[1.75px] border-solid max-md:h-[50px]" />
        </div>
      </div>
    </section>;
};