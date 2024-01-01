import CardSection from "./components/CardSection";

// Component for rendering the "Features" section
let FeaturesSection = () => {
  return (
    <div className=" py-20 min-h-screen relative overflow-hidden ">
      <div className="box-border w-full sm:py-20 xl:max-h-[850px] min-h-fit h-fit overflow-hidden xl:h-screen flex-col mx-auto space-y-20 overflow-x-hidden font-normal relative max-w-10xl">
        <h2 className="mx-auto text-4xl text-center font-semibold transition-all duration-500 text-text font-inter">
          What do you obtain?
        </h2>

        <CardSection />
      </div>
    </div>
  );
};

export default FeaturesSection;
