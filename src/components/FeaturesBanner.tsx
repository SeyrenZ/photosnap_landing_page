import Link from "next/link";
import React from "react";
import { ArrowWhiteProp } from "./svgs";

const FeaturesBanner = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-[280px] max-w-[1440px] mx-auto px-[80px] bg-BannerBackground bg-cover bg-no-repeat flex items-center">
        <div className="w-full h-full flex items-center justify-between">
          <div className="w-[400px] text-[40px] leading-[48px] font-bold text-white tracking-widest uppercase">
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
