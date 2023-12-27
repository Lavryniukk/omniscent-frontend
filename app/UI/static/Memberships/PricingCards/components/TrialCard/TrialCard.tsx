import { axiosWithAuth } from "@/app/shared/config/axiosConfig";
import Line from "../FeatureLine/FeatureLine";
import Button from "@/app/UI/buttons/Button";

// TrialCard component represents a pricing card for the trial plan.
let TrialCard = () => {
  return (
    <div className="mx-auto sm:m-0 font-inter shadow-sm observe duration-500 transition delay-0 shadow-white relative md:w-[350px] w-[350px] p-8 border-2 bg-background bg-opacity-90 h-fit rounded-xl border-secondary ">
      <div className="absolute whitespace-nowrap -top-[5%] bg-background bg-opacity-70 backdrop-blur w-fit left-[calc(50%-125px)] p-2 px-5 rounded-full z-10 text-text">
        No credit card info required
      </div>
      <h1 className="mb-2 text-2xl font-light text-left text-text">Trial</h1>
      <h1 className="text-4xl font-bold text-left text-text">Free</h1>
      <p className="text-accent text-right">Try everything for free</p>
      <ul className="mt-5 mb-10 text-accent space-y-1 xl:space-y-2">
        <Line text={"50 credits"} />
        <Line text={"1 roadmap slot"} />
        <Line text={"All basic features available"} />
      </ul>
      <Button
        callback={async () => {
          await axiosWithAuth("/subscriptions/subscription-data");
        }}
        variant="outline"
      >
        Activate trial
      </Button>
    </div>
  );
};
export default TrialCard;
