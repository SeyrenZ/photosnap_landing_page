import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowWhiteProp } from "./svgs";

const Header = () => {
  return (
    <div className="w-full h-auto max-auto">
      <div className="w-full h-[650px] max-w-[1440px] mx-auto flex md:flex-row flex-col items-center">
        <div className="w-full lg:min-w-[610px] md:min-w-[495px] h-full md:p-0 px-[33px] py-20 flex items-center justify-center bg-black">
          <div className="flex flex-col items-start gap-y-5">
            <div className="md:text-[40px] text-[32px] md:leading-[48px] leading-[40px] text-white font-bold tracking-widest">
              CREATE AND
              <br />
              SHARE YOUR
              <br />
              PHOTO STORIES.
            </div>
            <div className="md:text-md md:leading-normal text-[15px] leading-[25px] text-zinc-400">
              Photosnap is a platform for photographers
              <br className="block md:hidden" /> and visual
              <br className="md:block hidden" /> storytellers. We make it easy
              to
              <br className="block md:hidden" /> share photos, tell
              <br className="md:block hidden" /> stories and connect with
              <br className="block md:hidden" />
              others.
            </div>
            <Link
              href="#"
              className="mt-8 text-xs text-white font-semibold tracking-widest hover:underline flex items-center gap-x-5"
            >
              GET AN INVITE
              <ArrowWhiteProp />
            </Link>
          </div>
        </div>
        <div className="w-full max-w-[830px] md:min-h-[650px] min-h-[294px] bg-createShare bg-cover bg-center md:order-last order-first" />
      </div>
    </div>
  );
};

export default Header;
