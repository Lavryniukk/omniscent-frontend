import EnterpriseCard from "./components/EnterpriceCard/EnterpriceCard";
import ProCard from "./components/ProCard/ProCard";
import TrialCard from "./components/TrialCard/TrialCard";

// PricingCards component represents the section of the page that displays different pricing options.
let PricingCards = () => {
  return (
    <div className="w-full border-secondary h-fit from-slate-950 to-background">
      <div className="box-border items-end justify-around w-full lg:px-10 mx-auto my-10 md:my-20 xl:my-32 bg-transparent select-none max-w-10xl h-fit">
        <h2 className="mx-auto my-20 select-text tracking-tighter h-fit font-bold text-center bg-gradient-to-t from-text-100 via-text-200 to-text-400 text-transparent bg-clip-text text-4xl sm:text-5xl md:text-7xl font-inter">
          Choose a plan that
          <br /> fits your style
        </h2>
        <div className="w-full select-text flex 2xl:flex-nowrap flex-wrap flex-col gap-5 max-w-[1400px] 2xl:h-[500px] lg:h-[1000px] h-[1600px] lg:flex-row relative 2xl:items-end mx-auto">
          <TrialCard /> {/* Renders the trial pricing card. */}
          <ProCard /> {/* Renders the pro pricing card. */}
          <EnterpriseCard /> {/* Renders the enterprise pricing card. */}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
