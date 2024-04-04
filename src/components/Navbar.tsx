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
    <nav className="w-full h-auto bg-white fixed z-50">
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40 sm:hidden block"
          onClick={handleMenu}
        ></div>
      )}
      <div className="md:hidden block">
        <div
          className={`absolute z-40 w-full h-[253px] px-[33px] bg-white sm:hidden transition duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-[27%]" : "translate-y-[-80%]"
          } flex flex-col items-center justify-center gap-y-5`}
        >
          <div className="flex flex-col items-center  gap-y-[20px] ">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="text-md hover:text-zinc-300 font-extrabold uppercase tracking-widest transition ease-in-out duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="w-full h-[1px] bg-[#979797] " />
          <Link
            href="#"
            className="w-full h-[48px] bg-black hover:bg-zinc-300 text-sm font-semibold text-white hover:text-black tracking-widest flex items-center justify-center transition ease-in-out duration-300"
          >
            GET AN INVITE
          </Link>
        </div>
      </div>
      <div className=" w-full max-w-[1440px] mx-auto px-6 md:px-[39px] lg:px-[165px] py-7 bg-white flex items-center justify-between relative z-50">
        <Link
          href="#"
          className="hover:scale-110 transition ease-in-out duration-300"
        >
          <LogoProp />
        </Link>
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
                className="text-xs hover:text-zinc-300 font-bold uppercase tracking-widest transition ease-in-out duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden sm:block">
          <Link
            href="#"
            className="w-[158px] h-[40px] bg-black hover:bg-zinc-300 text-xs text-white font-semibold tracking-widest hover:text-black flex items-center justify-center transition ease-in-out duration-300"
          >
            GET AN INVITE
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
