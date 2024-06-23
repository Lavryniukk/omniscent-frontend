import { Spotlight } from "@/components/ui/spotlight";
import FeedbackSection from "./ui/FeedbackSection";
import { useTheme } from "next-themes";
import HeroSection from "./ui/HeroSection";
import FlexibilitySection from "./ui/FlexibilitySection";
import MentoringSection from "./ui/MentoringSection";
import FeaturesSection from "./ui/FeaturesSection";
function Home() {
  return (
    <main className="  pb-20 gap-20 flex flex-col justify-start  h-fit  max-w-8xl mx-auto box-border w-full">
      <HeroSection />
      <FlexibilitySection />
      <MentoringSection />
      {/* <FeaturesSection /> */}
      <FeedbackSection />
    </main>
  );
}

export default Home;
