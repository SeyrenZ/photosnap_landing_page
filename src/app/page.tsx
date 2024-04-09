import {
  HomeHeader,
  HomeContent1,
  HomeContent2,
  HomeContent3,
  Capability,
} from "@/components";

export default function Home() {
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
