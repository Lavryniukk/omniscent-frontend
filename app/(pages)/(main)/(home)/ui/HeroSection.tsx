"use client";
import { useTheme } from "next-themes";
import Title from "./Title";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";

let HeroSection = () => {
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
    <div className="  h-fit bg-background bg-grid-small-black/[0.3] dark:bg-grid-small-[hsl(0,0%,95%)]/[0.3]  relative flex flex-col items-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <Title />
      <picture className="w-[98%] x-10  p-0.5 relative flex items-center  justify-center   rounded md:rounded-2xl  md:w-[80%] ">
        <Image
          src={src}
          priority
          alt="A cleverize lesson example"
          className="w-full  rounded-[14px] "
          width={1920}
          height={1040}
        />
      </picture>
      <div className="absolute  bg-gradient-to-b from-transparent  via-80%  via-transparent to-background rounded-2xl   w-full h-full" />

      {/* <div className="absolute bottom-0 bg-gradient-to-t from-background  to-transparent w-full h-32 z-[20]" /> */}
      {/* <MovingGradients /> */}
    </div>
  );
};

export default HeroSection;
