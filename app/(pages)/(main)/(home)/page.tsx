import { Spotlight } from "@/components/ui/spotlight";
import FeedbackSection from "./ui/FeedbackSection";
import { useTheme } from "next-themes";
import HeroSection from "./ui/HeroSection";
import FlexibilitySection from "./ui/FlexibilitySection";
import MentoringSection from "./ui/MentoringSection";
function Home() {
  return (
    <main className="  overflow-hidden pb-20 gap-20 flex flex-col justify-start  h-fit overflow-y-auto  mx-auto box-border w-full">
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" /> */}
      <HeroSection />
      <FlexibilitySection />
      <MentoringSection />
      {/* <FeaturesSection /> */}
      <FeedbackSection />
    </main>
  );
}

export default Home;
