
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-[1200px] mt-[134px] px-4 max-md:mt-10 max-md:px-2">
      <div className="w-full overflow-hidden flex flex-col justify-start items-center gap-10">
        <div className="flex flex-col justify-start items-start gap-12">
          <div className="w-full max-w-[1200px] justify-between items-start flex max-md:flex-col max-md:gap-8">
            <div className="w-[352px] max-md:w-full flex flex-col justify-start items-start gap-8">
              <div className="justify-start items-center gap-3 flex">
                <div className="w-10 h-10 relative bg-gradient-to-r from-[#FF5552] to-[#F62623] overflow-hidden rounded-lg">
                  <div className="w-6 h-6 left-2 top-2 absolute overflow-hidden">
                    <div className="w-6 h-[19.50px] left-0 top-[2.62px] absolute bg-white"></div>
                  </div>
                </div>
                <div className="w-[115px] h-5 bg-white"></div>
              </div>
              <div className="w-[352px] max-md:w-full opacity-80 text-[#AAA] text-lg font-normal leading-[30.6px]">
                Discover the future of music production with SonifyAI. Effortlessly create, edit, and perfect your tracks.
              </div>
              <div className="justify-start items-start gap-6 flex">
                <Facebook className="w-5 h-5 text-white" />
                <Instagram className="w-5 h-5 text-white" />
                <Twitter className="w-5 h-5 text-white" />
                <Linkedin className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="w-40 flex flex-col justify-start items-start gap-9">
              <div className="text-white text-base font-bold leading-[27.2px]">Menu</div>
              <div className="flex flex-col justify-start items-start gap-6">
                <div className="opacity-80 text-[#AAA] text-base font-normal leading-[27.2px]">Home</div>
                <div className="opacity-80 text-[#AAA] text-base font-normal leading-[27.2px]">Features</div>
                <div className="opacity-80 text-[#AAA] text-base font-normal leading-[27.2px]">Pricing</div>
                <div className="opacity-80 text-[#AAA] text-base font-normal leading-[27.2px]">Contact Us</div>
              </div>
            </div>
            <div className="w-40 h-[250px] flex flex-col justify-start items-start gap-9">
              <div className="text-white text-base font-bold leading-[27.2px]">Info</div>
              <div className="flex flex-col justify-start items-start gap-6">
                <div className="opacity-80 text-[#AAA] text-base font-normal leading-[27.2px]">Terms</div>
                <div className="opacity-80 text-[#AAA] text-base font-normal leading-[27.2px]">Privacy Policy</div>
                <div className="opacity-80 text-[#AAA] text-base font-normal leading-[27.2px]">Support</div>
              </div>
            </div>
            <div className="w-40 h-[250px] flex flex-col justify-start items-start gap-9">
              <div className="text-white text-base font-bold leading-[27.2px]">Resources</div>
              <div className="flex flex-col justify-start items-start gap-6">
                <div className="opacity-80 text-[#AAA] text-base font-normal leading-[27.2px]">Blogs</div>
                <div className="opacity-80 text-[#AAA] text-base font-normal leading-[27.2px]">Testimonials</div>
                <div className="opacity-80 text-[#AAA] text-base font-normal leading-[27.2px]">Brand Guide</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1200px] h-[46px] py-3 justify-start items-start flex">
          <div className="justify-start items-start gap-7 flex">
            <div className="opacity-80 text-[#AAA] text-base font-normal leading-[27.2px]">
              Copyright © 2024 Webfluin. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
