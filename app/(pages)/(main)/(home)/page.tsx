import FeaturesSection from "@/app/(pages)/(main)/(home)/components/FeaturesSection/FeaturesSection";
import HeroSection from "@/app/(pages)/(main)/(home)/components/HeroSection/HeroSection";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cleverize",
  description:
    "Cleverize is a learning platform that allows you to learn any coding technology, whether it`s a web framework like React.js or a complex programming language like C++.",
};

function Home() {
  return (
    <main className="mb-10 font-inter overflow-hidden h-fit overflow-y-auto bg-transparent mx-auto box-border w-full">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}

export default Home;
