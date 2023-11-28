import PrimaryBlackBtn from "@/app/UI/buttons/PrimaryBlackBtn/PrimaryBlackBtn";
import PrimaryBtn from "@/app/UI/buttons/primaryBtn/PrimaryBtn";
import Image from "next/image";
let Title = () => {
  return (
    <div className="overflow-visible font-inter overflow-x-clip items-center relative flex-col gap-5 flex max-w-10xl mx-auto">
      <div className="mx-auto observe duration-500 border relative xl:p-6 lg:p-5 p-4 w-fit h-fit flex items-center justify-center rounded-xl border-secondary bg-background">
        <Image
          priority
          src="/images/logo-cleverize-white.svg"
          alt="cleverize logo icon svg"
          className="aspect-square w-20"
          width={80}
          height={80}
        />
        <div className="absolute rounded-full observe transition duration-500 delay-500 bg-primary aspect-square xl:w-40 lg:w-36 w-32 -z-10 blur-2xl"></div>
      </div>
      <h2 className="text-xl text-center mx-auto md:text-3xl sm:text-2xl text-accent pl-1 tracking-[6px] font-extrabold  flex justify-center observe duration-500 w-fit">
        CLEVERIZE
      </h2>

      <h1
        className="observe transition duration-500 bg-gradient-to-t from-text w-full md:w-10/12  antialiased  to-text-500  mx-auto leading-none
				   font-inter  tracking-tight hyphens-none  text-transparent bg-clip-text font-extrabold text-center text-[40px] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl"
      >
        The AI solution
        <br /> for self-education
      </h1>

      {/* Description text [max(40px,min(8vw,100px))] */}
      <p className="observe transition delay-100 duration-500 text-accent hyphens-auto  mx-auto flex items-center justify-center w-10/12 md:w-3/4 lg:w-1/2 text-lg xs:text-xl 2xl:text-2xl text-center ">
        Cleverize is online educational platform, that allows You to learn any
        digital technology.
      </p>

      {/* Get Started Button Component */}
      <PrimaryBtn
        height="50px"
        text="Get started"
        href="/workspace"
        observed={true}
        classname="w-10/12 xs:w-2/3 mt-5  md:w-1/3 lg:w-[200px]"
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
