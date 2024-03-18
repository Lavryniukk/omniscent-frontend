import Title from "./Title";
import { Spotlight } from "@/components/ui/spotlight";
import CleverizeLessonBanner from "./CleverizeLessonBanner";

let HeroSection = () => {
  return (
    <div className="  h-fit bg-background bg-grid-small-black/[0.3] dark:bg-grid-small-[hsl(0,0%,95%)]/[0.3]  relative flex flex-col items-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Spotlight
        fill="hsl(var(--primary))"
        className="-top-40  left-0 md:left-60 md:-top-20"
      />
      <Title />
      <CleverizeLessonBanner />
      <div className="absolute bg-gradient-to-b from-transparent via-80% via-transparent to-background rounded-2xl w-full h-full" />
    </div>
  );
};

export default HeroSection;
