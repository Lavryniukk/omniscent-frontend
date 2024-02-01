import Title from "./components/Title";
import Image from "next/image";
let HeroSection = () => {
  return (
    <div className="  h-fit py-20  relative overflow-hidden flex flex-col items-center">
      <Title />
      <picture className="w-[90%] p-0.5 relative flex items-center overflow-hidden justify-center  border-azure-950 bg-auto bg-center bg-no-repeat rounded-2xl  md:w-[80%] aspect-video ">
        <Image
          src="/images/masha.png"
          alt="A cleverize conversation example"
          className="w-full aspect-video h-full shadow-2xl rounded-[14px] "
          width={1920}
          height={1080}
        />
        <div className=" w-[50%] h-[15%] absolute  bg-azure-300 dark:bg-azure-700 left-0  -bottom-[15%] rounded-full blur-[120px]" />
        <div className=" w-[50%] h-[15%]  absolute bg-azure-300 dark:bg-azure-700 right-0 -bottom-[15%] rounded-full blur-[120px]" />

        <div className="absolute  bg-gradient-to-b from-transparent rounded-2xl to-azure-200 dark:to-azure-800 -z-10 w-full h-full" />
      </picture>
      {/* <div className="absolute bottom-0 bg-gradient-to-t from-background  to-transparent w-full h-32 z-[20]" /> */}
      {/* <MovingGradients /> */}
    </div>
  );
};

export default HeroSection;
