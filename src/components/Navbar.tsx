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
    <div className="w-full h-auto bg-white">
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-6 md:px-[39px] lg:px-[165px] py-7">
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
