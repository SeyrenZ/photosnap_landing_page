import React from "react";
import { CheckProp } from "../svgs";

interface PricingBenefit {
  title: string;
  basic: JSX.Element;
  pro: JSX.Element;
  business: JSX.Element;
}

const PricingBenefitInfo: React.FC<PricingBenefit> = ({
  title,
  basic,
  pro,
  business,
}) => {
  return (
    <div className="w-full px-7 py-[23.5px] border-b-[2px] border-zinc-200 flex items-center justify-between">
      <div className="w-full max-w-[230px] text-xs font-bold text-black tracking-widest uppercase">
        {title}
      </div>
      <div className="w-[66px] text-xs font-bold text-black tracking-widest flex justify-center">
        {basic}
      </div>
      <div className="w-[66px] text-xs font-bold text-black tracking-widest flex justify-center">
        {pro}
      </div>
      <div className="w-[66px] text-xs font-bold text-black tracking-widest flex justify-center">
        {business}
      </div>
    </div>
  );
};

const PricingInfo = () => {
  return (
    <div className="w-full h-auto">
      <div className="w-full max-w-[1440px] px-10 pb-20 mx-auto bg-white flex flex-col items-center justify-center gap-y-14 ">
        <div className="text-[40px] leading-[48px] font-bold text-black tracking-widest">
          COMPARE
        </div>
        <div className="w-full max-w-[731px] h-auto flex flex-col items-start gap-y-0">
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
      </div>
    </div>
  );
};

export default PricingInfo;
