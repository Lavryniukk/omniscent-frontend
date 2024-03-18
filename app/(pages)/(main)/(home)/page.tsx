import { Spotlight } from "@/components/ui/spotlight";
import FeaturesSection from "./ui/FeaturesSection";
import FeedbackSection from "./ui/FeedbackSection";
import { useTheme } from "next-themes";
import HeroSection from "./ui/HeroSection";
//TODO - we have to remake the features section to be more like  https://tailwindcss.com/
function Home() {
  return (
    <main className=" font-inter  overflow-hidden gap-20 flex flex-col justify-start  h-fit overflow-y-auto  mx-auto box-border w-full">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <HeroSection />
      <FeaturesSection />
      <FeedbackSection />
    </main>
  );
}

export default Home;
