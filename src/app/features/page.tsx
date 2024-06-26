"use client";
import { Banner, FeaturesContent, FeaturesHeader } from "@/components";

import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="pt-[72px] overflow-hidden">
      <FeaturesHeader />
      <FeaturesContent />
      <Banner />
    </div>
  );
};

export default Home;
