import Title from "./components/Title";

let HeroSection = () => {
  return (
    <div className="py-28 max-h-[1000px] h-screen min-h-[700px] relative overflow-hidden flex flex-col items-center">
      <Title />
      <div className="absolute bottom-0 bg-gradient-to-t from-background to-transparent w-full h-32 blur-lg z-50" />
      <div className="w-1/2 h-screen absolute left-0 background-left -z-50 animate-movingBackgroundLeft opacity-50">
        <div className="w-full h-full bg-gradient-to-r from-primary/50 via-[20%] via-transparent blur-[100px]" />
      </div>
      <div className="w-1/2 h-screen absolute right-0 background-right -z-50 animate-movingBackgroundRight opacity-50 bg-gradient-to-l from-primary to-transparent">
        <div className="w-full h-full bg-gradient-to-l from-primary/50 via-[20%] via-transparent blur-[100px]" />
      </div>
      <div className="w-[750px] aspect-square absolute top-[calc(50%-250px)] left-[-450px] blob opacity-30 blur-[100px]" />
      <div className="w-[750px] aspect-square absolute top-[calc(50%-250px)] right-[-450px] blob opacity-30 blur-[100px]" />
    </div>
  );
};

export default HeroSection;
