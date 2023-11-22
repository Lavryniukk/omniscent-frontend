import Title from "./components/Title";

let HeroSection = () => {
  return (
    <div className="lg:py-20 py-12 border-secondary relative border-b overflow-hidden">
      <Title />
      <div className="absolute bottom-0 bg-gradient-to-t from-primary-950 to-background blur-3xl w-full h-16"></div>
    </div>
  );
};
export default HeroSection;
