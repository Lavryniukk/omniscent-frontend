import CardSection from "./components/CardSection/CardSection";

// Component for rendering the "Features" section
let Features = () => {
  return (
    <div className="box-border w-full mx-auto space-y-10 overflow-x-hidden font-normal px-4 py-40 bg-transparent h-fit max-w-10xl">
      <h2 className="mx-auto text-4xl text-center observe transition-all duration-500 text-text font-inter">
        What do you obtain?
      </h2>
      <CardSection /> {/* Render the CardSection component */}
    </div>
  );
};

export default Features;
