import React from "react";
import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
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
    <section className="w-full min-h-screen bg-[#0D0D0D] flex items-center justify-center px-[5%] py-16 md:py-24 lg:py-28 relative overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover mix-blend-color-dodge"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      >
        <source src="https://res.cloudinary.com/dqd4dvem7/video/upload/v1754216466/portal_h7fmjl.mp4" type="video/mp4" />
      </video>
      <motion.div 
        className="container relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="mx-auto w-full max-w-lg text-center mb-[300px]">
          <motion.h1 
            className="mb-5 text-white text-6xl font-medium leading-tight tracking-[-2.5px] md:mb-6 md:text-9xl lg:text-10xl max-md:text-[32px] max-md:leading-[40px] max-md:tracking-[-1px]"
            variants={itemVariants}
          >
            {heading}
          </motion.h1>
          <motion.p 
            className="text-[#AAA] text-lg font-normal leading-[31px] opacity-80 md:text-md max-md:text-base max-md:leading-[24px]"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.div 
            className="mt-6 flex items-center justify-center gap-x-4 md:mt-8"
            variants={itemVariants}
          >
            {buttons.map((button, index) => (
              <button
                key={index}
                className="text-white text-base font-bold leading-[1.7] border-[color:var(--Linear,#FF5552)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] backdrop-blur-[6px] min-h-[58px] gap-3 overflow-hidden px-7 py-4 rounded-[100px] border-[1.5px] border-solid max-md:px-5 max-md:min-h-[50px] hover:bg-[rgba(33,33,43,0.80)] transition-colors"
              >
                {button.title}
              </button>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export const Header23Defaults: Props = {
  heading: "AI Solutions for Personal and Business Finance",
  description:
    "Discover the power of AI-driven financial solutions for smarter, faster, and more secure financial decision-making",
  buttons: [{ title: "Get Started" }, { title: "Learn More", variant: "secondary" }],
};