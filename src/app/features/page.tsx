"use client";
import { FeaturesBanner, FeaturesContent, FeaturesHeader } from "@/components";

import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Page = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="pt-[72px]">
      <FeaturesHeader />
      <FeaturesContent />
      <FeaturesBanner />
    </div>
  );
};

export default Page;
