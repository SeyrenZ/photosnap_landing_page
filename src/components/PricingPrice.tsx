"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
const PricingPrice = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto px-[165px] py-28 max-w-[1440px] mx-auto bg-white flex flex-col items-center gap-y-20">
        <div className="flex flex-col items-center">
          <div className="w-[255px] h-auto flex items-center justify-around">
            <div>Monthly</div>
            <Switch className="scale-[1.45]" />
            <div>Yearly</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPrice;
