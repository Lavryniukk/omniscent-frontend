import ProCard from "./components/ProCard/ProCard";
import TrialCard from "./components/TrialCard/TrialCard";

// PricingCards component represents the section of the page that displays different pricing options.
let PricingCards = () => {
  return (
    <div className="w-full h-fit font-inter ">
      <div className="box-border items-end justify-around w-full lg:px-10 mx-auto my-10 md:my-20 xl:my-32 bg-transparent select-none max-w-10xl h-fit">
        <h2 className="mx-auto my-20 select-text observe duration-500 transition py-2 tracking-tighter h-fit font-bold text-center bg-gradient-to-t from-text to-accent text-transparent bg-clip-text text-4xl sm:text-5xl md:text-7xl font-inter">
          Choose a plan that
          <br /> fits your style
        </h2>
        <div className="w-full gap-4 md:gap-0 overflow-visible flex flex-col md:flex-row relative items-center md:items-end justify-center mx-auto">
          <TrialCard /> {/* Renders the trial pricing card. */}
          <ProCard /> {/* Renders the pro pricing card. */}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
