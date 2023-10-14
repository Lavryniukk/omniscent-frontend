import PageGradient from "@/app/UI/gradients/HomePageGradient";
import TypingAnimation from "@/app/UI/TypingAnimation";
import HomeButtons from "@/app/UI/buttons/getStartedBtn/GetStartedBtn";
import Gradient from "@/app/UI/gradients/bgGradient";

let Home = () => {
  return (
    <div
      className="home overflow-hidden h-fit bg-transparent mx-auto box-border max-w-10xl
					  w-full py-40 sm:py-52 md:py-64"
    >
      <Gradient />
      <h1
        className="text-6xl bg-gradient-to-t from-text antialiased to-accent-400 w-fit mx-auto sm:text-7xl
					  md:text-7xl  font-roboto tracking-tight text-transparent bg-clip-text font-bold text-center "
      >
        <p>
          A modern web solution for
          <br /> educational purposes
        </p>
      </h1>
      <TypingAnimation />
      <HomeButtons />
    </div>
  );
};
export default Home;
