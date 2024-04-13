"use client";
import {
  HomeHeader,
  HomeContent1,
  HomeContent2,
  HomeContent3,
  Capability,
} from "@/components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="pt-[72px]">
      <HomeHeader />
      <HomeContent1 />
      <HomeContent2 />
      <HomeContent3 />
      <Capability />
    </main>
  );
}
