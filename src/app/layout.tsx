import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";

const DmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photosnap",
  description: "Photosnap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={DmSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
