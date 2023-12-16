import Title from "./components/Title";
import Image from "next/image";

let HeroSection = () => {
  return (
    <div className="py-28 max-h-[1000px] h-screen min-h-[700px] relative overflow-hidden flex flex-col items-center">
      <Title />
      <div className="absolute bottom-0 bg-gradient-to-t from-primary to-background blur-3xl w-full h-16"></div>
    </div>
  );
};
export default HeroSection;
