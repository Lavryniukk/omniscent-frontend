import Title from "./components/Title";

let HeroSection = () => {
  return (
    <div className="py-28 max-h-[1000px] h-screen min-h-[700px] relative overflow-hidden flex flex-col items-center">
      <Title />
      <div className="absolute bottom-0 bg-gradient-to-t from-background  to-transparent w-full h-12 z-50" />

      <div
        className={`left-0 background-left animate-movingBackgroundLeft -z-50  opacity-90 w-[60%] h-screen absolute `}
      >
        <div className="w-full h-full bg-gradient-to-r absolute from-primary/30 -z-[40] to-90% to-background border-text " />
        <div className="w-full h-full bg-gradient-to-b absolute from-background -z-[40]  via-transparent to-background border-text " />
      </div>

      <div
        className={`right-0 background-right animate-movingBackgroundRight -z-50  opacity-90 w-[60%] h-screen absolute `}
      >
        <div className="w-full h-full bg-gradient-to-l absolute from-primary/30 -z-[40] to-90% to-background border-text " />
        <div className="w-full h-full bg-gradient-to-t absolute from-background -z-[40] via-transparent to-background border-text " />
      </div>

      <div className="w-[750px] aspect-square absolute top-[calc(50%-250px)] md:block hidden left-[-450px] blob opacity-30 blur-[100px]" />
      <div className="w-[750px] aspect-square absolute top-[calc(50%-250px)] md:block hidden right-[-450px] blob opacity-30 blur-[100px]" />
    </div>
  );
};

export default HeroSection;
