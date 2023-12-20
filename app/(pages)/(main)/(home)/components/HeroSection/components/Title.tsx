"use client";
import PrimaryBtn from "@/app/UI/buttons/primaryBtn/PrimaryBtn";
import { useTheme } from "@/app/shared/providers/ThemeProvider";
// import { useTheme } from "@/app/shared/providers/ThemeProvider";
import Image from "next/image";
let Title = () => {
  let { theme } = useTheme();
  return (
    <div className="overflow-visible font-inter overflow-x-clip items-center relative flex-col gap-6 flex mx-auto w-full">
      {/* <div className=" top-20 mx-auto   p-4 backdrop-blur-md bg-opacity-50 border-text rounded-lg left-1/4 z-10 bg-secondary text-text">
        ! Attention: We`re making improvements! Our service is currently
        undergoing technical maintenance and will be back shortly. Thank you for
        your patience.
      </div> */}
      <div className="mx-auto observe group duration-500 border relative xl:p-6 lg:p-5 p-4 w-fit h-fit flex items-center justify-center rounded-xl border-secondary bg-background">
        <Image
          src={`/images/logo-cleverize-${
            theme === "light" ? "dark" : "light"
          }.webp`}
          // src={`/images/logo-cleverize-light.webp`}
          alt="cleverize logo icon svg"
          className="aspect-square w-20"
          width={100}
          height={100}
        />
        <div className="absolute group-hover:animate-pulse  rounded-full observe transition-all duration-500 delay-500 bg-gradient-to-r from-primary/80 to-primary/60  aspect-square xl:w-40 lg:w-36 w-32 -z-10 blur-2xl"></div>
      </div>
      <>
        <h2 className="text-xl text-center mx-auto sm:text-2xl text-accent pl-1 tracking-[5px] font-extrabold  flex justify-center observe duration-500 w-fit">
          CLEVERIZE
        </h2>

        <h1
          className="observe transition duration-500 bg-gradient-to-t from-text to-text/70 text-transparent w-full md:w-10/12  antialiased   mx-auto leading-none
  				   font-inter relative tracking-tight hyphens-none drop-shadow-lg  bg-clip-text font-extrabold text-center text-[40px] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          The{" "}
          <span className="text-text  drop-shadow-[0_5px_15px_rgba(var(--primary),0.6)]">
            AI solution
          </span>
          <br /> for self-education
        </h1>
      </>

      {/* Description text [max(40px,min(8vw,100px))] */}
      <p className="observe transition delay-100 duration-500 text-accent hyphens-manual  mx-auto flex items-center justify-center w-10/12 md:w-3/4 lg:w-1/2 text-md xs:text-xl  text-center ">
        Unleash your full potential with personalized AI-driven tech education.
      </p>

      {/* Get Started Button Component */}
      <PrimaryBtn
        height="50px"
        text="Get started"
        href="/workspace"
        observed={true}
        classname="w-3/4 xs:w-1/2 mt-5 sm:w-1/3 lg:w-[250px] border-2 text-xl"
      />
      {/* <PrimaryBlackBtn
        height="50px"
        text="Workspace"
        href="/workspace"
        observed
        classname="w-10/12 xs:w-2/3 md:w-1/3 lg:w-[200px]"
      /> */}
    </div>
  );
};

export default Title;
