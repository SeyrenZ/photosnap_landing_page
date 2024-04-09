import { FeaturesBanner, FeaturesContent, FeaturesHeader } from "@/components";

import React from "react";

const page = () => {
  return (
    <div className="pt-[72px]">
      <FeaturesHeader />
      <FeaturesContent />
      <FeaturesBanner />
    </div>
  );
};

export default page;
