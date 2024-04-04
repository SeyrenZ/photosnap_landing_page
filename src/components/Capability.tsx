import React from "react";
import { EmbedProp, NoLimitProp, ResponsiveProp } from "./svgs";

const Capability = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full max-w-[1440px] px-[165px] py-[120px] mx-auto bg-white flex items-center justify-center">
        <div className="flex items-center justify-center lg:flex-row flex-col gap-x-[30px] gap-y-16">
          <div className="lg:w-[350px] md:w-[457px] w-[310px] h-[236px] flex flex-col items-center gap-y-12">
            <div className="flex items-center justify-center h-[71px]">
              <ResponsiveProp />
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <div className="text-lg font-bold">100% Responsive</div>
              <div className="text-sm leading-[25px] text-center">
                No matter which the device you’re on, our site is
                <br className="lg:block hidden" /> fully responsive and stories
                look beautiful on any
                <br className="lg:block hidden" /> screen.
              </div>
            </div>
          </div>
          <div className="lg:w-[350px] md:w-[457px] w-[310px] h-[236px] flex flex-col items-center gap-y-12">
            <div className="flex items-center justify-center h-[71px]">
              <NoLimitProp />
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <div className="text-lg font-bold">No Photo Upload Limit</div>
              <div className="text-sm leading-[25px] text-center">
                Our tool has no limits on uploads or bandwidth.
                <br className="lg:block hidden" /> Freely upload in bulk and
                share all of your stories
                <br className="lg:block hidden" /> in one go.
              </div>
            </div>
          </div>
          <div className="lg:w-[350px] md:w-[457px] w-[310px] h-[236px] flex flex-col items-center gap-y-12">
            <div className="flex items-center justify-center h-[71px]">
              <EmbedProp />
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <div className="text-lg font-bold">Available to Embed</div>
              <div className="text-sm leading-[25px] text-center">
                Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
                videos, Google Maps, and more.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capability;
