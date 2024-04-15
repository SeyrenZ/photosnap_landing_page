interface PricingBenefit {
  title: string;
  basic: JSX.Element;
  pro: JSX.Element;
  business: JSX.Element;
}

export const PricingBenefitInfo: React.FC<PricingBenefit> = ({
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

export const PricingBenefitInfoMobile: React.FC<PricingBenefit> = ({
  title,
  basic,
  pro,
  business,
}) => {
  return (
    <div className="w-full h-[114px] py-6 border-b-[1px] border-zinc-400 flex flex-col items-start gap-y-4">
      <div className="text-xs font-bold text-black tracking-widest">
        {title}
      </div>
      <div className="w-[273px] h-auto flex items-start justify-between">
        <div className="w-[60px] flex flex-col items-start gap-y-2 ">
          <div className="text-xs font-bold text-zinc-500 tracking-widest">
            BASIC
          </div>
          {basic}
        </div>
        <div className="w-[60px] flex flex-col items-start gap-y-2 ">
          <div className="text-xs font-bold text-zinc-500 tracking-widest">
            PRO
          </div>
          {pro}
        </div>
        <div className="w-[60px] flex flex-col items-start gap-y-2 ">
          <div className="text-xs font-bold text-zinc-500 tracking-widest">
            BUSINESS
          </div>
          {business}
        </div>
      </div>
    </div>
  );
};
