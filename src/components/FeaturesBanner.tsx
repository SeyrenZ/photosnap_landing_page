import Link from "next/link";
import React from "react";
import { ArrowWhiteProp } from "./svgs";

const FeaturesBanner = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-[280px] max-w-[1440px] mx-auto lg:px-[80px] sm:px-[39px] px-[33px] bg-BannerBackground bg-cover bg-no-repeat flex items-center">
        <div className="w-full h-full flex sm:flex-row flex-col sm:items-center sm:justify-between items-start justify-center sm:gap-y-0 gap-y-6">
          <div className="w-full max-w-[400px] sm:text-[40px] sm:leading-[48px] text-[32px] leading-[40px] font-bold text-white tracking-widest uppercase">
            WE'RE IN BETA.
            <br />
            GET YOUR INVITE
            <br /> TODAY!
          </div>
          <Link
            href="#"
            className="text-xs text-white font-semibold tracking-widest flex items-center gap-x-5 hover-link"
          >
            <span className="link link-underline link-underline-white">
              GET AN INVITE
            </span>
            <ArrowWhiteProp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;
