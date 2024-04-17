import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowWhiteProp } from "../svgs";

const FeaturesHeader = () => {
  return (
    <div className="w-full md:h-[490px] h-auto">
      <div className="w-full h-full max-w-[1440px] mx-auto flex md:flex-row flex-col items-center">
        <div className="w-full lg:max-w-[610px] md:min-w-[495px] h-full md:p-0 px-[33px] py-20 flex items-center justify-center bg-black relative">
          <div className="absolute w-1.5 h-[144px] bg-white left-0 bg-gradient-to-t from-[#FFC593] via-[#BC7198] to-[#5A77FF] sm:block hidden" />
          <div className="absolute w-32 h-1.5 bg-white top-0 left-8 bg-gradient-to-r from-[#FFC593] via-[#BC7198] to-[#5A77FF] block sm:hidden" />
          <div
            className="flex flex-col items-start gap-y-5"
            data-aos="fade-right"
          >
            <div className="md:text-[40px] text-[32px] md:leading-[48px] leading-[40px] text-white font-bold tracking-widest">
              FEATURES
            </div>
            <div className="md:text-md md:leading-normal text-[15px] leading-[25px] text-zinc-400">
              We make sure all of our features are designed to be
              <br className="sm:block hidden" /> loved by every aspiring and
              even professional
              <br className="sm:block hidden" /> photograpers who wanted to
              share their stories.
            </div>
          </div>
        </div>
        <div className="w-full max-w-[830px] md:min-h-[490px] min-h-[294px] bg-FeaturesHero bg-cover bg-center md:order-last order-first" />
      </div>
    </div>
  );
};

export default FeaturesHeader;
