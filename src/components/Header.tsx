import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowWhiteProp } from "./svgs";

const Header = () => {
  return (
    <div className="w-full h-auto max-auto">
      <div className="w-full h-[650px] max-w-[1440px] mx-auto flex items-center">
        <div className="w-full lg:min-w-[610px] md:min-w-[495px] h-full flex items-center justify-center bg-black">
          <div className="flex flex-col items-start gap-y-5">
            <div className="text-[40px] leading-[48px] text-white font-bold tracking-widest">
              CREATE AND
              <br />
              SHARE YOUR
              <br />
              PHOTO STORIES.
            </div>
            <div className="text-zinc-400">
              Photosnap is a platform for photographers and visual
              <br /> storytellers. We make it easy to share photos, tell
              <br /> stories and connect with others.
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
        <div className="w-full max-w-[830px] h-[650px] bg-createShare bg-cover bg-center" />
      </div>
    </div>
  );
};

export default Header;
