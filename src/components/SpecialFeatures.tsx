import React from 'react';
import { Music, Sliders, Users } from 'lucide-react';
interface SpecialFeatureCardProps {
  title: string;
  description: string;
  iconComponent?: React.ReactNode;
}
const SpecialFeatureCard: React.FC<SpecialFeatureCardProps> = ({
  title,
  description,
  iconComponent
}) => {
  return <article className="justify-center items-center border-[color:var(--stroke-15-card,rgba(255,255,255,0.40))] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] backdrop-blur-[50px] flex min-w-60 flex-col overflow-hidden grow shrink w-full max-w-[307px] px-4 py-9 rounded-[32px] border-[1.5px] border-solid hover:bg-[rgba(116,116,116,0.15)] transition-colors">
      <div className="flex w-full max-w-80 flex-col items-stretch">
        <div className="justify-center items-center border-[color:var(--stroke-15-card,rgba(255,255,255,0.40))] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] backdrop-blur-[50px] bg-[rgba(116,116,116,0.07)] self-center flex min-h-[70px] w-[70px] flex-col overflow-hidden h-[70px] px-[11px] rounded-[32px] border-[1.5px] border-solid">
          {iconComponent || <div className="flex min-h-12 w-full" />}
        </div>
        <h3 className="text-white text-center text-2xl font-medium leading-[1.4] tracking-[-0.5px] mt-3 max-md:text-xl">
          {title}
        </h3>
        <p className="text-[#AAA] text-center text-base font-normal leading-[27px] opacity-80 mt-3 max-md:text-sm max-md:leading-[22px]">
          {description}
        </p>
      </div>
    </article>;
};
export const SpecialFeatures: React.FC = () => {
  const features = [{
    title: "Create Inspiring Melodies",
    description: "With the AI Melody Generator, you can generate unique and captivating melodies based on your style.",
    icon: <Music className="w-10 h-10 text-white" />
  }, {
    title: "Automated Mixing Mastering",
    description: "With the AI Melody Generator, you can generate unique and captivating melodies based on your style.",
    icon: <Sliders className="w-10 h-10 text-white" />
  }, {
    title: "Real-Time Collaboration",
    description: "With the AI Melody Generator, you can generate unique and captivating melodies based on your style.",
    icon: <Users className="w-10 h-10 text-white" />
  }];
  return <section className="flex w-full max-w-[1200px] flex-col items-stretch mt-[134px] px-4 max-md:mt-10 max-md:px-2">
      <header className="flex w-full max-w-[911px] mx-auto flex-col items-center text-center">
        <h2 className="text-white text-6xl font-medium leading-[72px] tracking-[-1.5px] max-md:text-[32px] max-md:leading-[40px] max-md:tracking-[-1px]">
          Special Features of Our
          <br />
          AI Image Editor
        </h2>
        <p className="text-[#AAA] text-lg font-normal leading-[31px] opacity-80 w-full max-w-[633px] mt-6 max-md:text-base max-md:leading-[24px]">
          Discover the future of image production with InnovaAI.
          Effortlessly create, edit, and perfect your tracks.
        </p>
      </header>
      <div className="flex w-full items-center gap-6 flex-wrap justify-center mt-20 max-md:mt-10 max-md:flex-col max-md:gap-4">
        {features.map((feature, index) => <SpecialFeatureCard key={index} title={feature.title} description={feature.description} iconComponent={feature.icon} />)}
      </div>
    </section>;
};