import TypingAnimation from "@/app/modules/Hero/components/TypingAnimation/TypingAnimation";
import GetStartedButton from "@/app/modules/Hero/components/GetStartedButton/GetStartedButton";
import Gradient from "@/app/modules/Hero/components/Gradient/Gradient";

let Home = () => {
  return (
    <div
      className="home overflow-hidden h-fit bg-transparent mx-auto box-border max-w-10xl
					  w-full py-40 sm:py-52 md:py-64"
    >
      <Gradient />
      <h1
        className="text-6xl bg-gradient-to-t from-text antialiased to-accent-400 w-fit mx-auto sm:text-7xl
					  md:text-8xl font-roboto tracking-tight text-transparent bg-clip-text font-bold text-center "
      >
        Become <span className="text-primary-800">Omniscient</span>
      </h1>
      <TypingAnimation />
      <GetStartedButton />
    </div>
  );
};
export default Home;
