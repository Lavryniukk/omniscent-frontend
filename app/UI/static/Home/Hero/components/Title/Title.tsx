import Image from "next/image";
import PrimaryButton from "@/app/UI/buttons/primaryBtn/primaryBtn";
import PrimaryBlackButton from "@/app/UI/buttons/PrimaryBlackBtn/PrimaryBlackBtn";
// Component for rendering the title section
let Title = () => {
  return (
    <div className=" overflow-visible overflow-x-clip py-10 items-center relative flex-col gap-7 flex max-w-10xl mx-auto">
      {/* Main title */}
      <div className="mx-auto observe duration-500 border relative xl:p-5 lg:p-4 p-3 w-fit h-fit flex items-center justify-center rounded-xl border-secondary bg-secondary-950">
        <Image
          src="/images/logo-cleverize-white.svg"
          alt="cleverize logo icon svg"
          className="aspect-square md:w-20 w-16 "
          width={80}
          height={80}
        />
        <div className="absolute border-red-500 rounded-full observe transition duration-500 delay-500 bg-primary aspect-square xl:w-40 lg:w-36 w-32 -z-10 blur-2xl"></div>
      </div>
      <h1
        className="observe transition border-red-500 duration-500 bg-gradient-to-t from-text w-full md:w-10/12  antialiased px-5 to-text-500  mx-auto leading-none
				   font-inter  tracking-tight hyphens-none  text-transparent bg-clip-text font-extrabold text-center text-[max(40px,min(8vw,100px))] "
      >
        The AI solution
        <br /> for self-education
      </h1>

      {/* Description text */}
      <p className="observe transition delay-100 duration-500 text-accent hyphens-auto leading-relaxed mx-auto flex items-center justify-center w-1/2 lg:w-1/3 text-[max(15px,min(2vw,20px))] text-center ">
        Cleverize is online educational platform, that allows You to learn any
        digital technology.
      </p>

      {/* Get Started Button Component */}
      <PrimaryButton
        width="200px"
        height="50px"
        text="Get started"
        href="/"
        observed
      />
    </div>
  );
};

export default Title;
