import React from "react";
import { CheckProp } from "../svgs";
import {
  PricingBenefitInfo,
  PricingBenefitInfoMobile,
} from "./PricingInfoComponent";

const PricingInfo = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full max-w-[1440px] px-10 sm:pt-10 sm:pb-40 pb-[65px] mx-auto bg-white flex flex-col sm:items-center items-start justify-center gap-y-14 ">
        {/* Desktop & Tablet */}
        <div
          className="text-[40px] leading-[48px] font-bold text-black tracking-widest sm:block hidden"
          data-aos="fade-down"
        >
          COMPARE
        </div>
        <div
          className="w-full max-w-[731px] h-auto sm:flex hidden flex-col items-start gap-y-0"
          data-aos="zoom-out"
        >
          <div className="w-full px-7 pb-5 border-b-[1px] border-black flex items-center justify-between">
            <div className="w-full max-w-[230px] text-xs font-bold text-black tracking-widest">
              THE FEATURES
            </div>
            <div className="w-[66px] text-xs font-bold text-black tracking-widest flex justify-center">
              BASIC
            </div>
            <div className="w-[66px] text-xs font-bold text-black tracking-widest flex justify-center">
              PRO
            </div>
            <div className="w-[66px] text-xs font-bold text-black tracking-widest flex justify-center">
              BUSINESS
            </div>
          </div>
          <PricingBenefitInfo
            title="UNLIMITED STORY POSTING"
            basic={<CheckProp />}
            pro={<CheckProp />}
            business={<CheckProp />}
          />
          <PricingBenefitInfo
            title="UNLIMITED PHOTO UPLOAD"
            basic={<CheckProp />}
            pro={<CheckProp />}
            business={<CheckProp />}
          />
          <PricingBenefitInfo
            title="EMBEDDING CUSTOM CONTENT"
            basic={<CheckProp className="hidden" />}
            pro={<CheckProp />}
            business={<CheckProp />}
          />
          <PricingBenefitInfo
            title="CUSTOMIZE METADATA"
            basic={<CheckProp className="hidden" />}
            pro={<CheckProp />}
            business={<CheckProp />}
          />
          <PricingBenefitInfo
            title="ADVANCED METRICS"
            basic={<CheckProp className="hidden" />}
            pro={<CheckProp className="hidden" />}
            business={<CheckProp />}
          />
          <PricingBenefitInfo
            title="PHOTO DOWNLOADS"
            basic={<CheckProp className="hidden" />}
            pro={<CheckProp className="hidden" />}
            business={<CheckProp />}
          />
          <PricingBenefitInfo
            title="SEARCH ENGINE INDEXING"
            basic={<CheckProp className="hidden" />}
            pro={<CheckProp className="hidden" />}
            business={<CheckProp />}
          />
          <PricingBenefitInfo
            title="CUSTOM ANALYTICS"
            basic={<CheckProp className="hidden" />}
            pro={<CheckProp className="hidden" />}
            business={<CheckProp />}
          />
        </div>
        {/* Mobile */}
        <div
          className="w-full sm:hidden flex flex-col items-start"
          data-aos="zoom-out"
        >
          <div className="w-full text-xs font-bold text-black tracking-widest pb-6 border-b-[2px] border-zinc-600">
            THE FEATURES
          </div>
          <PricingBenefitInfoMobile
            title="UNLIMITED STORY POSTING"
            basic={<CheckProp />}
            pro={<CheckProp />}
            business={<CheckProp />}
          />
          <PricingBenefitInfoMobile
            title="UNLIMITED PHOTO UPLOAD"
            basic={<CheckProp />}
            pro={<CheckProp />}
            business={<CheckProp />}
          />
          <PricingBenefitInfoMobile
            title="EMBEDDING CUSTOM CONTENT"
            basic={<CheckProp className="hidden" />}
            pro={<CheckProp />}
            business={<CheckProp />}
          />
          <PricingBenefitInfoMobile
            title="CUSTOMIZE METADATA"
            basic={<CheckProp className="hidden" />}
            pro={<CheckProp />}
            business={<CheckProp />}
          />
          <PricingBenefitInfoMobile
            title="ADVANCED METRICS"
            basic={<CheckProp className="hidden" />}
            pro={<CheckProp className="hidden" />}
            business={<CheckProp />}
          />
          <PricingBenefitInfoMobile
            title="PHOTO DOWNLOADS"
            basic={<CheckProp className="hidden" />}
            pro={<CheckProp className="hidden" />}
            business={<CheckProp />}
          />
          <PricingBenefitInfoMobile
            title="SEARCH ENGINE INDEXING"
            basic={<CheckProp className="hidden" />}
            pro={<CheckProp className="hidden" />}
            business={<CheckProp />}
          />
          <PricingBenefitInfoMobile
            title="CUSTOM ANALYTICS"
            basic={<CheckProp className="hidden" />}
            pro={<CheckProp className="hidden" />}
            business={<CheckProp />}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingInfo;
