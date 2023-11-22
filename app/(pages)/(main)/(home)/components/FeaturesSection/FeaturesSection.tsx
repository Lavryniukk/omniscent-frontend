import CardSection from "./components/CardSection";

// Component for rendering the "Features" section
let FeaturesSection = () => {
  return (
    <div className="box-border w-full flex items-center justify-center flex-col py-20 mx-auto space-y-10 overflow-x-hidden font-normal px-4 bg-transparent relative min-h-screen max-w-10xl">
      <h2 className="mx-auto text-4xl text-center observe transition-all duration-500 text-text font-inter">
        What do you obtain?
      </h2>
      <p className="text-lg text-accent w-3/4 md:w-1/2 lg:w-1/3 text-center observe transition-all duration-500">
        Cleverize is online educational platform, that allows You to learn any
        digital technology.
      </p>
      <CardSection /> {/* Render the CardSection component */}
    </div>
  );
};

export default FeaturesSection;
