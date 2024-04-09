interface CapabilityProps {
  icon: JSX.Element;
  title: string;
  desc: string;
}

const CapabilityComponent: React.FC<CapabilityProps> = ({
  icon,
  title,
  desc,
}) => {
  return (
    <div className="sm:w-[350px] w-[320px] h-[236px] flex flex-col items-center gap-y-12">
      <div className="flex items-center justify-center h-[71px]">{icon}</div>
      <div className="flex flex-col items-center gap-y-4">
        <div className="text-lg font-bold">{title}</div>
        <div className="text-sm leading-[25px] text-center">{desc}</div>
      </div>
    </div>
  );
};

export default CapabilityComponent;
