"use client";
import { useTheme } from "next-themes";
import Title from "./components/Title";
import Image from "next/image";

let HeroSection = () => {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/images/conversation-banner.png";
      break;
    case "dark":
      src = "/images/conversation-banner-dark.png";
      break;
    default:
      src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }
  return (
    <div className="  h-fit py-20  relative overflow-hidden flex flex-col items-center">
      <Title />
      <picture className="w-[90%] p-0.5 relative flex items-center overflow-hidden justify-center  border-azure-950  rounded-2xl  md:w-[80%] ">
        <Image
          src={src}
          alt="A cleverize conversation example"
          className="w-full   shadow-2xl rounded-[14px] "
          width={1920}
          height={1040}
        />
        <div className=" w-[50%] h-[15%] absolute  bg-azure-300 dark:bg-azure-700 left-0  -bottom-[15%] rounded-full blur-[120px]" />
        <div className=" w-[50%] h-[15%]  absolute bg-azure-300 dark:bg-azure-700 right-0 -bottom-[15%] rounded-full blur-[120px]" />

        <div className="absolute  bg-gradient-to-b from-transparent rounded-2xl to-azure-200 dark:to-azure-800 -z-10 w-full h-full" />
      </picture>
      {/* <div className="absolute bottom-0 bg-gradient-to-t from-background  to-transparent w-full h-32 z-[20]" /> */}
      {/* <MovingGradients /> */}
    </div>
  );
};

export default HeroSection;
