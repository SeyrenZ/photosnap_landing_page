"use client";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";

const PricingPrice = () => {
  const [isYearly, setIsYearly] = useState(true);
  const handlePriceChange = () => {
    setIsYearly(!isYearly);
  };
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto px-[165px] py-28 max-w-[1440px] mx-auto bg-white flex flex-col items-center gap-y-20">
        <div className="flex flex-col items-center">
          <div className="w-[255px] h-auto flex items-center justify-around">
            <div
              className={`text-lg font-bold text-black ${
                isYearly ? "opacity-100" : "opacity-50"
              }`}
            >
              Monthly
            </div>
            <Switch onClick={handlePriceChange} />
            <div
              className={`text-lg font-bold text-black ${
                isYearly ? "opacity-50" : "opacity-100"
              }`}
            >
              Yearly
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-[30px]">
          <div className="w-[350px] h-[407px] py-12 px-9 bg-zinc-100 transition ease-in-out duration-300 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center gap-y-[18px]">
              <div className="text-2xl font-bold text-black">Basic</div>
              <div className="text-[15px] leading-[25px] font-medium text-zinc-500 text-center">
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[40px] leading-[48px] font-bold text-black">
                $19.00
              </div>
              <div className="text-[15px] leading-[25px] font-medium text-zinc-500">
                per month
              </div>
            </div>
            <button className="w-full h-fit bg-black hover:bg-zinc-300 py-3 text-xs text-white hover:text-black font-bold tracking-widest transition ease-in-out duration-300">
              PICK PLAN
            </button>
          </div>
          <div className="w-[350px] h-[470px] py-[80px] px-9 bg-black transition ease-in-out duration-300 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center gap-y-[18px]">
              <div className="text-2xl font-bold text-white">Pro</div>
              <div className="text-[15px] leading-[25px] font-medium text-zinc-500 text-center">
                More advanced features available. Recommended for photography
                veterans and professionals.
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[40px] leading-[48px] font-bold text-white">
                $39.00
              </div>
              <div className="text-[15px] leading-[25px] font-medium text-zinc-500">
                per month
              </div>
            </div>
            <button className="w-full h-fit bg-white hover:bg-zinc-300 py-3 text-xs text-black font-bold tracking-widest transition ease-in-out duration-300">
              PICK PLAN
            </button>
          </div>
          <div className="w-[350px] h-[407px] py-12 px-9 bg-zinc-100 transition ease-in-out duration-300 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center gap-y-[18px]">
              <div className="text-2xl font-bold text-black">Business</div>
              <div className="text-[15px] leading-[25px] font-medium text-zinc-500 text-center">
                Additional features available such as more detailed metrics.
                Recommended for business owners.
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[40px] leading-[48px] font-bold text-black">
                $99.00
              </div>
              <div className="text-[15px] leading-[25px] font-medium text-zinc-500">
                per month
              </div>
            </div>
            <button className="w-full h-fit bg-black hover:bg-zinc-300 py-3 text-xs text-white hover:text-black font-bold tracking-widest transition ease-in-out duration-300">
              PICK PLAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPrice;
