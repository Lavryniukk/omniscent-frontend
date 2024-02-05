import FeaturesSection from "@/app/(pages)/(main)/(home)/components/FeaturesSection/FeaturesSection";
import HeroSection from "@/app/(pages)/(main)/(home)/components/HeroSection/HeroSection";
import FeedbackSection from "./components/FeedbackSection/FeedbackSection";


function Home() {
  return (
    <main className="mb-10 mt-16 max-w-10xl font-inter overflow-hidden flex flex-col justify-start h-fit overflow-y-auto bg-transparent mx-auto box-border w-full">
      <HeroSection />
      <FeaturesSection />
      <FeedbackSection />
    </main>
  );
}

export default Home;
