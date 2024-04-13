import Link from "next/link";
import React from "react";
import { ArrowWhiteProp } from "./svgs";

const StoriesHeader = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto  max-w-[1440px] mx-auto flex flex-col">
        <div className="w-full sm:h-[650px] h-[317px] lg:px-[112px] px-[39px] bg-StoriesBackground bg-cover bg-no-repeat bg-center flex item-center">
          <div
            className="w-full max-w-[380px] sm:flex hidden flex-col items-start justify-center gap-y-5 "
            data-aos="fade-right"
          >
            <div className="text-sm font-bold text-white tracking-widest">{`LAST MONTH'S FEATURED STORY`}</div>
            <div className="text-[40px] leading-[48px] text-white font-bold tracking-widest">
              HAZY FULL
              <br /> MOON OF
              <br />
              APPALACHIA
            </div>
            <div className="flex gap-x-3 text-sm text-zinc-400">
              <div>March 2nd 2020</div>
              <span className="text-white">by John Appleseed</span>
            </div>
            <div className="text-sm text-zinc-400">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged
            </div>
            <Link
              href="#"
              className="mt-2 w-auto text-xs text-white font-semibold tracking-widest flex items-center justify-between gap-x-4 hover-link"
            >
              <span className="link link-underline link-underline-white">
                READ STORIES
              </span>
              <ArrowWhiteProp />
            </Link>
          </div>
        </div>
        <div className="w-full h-[495px] px-[29px] bg-black flex sm:hidden flex-col items-start justify-center gap-y-5 ">
          <div className="sm:text-sm text-xs font-bold text-white tracking-widest">{`LAST MONTH'S FEATURED STORY`}</div>
          <div className="sm:text-[40px] sm:leading-[48px] text-[32px] leading-[40px] text-white font-bold tracking-widest">
            HAZY FULL
            <br /> MOON OF
            <br />
            APPALACHIA
          </div>
          <div className="flex gap-x-3 sm:text-sm text-[13px] text-zinc-400">
            <div>March 2nd 2020</div>
            <span className="text-white">by John Appleseed</span>
          </div>
          <div className="text-sm text-zinc-400">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged
          </div>
          <Link
            href="#"
            className="mt-2 w-auto text-xs text-white font-semibold tracking-widest flex items-center justify-between gap-x-4 hover-link"
          >
            <span className="link link-underline link-underline-white">
              READ STORIES
            </span>
            <ArrowWhiteProp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoriesHeader;
