"use client";
import React from "react";
import { EmbedProp, NoLimitProp, ResponsiveProp } from "../svgs";
import CapabilityComponent from "../CapabilityComponent";

const Capability = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full max-w-[1440px] px-[165px] py-[120px] mx-auto bg-white flex items-center justify-center">
        <div
          className="flex items-center justify-center lg:flex-row flex-col gap-x-[30px] gap-y-16"
          data-aos="fade-up"
        >
          <CapabilityComponent
            icon={<ResponsiveProp />}
            title="100% Responsive"
            desc="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
          />
          <CapabilityComponent
            icon={<NoLimitProp />}
            title="No Photo Upload Limit"
            desc="Our tool has no limits on the number of photos you can upload. We know that your photos are important to you."
          />
          <CapabilityComponent
            icon={<EmbedProp />}
            title="Available to Embed"
            desc="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
          />
        </div>
      </div>
    </div>
  );
};

export default Capability;
