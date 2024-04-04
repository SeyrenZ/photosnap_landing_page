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
  const HoverIcon = ({
    Icon,
    HoverIcon,
    link,
  }: {
    Icon: React.ElementType;
    HoverIcon: React.ElementType;
    link: string;
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <Link
        href={link}
        target="_blank"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? <HoverIcon /> : <Icon />}
      </Link>
    );
  };
  return (
    <footer className="w-full h-auto bg-black">
      <div className="w-full max-w-[1440px] mx-auto px-[171px] py-20">
        <div className="w-[170px] h-[122px] flex flex-col items-start justify-between">
          <LogoWhiteProp />
          <div className="flex items-center justify-center gap-x-3">
            <HoverIcon
              Icon={FacebookWhiteProp}
              HoverIcon={FacebookProp}
              link=""
            />
            <HoverIcon
              Icon={YoutubeWhiteProp}
              HoverIcon={YoutubeProp}
              link=""
            />
            <HoverIcon
              Icon={TwitterWhiteProp}
              HoverIcon={TwitterProp}
              link=""
            />
            <HoverIcon
              Icon={PinterestWhiteProp}
              HoverIcon={PinterestProp}
              link=""
            />
            <HoverIcon
              Icon={InstagramWhiteProp}
              HoverIcon={InstagramProp}
              link=""
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
