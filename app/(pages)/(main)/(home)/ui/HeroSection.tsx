import Title from "./Title";
import { Spotlight } from "@/components/ui/spotlight";
import CleverizeLessonBanner from "./CleverizeLessonBanner";

let HeroSection = () => {
  return (
    <div className=" mx-auto  h-fit bg-background px-2 md:px-8 min-h-screen w-full relative flex flex-row items-center">
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)))]"></div> */}
      <Title />
      {/* <CleverizeLessonBanner /> */}
      {/* <div className="h-1/4 w-full  bg-gradient-to-t from-background absolute bottom-0"></div> */}
    </div>
  );
};

export default HeroSection;
