import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiCheck } from "react-icons/bi";

type ImageProps = {
  src: string;
  alt?: string;
};

type PricingPlan = {
  icon: ImageProps;
  planName: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  pricingPlans: PricingPlan[];
};

export type Pricing11Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Pricing11 = (props: Pricing11Props) => {
  const { tagline, heading, description, pricingPlans } = {
    ...Pricing11Defaults,
    ...props,
  };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#0D0D0D]">
      <div className="container max-w-xl">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4 text-[#AAA]">{tagline}</p>
          <h2 className="mb-5 text-white text-6xl font-medium leading-tight tracking-[-2.5px] md:mb-6 md:text-9xl lg:text-10xl max-md:text-[32px] max-md:leading-[40px] max-md:tracking-[-1px]">
            {heading}
          </h2>
          <p className="text-[#AAA] text-lg font-normal leading-[31px] opacity-80 md:text-md max-md:text-base max-md:leading-[24px]">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {pricingPlans.map((plan, index) => (
            <PricingPlan key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingPlan = ({ plan }: { plan: PricingPlan }) => (
  <div className="flex h-full flex-col justify-between border border-[#333] bg-[#130D0C] px-6 py-8 md:p-8 rounded-lg">
    <div>
      <div className="rb-4 mb-4 flex flex-col items-end justify-end">
        <img src={plan.icon.src} alt={plan.icon.alt} className="size-12 brightness-0 invert" />
      </div>
      <h3 className="text-md font-bold leading-[1.4] md:text-xl text-white">{plan.planName}</h3>
      <h4 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl text-white">
        {plan.monthlyPrice}
        <span className="text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl">/mo</span>
      </h4>
      <p className="text-[#AAA]">or {plan.yearlyPrice} yearly</p>
      <div className="my-8 h-px w-full shrink-0 bg-[#333]" />
      <p className="text-white">Includes:</p>
      <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex self-start">
            <div className="mr-4 flex-none self-start">
              <BiCheck className="size-6 text-white" />
            </div>
            <p className="text-[#AAA]">{feature}</p>
          </div>
        ))}
      </div>
    </div>
    <div>
      <button className="w-full text-white text-base font-bold leading-[1.7] border-[color:var(--Linear,#FF5552)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] backdrop-blur-[6px] min-h-[58px] gap-3 overflow-hidden px-7 py-4 rounded-[100px] border-[1.5px] border-solid max-md:px-5 max-md:min-h-[50px] hover:bg-[rgba(33,33,43,0.80)] transition-colors">
        {plan.button.title}
      </button>
    </div>
  </div>
);

export const Pricing11Defaults: Props = {
  tagline: "Pricing",
  heading: "Choose Your Plan",
  description: "Select the perfect plan that fits your needs and budget.",
  pricingPlans: [
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Basic plan icon",
      },
      planName: "Basic plan",
      monthlyPrice: "$19",
      yearlyPrice: "$199",
      features: ["AI Financial Analysis", "Monthly Reports", "Email Support"],
      button: { title: "Get started" },
    },
    {
      icon: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Business plan icon",
      },
      planName: "Business plan",
      monthlyPrice: "$29",
      yearlyPrice: "$299",
      features: [
        "Advanced AI Insights",
        "Real-time Analytics",
        "Priority Support",
        "Custom Integrations",
        "Team Collaboration",
      ],
      button: { title: "Get started" },
    },
  ],
};