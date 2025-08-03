import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { MdAutoAwesome, MdSecurity, MdTrendingUp } from "react-icons/md";

type ImageProps = {
  src: string;
  alt?: string;
};

type SectionProps = {
  image: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

type Props = {
  sections: SectionProps[];
};

export type Layout228Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Layout228 = (props: Layout228Props) => {
  const { sections } = { ...Layout228Defaults, ...props };
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-[#130D0C]">
      <div className="w-full max-w-none mx-auto">
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => (
            <div key={index} className="flex w-full flex-col items-center text-center">
              <div className="rb-5 mb-5 md:mb-6">
                {index === 0 && <MdAutoAwesome className="size-12 text-white" />}
                {index === 1 && <MdSecurity className="size-12 text-white" />}
                {index === 2 && <MdTrendingUp className="size-12 text-white" />}
              </div>
              <h3 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {section.heading}
              </h3>
              <p className="text-[#AAA]">{section.description}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                {section.buttons.map((button, index) => (
                  <button
                    key={index}
                    className="text-white text-base font-bold leading-[1.7] border-[color:var(--Linear,#FF5552)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] backdrop-blur-[6px] min-h-[58px] gap-3 overflow-hidden px-7 py-4 rounded-[100px] border-[1.5px] border-solid max-md:px-5 max-md:min-h-[50px] hover:bg-[rgba(33,33,43,0.80)] transition-colors"
                  >
                    {button.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout228Defaults: Props = {
  sections: [
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 1",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 2",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume logo 3",
      },
      heading: "Medium length section heading goes here",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      buttons: [
        { title: "Button", variant: "secondary" },
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
  ],
};