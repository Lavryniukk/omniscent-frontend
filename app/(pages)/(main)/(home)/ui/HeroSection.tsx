import Title from "./Title";
import { Spotlight } from "@/components/ui/spotlight";
import CleverizeLessonBanner from "./CleverizeLessonBanner";

let HeroSection = () => {
  return (
    <div className=" mx-auto px-2 md:px-8 h-fit bg-background bg-grid-small-[hsl(224,71.4%,4.1%)]/[0.3] dark:bg-grid-small-[hsl(0,0%,100%)]/[0.3] w-full  relative flex flex-col items-center">
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)))]"></div> */}
      <Spotlight
        fill="hsl(var(--primary))"
        className="-top-40  left-0 md:left-60 md:-top-20"
      />
      <Title />
      <CleverizeLessonBanner />
      <div className="h-1/4 w-full  bg-gradient-to-t from-background absolute bottom-0"></div>
    </div>
  );
};

export default HeroSection;
