import MovingGradients from "./components/MovingGradients";
import Title from "./components/Title";

let HeroSection = () => {
  return (
    <div className="py-28 max-h-[1000px] h-screen min-h-[700px] relative overflow-hidden flex flex-col items-center">
      <Title />
      <div className="absolute bottom-0 bg-gradient-to-t from-background  to-transparent w-full h-32 z-50" />
      <MovingGradients />
    </div>
  );
};

export default HeroSection;
