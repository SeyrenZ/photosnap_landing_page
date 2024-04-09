import StoriesContent from "@/components/StoriesContent";
import StoriesHeader from "@/components/StoriesHeader";
import React from "react";

const page = () => {
  return (
    <div className="pt-[72px]">
      <StoriesHeader />
      <StoriesContent />
    </div>
  );
};

export default page;
