import Title from "./Title";
import Image from "next/image";
let HeroSection = () => {
  return (
    <div className=" mx-auto  h-fit bg-background overflow-visible px-2 md:px-8 min-h-screen w-full relative flex flex-row items-center justify-between">
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)))]"></div> */}
      <Title />
      <Banner />
      {/* <CleverizeLessonBanner /> */}
      {/* <div className="h-1/4 w-full  bg-gradient-to-t from-background absolute bottom-0"></div> */}
    </div>
  );
};

export default HeroSection;

function Banner() {
  return (
    <div className="  translate-x-1/4 flex p-2 overflow-visible -skew-x-12 ">
      <div className="absolute -left-[20%] -bottom-[20%] backdrop-blur-sm     ">
        <Image
          src="/images/roadmaps.png"
          alt="roadmaps banner"
          width={788}
          height={745}
          className="  w-[378.24px] h-[357.6px]   shadow-xl border-2 rounded-md dark:border-none border-slate-400"
        />
      </div>
      <Image
        src="/images/chat.png"
        alt="roadmaps banner"
        width={1700}
        height={940}
        className="w-full h-full object-cover shadow-xl border-2 rounded-md  border-slate-400 "
      />
    </div>
  );
}
