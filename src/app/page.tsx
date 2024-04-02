import Header from "@/components/Header";
import HomeContent1 from "@/components/HomeContent1";
import HomeContent2 from "@/components/HomeContent2";
import HomeContent3 from "@/components/HomeContent3";

export default function Home() {
  return (
    <main className="pt-[72px]">
      <Header />
      <HomeContent1 />
      <HomeContent2 />
      <HomeContent3 />
    </main>
  );
}
