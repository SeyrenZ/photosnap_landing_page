"use client";
import { Banner, PricingInfo, PricingPrice } from "@/components";
import PricingHeader from "@/components/PricingHeader";
import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="pt-[72px]">
      <PricingHeader />
      <PricingPrice />
      <PricingInfo />
      <Banner />
    </div>
  );
};

export default Home;
