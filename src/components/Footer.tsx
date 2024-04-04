"use client";
import React, { useState } from "react";
import {
  FacebookProp,
  FacebookWhiteProp,
  InstagramProp,
  InstagramWhiteProp,
  LogoProp,
  LogoWhiteProp,
  PinterestProp,
  PinterestWhiteProp,
  TwitterProp,
  TwitterWhiteProp,
  YoutubeProp,
  YoutubeWhiteProp,
} from "./svgs";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full h-auto bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-[171px] py-20">
        <div className="w-[170px] h-[122px] flex flex-col items-start relative">
          <LogoWhiteProp />
          <div className="absolute flex items-center justify-center gap-x-3 bottom-0 z-10">
            <Link href="#">
              <FacebookWhiteProp className="opacity-100 hover:opacity-0 transition ease-in-out duration-300" />
            </Link>
            <Link href="#">
              <YoutubeWhiteProp className="opacity-100 hover:opacity-0 transition ease-in-out duration-300" />
            </Link>
            <Link href="#">
              <TwitterWhiteProp className="opacity-100 hover:opacity-0 transition ease-in-out duration-300" />
            </Link>
            <Link href="#">
              <PinterestWhiteProp className="opacity-100 hover:opacity-0 transition ease-in-out duration-300" />
            </Link>
            <Link href="#">
              <InstagramWhiteProp className="opacity-100 hover:opacity-0 transition ease-in-out duration-300" />
            </Link>
          </div>
          <div className="absolute flex items-center justify-center gap-x-3 bottom-0 z-0">
            <FacebookProp />
            <YoutubeProp />
            <TwitterProp />
            <PinterestProp />
            <InstagramProp />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
