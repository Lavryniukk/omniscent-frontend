"use client";
import { Spotlight } from "@/components/ui/spotlight";
import FeaturesSection from "./ui/FeaturesSection";
import FeedbackSection from "./ui/FeedbackSection";
import { useTheme } from "next-themes";
import HeroSection from "./ui/HeroSection";
function Home() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/images/lesson-banner.png";
      break;
    case "dark":
      src = "/images/lesson-banner-dark.png";
      break;
    default:
      src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }
  return (
    <main className=" font-inter  overflow-hidden flex flex-col justify-start  h-fit overflow-y-auto  mx-auto box-border w-full">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <HeroSection />
      <FeaturesSection />
      <FeedbackSection />
    </main>
  );
}

export default Home;
