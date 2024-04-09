"use client";
import React from "react";
import {
  BoostExposureProp,
  CustomDomainProp,
  DragDropProp,
  EmbedProp,
  NoLimitProp,
  ResponsiveProp,
} from "./svgs";
import CapabilityComponent from "./CapabilityComponent";

const FeaturesContent = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full max-w-[1440px] py-[120px] mx-auto bg-white flex items-center justify-center">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[30px] gap-y-16">
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
          <CapabilityComponent
            icon={<CustomDomainProp />}
            title="Custom Domain"
            desc="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
          />
          <CapabilityComponent
            icon={<BoostExposureProp />}
            title="Boost Your Exposure"
            desc="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
          />
          <CapabilityComponent
            icon={<DragDropProp />}
            title="Drag & Drop Image"
            desc="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to make your life complicated."
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesContent;
