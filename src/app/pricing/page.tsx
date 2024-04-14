import { Banner, PricingPrice } from "@/components";
import PricingHeader from "@/components/PricingHeader";
import React from "react";

const Home = () => {
  return (
    <div className="pt-[72px]">
      <PricingHeader />
      <PricingPrice />
      <Banner />
    </div>
  );
};

export default Home;
