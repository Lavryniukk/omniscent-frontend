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
    <main className="mb-10 mt-16 max-w-10xl font-inter overflow-hidden flex flex-col justify-start h-fit overflow-y-auto bg-transparent mx-auto box-border w-full">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}

export default Home;
