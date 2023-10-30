import Link from "next/link";
import Line from "../FeatureLine/FeatureLine";

// TrialCard component represents a pricing card for the trial plan.
let TrialCard = () => {
  return (
    <div className="2xl:w-1/4 mx-auto shadow-sm 2xl:shadow-none observe duration-500 transition delay-0 shadow-white lg:w-4/12 relative w-[350px] p-8 border-2 bg-background bg-opacity-90  2xl:h-[80%] lg:h-[47%] h-[30%] rounded-xl border-secondary ">
      <h1 className="mb-2 text-2xl font-light text-left text-text">Trial</h1>
      <h1 className="text-4xl font-bold text-left text-text">
        $0
        <span className="text-xl text-accent-600">/month</span>
      </h1>
      <p className="text-accent text-right">Try everything for free</p>
      <ul className="mt-5 text-accent space-y-1 xl:space-y-2">
        <Line text={"1 Free roadmap generation"} />
        {/* Feature: Free roadmap generation */}
        <Line text={"10 Free api calls"} /> {/* Feature: 10 Free API calls */}
        <Line text={"All learning features available"} />
        {/* Feature: All learning features available */}
        <Line text={"No credit card info required"} />
        {/* Feature: No credit card info required */}
      </ul>
      <div className="text-center cursor-pointer absolute right-8 bottom-7 w-[82%] rounded-lg text-lg text-text bg-background font-bold border hover:text-background hover:bg-opacity-90  transition-all duration-200 border-text hover:bg-text mx-auto p-4 py-2 block">
        <Link href="/">Get started</Link>
      </div>
    </div>
  );
};
export default TrialCard;
