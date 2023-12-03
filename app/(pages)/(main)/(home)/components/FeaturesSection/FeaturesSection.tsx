import CardSection from "./components/CardSection";

// Component for rendering the "Features" section
let FeaturesSection = () => {
  return (
    <div className="box-border w-full sm:py-20 xl:max-h-[850px] min-h-fit h-fit overflow-hidden  xl:h-screen  flex-col  mx-auto space-y-20 overflow-x-hidden font-normal bg-transparent relative max-w-10xl">
      <h2 className="mx-auto text-4xl  text-center font-semibold transition-all duration-500 text-text font-inter">
        What do you obtain?
      </h2>
      {/* <p className="text-lg text-accent w-full text-center  transition-all duration-500">
        Cleverize is online educational platform, that allows You to learn any
        digital technology.
      </p> */}
      <CardSection /> {/* Render the CardSection component */}
    </div>
  );
};

export default FeaturesSection;
