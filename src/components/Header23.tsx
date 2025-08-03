import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Props = {
  heading: string;
  description: string;
  buttons: Array<{
    title: string;
    variant?: "default" | "secondary" | "outline";
  }>;
};

export type Header23Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header23 = (props: Header23Props) => {
  const { heading, description, buttons } = {
    ...Header23Defaults,
    ...props,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.section 
      id="relume" 
      className="px-[5%] py-16 md:py-24 lg:py-28 bg-background min-h-screen flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="mx-auto w-full max-w-lg text-center">
          <motion.h1 
            className="mb-5 text-6xl font-medium md:mb-6 md:text-9xl lg:text-10xl text-white tracking-[-2.5px] leading-tight max-md:text-[48px] max-md:leading-[56px] max-md:tracking-[-1.5px]"
            variants={itemVariants}
          >
            {heading}
          </motion.h1>
          <motion.p 
            className="md:text-lg text-[#AAA] opacity-80 leading-[31px] max-md:text-base max-md:leading-[24px]"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.div 
            className="mt-6 flex items-center justify-center gap-x-4 md:mt-8"
            variants={itemVariants}
          >
            {buttons.map((button, index) => (
              <Button 
                key={index} 
                variant={button.variant || "default"}
                className={`
                  ${button.variant === "default" || !button.variant 
                    ? "text-white border-[color:var(--Linear,#FF5552)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] backdrop-blur-[6px] min-h-[58px] gap-3 px-7 py-4 rounded-[100px] border-[1.5px] border-solid hover:bg-[rgba(33,33,43,0.80)] transition-colors" 
                    : "text-white border-white/20 hover:bg-white/10 min-h-[58px] px-7 py-4 rounded-[100px] transition-colors"
                  }
                `}
              >
                {button.title}
              </Button>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export const Header23Defaults: Props = {
  heading: "AI Solutions for Better Finance",
  description:
    "Discover the power of AI-driven financial solutions for smarter, faster, and more secure financial decision-making",
  buttons: [{ title: "Get Started" }, { title: "Learn More", variant: "secondary" }],
};