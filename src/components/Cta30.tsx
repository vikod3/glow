"use client";

import { useState } from "react";
import { Button, Input } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { motion } from "framer-motion";

type Props = {
  heading: string;
  description: string;
  inputPlaceholder?: string;
  button: ButtonProps;
  termsAndConditions: string;
  video: string;
  videoType: string;
};

export type Cta30Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Cta30 = (props: Cta30Props) => {
  const { heading, description, inputPlaceholder, button, termsAndConditions, video, videoType } = {
    ...Cta30Defaults,
    ...props,
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const [emailInput, setEmailInput] = useState<string>("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitting email:", emailInput);
    
    try {
      const response = await fetch("https://hook.eu2.make.com/rrh11ho4rdujmyqx4spfu9oybiq2a4vb", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${encodeURIComponent(emailInput)}`,
      });
      console.log("Request sent");
      setEmailInput(""); // Clear form on success
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <motion.section 
      id="relume" 
      className="relative w-full py-16 md:py-24 lg:py-28 h-[800px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={itemVariants}
    >
      <motion.div className="container relative z-10 max-w-lg text-center px-[5%]" variants={itemVariants}>
        <h2 className="mb-5 text-white text-6xl font-medium leading-tight tracking-[-2.5px] md:mb-6 md:text-9xl lg:text-10xl max-md:text-[32px] max-md:leading-[40px] max-md:tracking-[-1px]">
          {heading}
        </h2>
        <p className="text-[#AAA] text-lg font-normal leading-[31px] opacity-80 md:text-md max-md:text-base max-md:leading-[24px]">{description}</p>
        <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
          <form
            className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
            onSubmit={handleSubmit}
          >
            <Input
              id="email"
              type="email"
              placeholder={inputPlaceholder}
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="bg-[rgba(33,33,43,0.60)] border-[#333] text-white placeholder:text-[#AAA]"
            />
            <button 
              type="submit"
              className="text-white text-base font-bold leading-[1.7] border-[color:var(--Linear,#FF5552)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] backdrop-blur-[6px] min-h-[58px] gap-3 overflow-hidden px-7 py-4 rounded-[100px] border-[1.5px] border-solid max-md:px-5 max-md:min-h-[50px] hover:bg-[rgba(33,33,43,0.80)] transition-colors items-center justify-center"
            >
              {button.title}
            </button>
          </form>
          <div dangerouslySetInnerHTML={{ __html: termsAndConditions }} />
        </div>
      </motion.div>
      <div className="absolute inset-0 z-0">
        <video className="absolute inset-0 aspect-video size-full object-cover" autoPlay loop muted>
          <source src={video} type={videoType} />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </motion.section>
  );
};

export const Cta30Defaults: Props = {
  heading: "Ready to Get Started?",
  description:
    "Join thousands of users who are already transforming their financial decisions with AI-powered insights.",
  inputPlaceholder: "Enter your email",
  button: {
    title: "Sign up",
    variant: "primary",
    size: "sm",
  },
  termsAndConditions: `
    <p class='text-xs text-[#AAA]'>
      By clicking Sign Up you're confirming that you agree with our
      <a href='#' class='underline text-white hover:text-[#AAA] transition-colors'>Terms and Conditions</a>.
    </p>
    `,
  video: "https://res.cloudinary.com/dqd4dvem7/video/upload/v1754216466/portal_h7fmjl.mp4",
  videoType: "video/mp4",
};