import React from 'react';

interface SpecialFeatureCardProps {
  title: string;
  description: string;
  iconComponent?: React.ReactNode;
}

const SpecialFeatureCard: React.FC<SpecialFeatureCardProps> = ({ title, description, iconComponent }) => {
  return (
    <article className="justify-center items-center border-[color:var(--stroke-15-card,rgba(255,255,255,0.40))] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] backdrop-blur-[50px] self-stretch flex min-w-60 flex-col overflow-hidden grow shrink w-[307px] my-auto px-4 py-9 rounded-[32px] border-[1.5px] border-solid hover:bg-[rgba(116,116,116,0.15)] transition-colors">
      <div className="flex w-80 max-w-full flex-col items-stretch">
        <div className="justify-center items-center border-[color:var(--stroke-15-card,rgba(255,255,255,0.40))] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] backdrop-blur-[50px] bg-[rgba(116,116,116,0.07)] self-center flex min-h-[70px] w-[70px] flex-col overflow-hidden h-[70px] px-[11px] rounded-[32px] border-[1.5px] border-solid">
          {iconComponent || <div className="flex min-h-12 w-full" />}
        </div>
        <h3 className="text-white text-center text-2xl font-medium leading-[1.4] tracking-[-0.5px] mt-3">
          {title}
        </h3>
        <p className="text-[#AAA] text-center text-base font-normal leading-[27px] opacity-80 mt-3">
          {description}
        </p>
      </div>
    </article>
  );
};

export const SpecialFeatures: React.FC = () => {
  const features = [
    {
      title: "Create Inspiring Melodies",
      description: "With the AI Melody Generator, you can generate unique and captivating melodies based on your style."
    },
    {
      title: "Automated Mixing Mastering",
      description: "With the AI Melody Generator, you can generate unique and captivating melodies based on your style."
    },
    {
      title: "Real-Time Collaboration",
      description: "With the AI Melody Generator, you can generate unique and captivating melodies based on your style."
    }
  ];

  return (
    <section className="flex w-[1200px] max-w-full flex-col items-stretch mt-[134px] max-md:mt-10">
      <header className="self-center flex w-[911px] max-w-full flex-col items-center text-center">
        <h2 className="text-white text-6xl font-medium leading-[72px] tracking-[-1.5px] max-md:max-w-full max-md:text-[40px] max-md:leading-[53px]">
          Special Features of Our
          <br />
          AI Image Editor
        </h2>
        <p className="text-[#AAA] text-lg font-normal leading-[31px] opacity-80 w-[633px] mt-6 max-md:max-w-full">
          Discover the future of image production with InnovaAI.
          Effortlessly create, edit, and perfect your tracks.
        </p>
      </header>
      <div className="flex w-full items-center gap-6 flex-wrap mt-20 max-md:max-w-full max-md:mt-10">
        {features.map((feature, index) => (
          <SpecialFeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};
