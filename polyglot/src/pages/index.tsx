import Image from "next/image";
import { Inter } from "next/font/google";
import { HomePage } from "@/components/HomePage";
import { WhyJoin } from "@/components/HomePage/WhyJoin";
import { AboutUs } from "@/components/HomePage/AboutUs";
import { Info } from "@/components/HomePage/Info";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePage />
      <WhyJoin />
      <AboutUs />
      <Info />
    </>
  );
}
