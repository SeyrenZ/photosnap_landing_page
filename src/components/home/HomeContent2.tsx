import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowBlackProp, ArrowWhiteProp } from "../svgs";

const HomeContent2 = () => {
  return (
    <div className="w-full md:h-[650px] h-auto ">
      <div className="w-full h-full max-w-[1440px] mx-auto flex md:flex-row flex-col items-center">
        <div className="w-full lg:max-w-[610px] md:min-w-[495px] h-full md:p-0 px-[33px] py-20 flex items-center justify-center bg-white">
          <div
            className="flex flex-col items-start gap-y-5"
            data-aos="fade-right"
          >
            <div className="md:text-[40px] text-[32px] md:leading-[48px] leading-[40px] text-black font-bold tracking-widest">
              DESIGNED FOR
              <br />
              EVERYONE
            </div>
            <div className="md:text-md md:leading-normal text-[15px] leading-[25px] text-zinc-400">
              Photosnap can help you create stories that resonate
              <br className="md:block hidden" /> with your audience. Our tool is
              designed for
              <br className="md:block hidden" /> photographers of all levels,
              brands, businesses you
              <br className="md:block hidden" /> name it.
            </div>
            <Link
              href="#"
              className="mt-8 text-xs text-black font-semibold tracking-widest flex items-center gap-x-5 hover-link"
            >
              <span className="link link-underline link-underline-black">
                VIEW THE STORIES
              </span>
              <ArrowBlackProp />
            </Link>
          </div>
        </div>
        <div className="w-full max-w-[830px] md:min-h-[655px] min-h-[294px] bg-designedForEveryone bg-cover bg-center md:order-last order-first" />
      </div>
    </div>
  );
};

export default HomeContent2;
