import { StoriesContent, StoriesHeader } from "@/components";
import React from "react";

const Home = () => {
  return (
    <div className="pt-[72px] overflow-hidden">
      <StoriesHeader />
      <StoriesContent />
    </div>
  );
};

export default Home;
