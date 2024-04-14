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
      </div>
    </div>
  );
};

export default PricingPrice;
