import GetStartedButton from "../GetStartedButton/GetStartedButton";
import Image from "next/image";
// Component for rendering the title section
let Title = () => {
  return (
    <div className="  overflow-visible overflow-x-clip py-10 items-center relative flex-col justify-center space-y-10 max-w-10xl mx-auto">
      {/* Main title */}
      <div className="mx-auto border relative  xl:p-5 lg:p-4 md:p-3 p-2 w-fit h-fit flex items-center justify-center rounded-xl  border-secondary bg-secondary-950">
        <Image
          src="/images/logo-cleverize-white.svg"
          alt="cleverize logo icon svg"
          className="aspect-square xl:w-20 lg:w-16 w-12"
          width={80}
          height={80}
        />
        <div className="absolute rounded-full bg-primary aspect-square xl:w-40 lg:w-36 md:w-32 sm:w-28 w-24 -z-10 blur-2xl"></div>
      </div>
      <h1
        className="observe transition delay-0 duration-500 bg-gradient-to-t from-text flex items-center w-10/12 justify-center antialiased px-5 to-text-500  mx-auto leading-none
				   font-inter  tracking-tight hyphens-none  text-transparent bg-clip-text font-extrabold text-center text-[max(32px,min(5vw,76px))] "
      >
        The AI solution
        <br /> for self-education
      </h1>

      {/* Description text */}
      <p className="observe transition delay-100 duration-500 text-accent hyphens-auto leading-relaxed mt-40 mx-auto font-light flex items-center justify-center w-1/3 text-[max(15px,min(2vw,20px))] text-center ">
        Clverize is online educational platform, that allows You to learn any
        digital technology.
      </p>

      {/* Get Started Button Component */}
      <GetStartedButton />
    </div>
  );
};

export default Title;
