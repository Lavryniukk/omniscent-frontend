import PrimaryBtn from "@/app/UI/buttons/primaryBtn/PrimaryBtn";
import Image from "next/image";
let Title = () => {
  return (
    <div className="overflow-visible overflow-x-clip py-10 items-center relative flex-col gap-10 sm:gap-7 flex max-w-10xl mx-auto">
      {/* Main title */}
      <div className="mx-auto observe duration-500 border relative xl:p-6 lg:p-5 p-4 w-fit h-fit flex items-center justify-center rounded-xl border-secondary bg-secondary-950">
        <Image
          src="/images/logo-cleverize-white.svg"
          alt="cleverize logo icon svg"
          className="aspect-square w-20"
          width={80}
          height={80}
        />
        <div className="absolute rounded-full observe transition duration-500 delay-500 bg-primary aspect-square xl:w-40 lg:w-36 w-32 -z-10 blur-2xl"></div>
      </div>
      <h2 className="text-xl sm:text-2xl text-text  tracking-widest font-semibold">
        CLEVERIZE
      </h2>

      <h1
        className="observe transition duration-500 bg-gradient-to-t from-text w-full md:w-10/12  antialiased px-3 sm:px-5 to-text-500  mx-auto leading-none
				   font-inter  tracking-tight hyphens-none  text-transparent bg-clip-text font-extrabold text-center text-[max(40px,min(8vw,100px))] "
      >
        The AI solution
        <br /> for self-education
      </h1>

      {/* Description text */}
      <p className="observe transition delay-100 duration-500 text-accent hyphens-auto leading-relaxed mx-auto flex items-center justify-center w-10/12 md:w-1/2 lg:w-1/3 text-[max(20px,min(2vw,20px))] text-center ">
        Cleverize is online educational platform, that allows You to learn any
        digital technology.
      </p>

      {/* Get Started Button Component */}
      <PrimaryBtn
        height="50px"
        text="Get started"
        href="/"
        observed
        classname="w-10/12 xs:w-2/3 md:w-1/3 lg:w-[200px]"
      />
    </div>
  );
};

export default Title;
