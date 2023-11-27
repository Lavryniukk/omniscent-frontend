import Link from "next/link";
import Line from "../FeatureLine/FeatureLine";
import PrimaryBlackBtn from "@/app/UI/buttons/PrimaryBlackBtn/PrimaryBlackBtn";

// TrialCard component represents a pricing card for the trial plan.
let TrialCard = () => {
  return (
    <div className="  font-inter shadow-sm observe duration-500 transition delay-0 shadow-white relative md:w-[350px] w-[400px] p-8 border-2 bg-background bg-opacity-90  h-fit rounded-xl border-secondary ">
      <div className="absolute whitespace-nowrap -top-[5%] bg-background bg-opacity-70 backdrop-blur w-fit left-[calc(50%-125px)] p-2 px-5 rounded-full z-10 bg-opacity- text-text">
        No credit card info required
      </div>
      <h1 className="mb-2 text-2xl font-light text-left text-text">Trial</h1>
      <h1 className="text-4xl font-bold text-left text-text">
        $0
        <span className="text-xl text-accent-600">/month</span>
      </h1>
      <p className="text-accent text-right">Try everything for free</p>
      <ul className="mt-5 mb-10 text-accent space-y-1 xl:space-y-2">
        <Line text={"1 free roadmap"} />
        <Line text={"Every feature available"} />
        <Line text={"Access to 'Monday' AI-mentor model(gpt-3.5 powered)"} />
      </ul>
      <PrimaryBlackBtn text={"Activate trial"} height={"50px"} />
    </div>
  );
};
export default TrialCard;
