"use client";
import React, { useState } from "react";
import {
  ArrowWhiteProp,
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
  type Link = {
    name: string;
    url: string;
  };

  const links: Link[] = [
    { name: "Home", url: "/" },
    { name: "Stories", url: "/stories" },
    { name: "Features", url: "/features" },
    { name: "Pricing", url: "/pricing" },
  ];
  return (
    <footer className="w-full h-auto py-16 bg-black">
      <div className="w-full sm:h-[122px] h-auto lg:px-20 px-[39px] max-w-[1440px] mx-auto flex sm:flex-row flex-col sm:justify-between sm:items-start items-center gap-y-32">
        <div className="w-auto h-full flex sm:flex-row flex-col relative sm:gap-x-[110px] sm:gap-y-0 gap-y-24">
          <div className="w-[170px] h-full flex flex-col sm:items-start items-center">
            <LogoWhiteProp />
            <div className="pt-8 sm:flex lg:hidden hidden items-start justify-between gap-x-5">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  className="text-white text-xs font-semibold tracking-widest uppercase hover:text-zinc-500 transition ease-in-out duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="absolute flex items-center justify-center gap-x-3 sm:bottom-0 bottom-[170px]  z-10">
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
            <div className="absolute flex items-center justify-center gap-x-3 sm:bottom-0 bottom-[170px] z-0">
              <FacebookProp />
              <YoutubeProp />
              <TwitterProp />
              <PinterestProp />
              <InstagramProp />
            </div>
          </div>
          <div className="w-auto h-full lg:flex flex sm:hidden flex-col sm:items-start items-center justify-between sm:gap-y-0 gap-y-5 ">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="text-white text-xs font-semibold tracking-widest uppercase hover:text-zinc-500 transition ease-in-out duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="w-auto h-full flex flex-col sm:items-end items-center justify-between sm:gap-y-0 gap-y-10">
          <Link
            href="#"
            className="text-xs text-white font-semibold tracking-widest flex items-center gap-x-5 hover-link"
          >
            <span className="link link-underline link-underline-white">
              GET AN INVITE
            </span>
            <ArrowWhiteProp />
          </Link>
          <div className="text-zinc-500 text-[15px]">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
