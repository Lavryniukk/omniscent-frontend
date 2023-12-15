import Title from "./components/Title";
import Image from "next/image";

let HeroSection = () => {
  return (
    <div className="py-28 max-h-[1000px] h-screen min-h-[700px] relative overflow-hidden flex flex-col items-center">
      <Image
        src={"/images/background3.png"}
        alt={"background"}
        width={1920}
        height={1080}
        className="fixed top-0 min-w-[1280px] min-h-[720px]"
      />
      <Title />
    </div>
  );
};
export default HeroSection;
