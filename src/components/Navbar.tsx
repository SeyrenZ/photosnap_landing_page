"use client";
import React, { useState } from "react";
import { CloseProp, LogoProp, MenuProp } from "./svgs";
import Link from "next/link";

const Navbar = () => {
  type Link = {
    name: string;
    url: string;
  };

  const links: Link[] = [
    { name: "Stories", url: "#" },
    { name: "Features", url: "#" },
    { name: "Pricing", url: "#" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-auto fixed">
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-40 z-30"></div>
      )}
      <div className="md:hidden block">
        <div
          className={`absolute z-40 w-full h-[253px] px-[33px] bg-white sm:hidden transition duration-500 ease-in-out ${
            isMenuOpen ? "translate-y-[27%]" : "translate-y-[-80%]"
          } flex flex-col items-center justify-center gap-y-5`}
        >
          <div className="flex flex-col items-center  gap-y-[20px] ">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="text-[15px] font-extrabold uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="w-full h-[1px] bg-[#979797] " />
          <Link
            href="#"
            className="w-full h-[48px] bg-black flex items-center justify-center"
          >
            <div className="text-sm font-semibold text-white tracking-widest">
              GET AN INVITE
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[39px] lg:px-[165px] py-7 bg-white flex items-center justify-between relative z-50">
        <LogoProp />
        <div className="block sm:hidden">
          {isMenuOpen ? (
            <CloseProp onClick={handleMenu} />
          ) : (
            <MenuProp onClick={handleMenu} />
          )}
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center gap-x-[37px]">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="text-xs font-bold uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden sm:block">
          <Link
            href="#"
            className="w-[158px] h-[40px] bg-black flex items-center justify-center"
          >
            <div className="text-xs text-white font-semibold tracking-widest">
              GET AN INVITE
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
