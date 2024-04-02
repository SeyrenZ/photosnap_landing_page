import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowBlackProp, ArrowWhiteProp } from "./svgs";

const HomeContent1 = () => {
  return (
    <div className="w-full md:h-[650px] h-auto max-auto">
      <div className="w-full h-full max-w-[1440px] mx-auto flex md:flex-row flex-col items-center">
        <div className="w-full max-w-[830px] md:min-h-[650px] min-h-[294px] bg-beautifulStories bg-cover bg-center" />
        <div className="w-full lg:max-w-[610px] md:min-w-[495px] h-full md:p-0 px-[33px] py-20 flex items-center justify-center bg-white">
          <div className="flex flex-col items-start gap-y-5">
            <div className="md:text-[40px] text-[32px] md:leading-[48px] leading-[40px] text-black font-bold tracking-widest">
              BEAUTIFUL
              <br />
              STORIES
              <br />
              EVERYTIME
            </div>
            <div className="md:text-md md:leading-normal text-[15px] leading-[25px] text-zinc-400">
              We provide design templates to ensure your
              <br className="block md:hidden" /> stories
              <br className="md:block hidden" /> look terrific. Easily add
              photos, text,
              <br className="block md:hidden" /> embed maps and
              <br className="md:block hidden" />
              media from other networks.
              <br className="block md:hidden" /> Then share your story with
              <br className="md:block hidden" /> everyone.
            </div>
            <Link
              href="#"
              className="mt-8 text-xs text-black font-semibold tracking-widest hover:underline flex items-center gap-x-5"
            >
              VIEW THE STORIES
              <ArrowBlackProp />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent1;
