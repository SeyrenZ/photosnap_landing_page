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
      <div className="w-full h-auto sm:py-[120px] py-[64px] max-w-[1440px] mx-auto bg-white flex flex-col items-center gap-y-20">
        <div className="flex flex-col items-center" data-aos="fade-down">
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
        <div
          className="sm:px-10 flex lg:flex-row flex-col items-center justify-center gap-x-[30px] lg:gap-y-0 gap-y-6"
          data-aos="zoom-out"
        >
          <div className="w-full lg:max-w-[350px] sm:max-w-[689px] max-w-[320px] lg:h-[407px] sm:h-[270px] h-[407px] lg:py-12 lg:px-9 sm:p-10 pt-14 pb-10 px-9 bg-zinc-100 transition ease-in-out duration-300 flex lg:flex-col sm:flex-row flex-col lg:items-center sm:items-start items-center justify-between">
            <div className="lg:w-auto w-full max-w-[270px] flex flex-col lg:items-center sm:items-start items-center gap-y-[18px]">
              <div className="text-2xl font-bold text-black">Basic</div>
              <div className="text-[15px] leading-[25px] font-medium text-zinc-500 lg:text-center sm:text-left text-center">
                Includes basic usage of our platform. Recommended for new and
                aspiring photographers.
              </div>
              <button className="w-full h-fit bg-black hover:bg-zinc-300 py-3 text-xs text-white hover:text-black font-bold tracking-widest transition ease-in-out duration-300 sm:block lg:hidden hidden">
                PICK PLAN
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[40px] leading-[48px] font-bold text-black">
                {isYearly ? "$19.00" : "$190.00"}
              </div>
              <div className="text-[15px] leading-[25px] font-medium text-zinc-500">
                {isYearly ? "per month" : "per year"}
              </div>
            </div>
            <button className="w-full h-fit bg-black hover:bg-zinc-300 py-3 text-xs text-white hover:text-black font-bold tracking-widest transition ease-in-out duration-300 lg:block sm:hidden">
              PICK PLAN
            </button>
          </div>
          <div className="w-full lg:max-w-[350px] sm:max-w-[689px] max-w-[320px] lg:h-[470px] sm:h-[270px] h-[407px] lg:py-12 lg:px-9 sm:p-10 pt-14 pb-10 px-9 bg-black transition ease-in-out duration-300 flex lg:flex-col sm:flex-row flex-col lg:items-center sm:items-start items-center justify-between">
            <div className="lg:w-auto w-full max-w-[270px] flex flex-col lg:items-center sm:items-start items-center gap-y-[18px]">
              <div className="text-2xl font-bold text-white">Pro</div>
              <div className="text-[15px] leading-[25px] font-medium text-zinc-500 lg:text-center sm:text-left text-center">
                More advanced features available. Recommended for photography
                veterans and professionals.
              </div>
              <button className="w-full h-fit bg-white hover:bg-zinc-300 py-3 text-xs text-black font-bold tracking-widest transition ease-in-out duration-300 sm:block lg:hidden hidden">
                PICK PLAN
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[40px] leading-[48px] font-bold text-white">
                {isYearly ? "$39.00" : "$390.00"}
              </div>
              <div className="text-[15px] leading-[25px] font-medium text-zinc-500">
                {isYearly ? "per month" : "per year"}
              </div>
            </div>
            <button className="w-full h-fit bg-white hover:bg-zinc-300 py-3 text-xs text-black font-bold tracking-widest transition ease-in-out duration-300 lg:block sm:hidden">
              PICK PLAN
            </button>
          </div>
          <div className="w-full lg:max-w-[350px] sm:max-w-[689px] max-w-[320px] lg:h-[407px] sm:h-[270px] h-[407px] lg:py-12 lg:px-9 sm:p-10 pt-14 pb-10 px-9 bg-zinc-100 transition ease-in-out duration-300 flex lg:flex-col sm:flex-row flex-col lg:items-center sm:items-start items-center justify-between">
            <div className="lg:w-auto w-full max-w-[270px] flex flex-col lg:items-center sm:items-start items-center gap-y-[18px]">
              <div className="text-2xl font-bold text-black">Business</div>
              <div className="text-[15px] leading-[25px] font-medium text-zinc-500 lg:text-center sm:text-left text-center">
                Additional features available such as more detailed metrics.
                Recommended for business owners.
              </div>
              <button className="w-full h-fit bg-black hover:bg-zinc-300 py-3 text-xs text-white hover:text-black font-bold tracking-widest transition ease-in-out duration-300 sm:block lg:hidden hidden">
                PICK PLAN
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[40px] leading-[48px] font-bold text-black">
                {isYearly ? "$99.00" : "$990.00"}
              </div>
              <div className="text-[15px] leading-[25px] font-medium text-zinc-500">
                {isYearly ? "per month" : "per year"}
              </div>
            </div>
            <button className="w-full h-fit bg-black hover:bg-zinc-300 py-3 text-xs text-white hover:text-black font-bold tracking-widest transition ease-in-out duration-300 lg:block sm:hidden">
              PICK PLAN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPrice;
