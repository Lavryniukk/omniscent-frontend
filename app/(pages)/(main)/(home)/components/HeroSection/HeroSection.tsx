import Title from "./components/Title";

let HeroSection = () => {
  return (
    <div className="py-60 max-h-[1000px] min-h-fit h-screen border-secondary relative border-b overflow-hidden">
      <Title />
      <div className="absolute bottom-0 bg-gradient-to-t from-primary-950 to-background blur-3xl w-full h-16"></div>
    </div>
  );
};
export default HeroSection;
