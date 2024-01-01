"use client";
import Line from "../FeatureLine/FeatureLine";
import Button from "@/app/UI/buttons/Button";
import fetchActivateTrial from "../../api/fetchActivateTrial";
import { useSubscription } from "@/app/shared/providers/SubscriptionProvider";
import { Check } from "lucide-react";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
let TrialCard = () => {
  const { subscription, isLoading, error } = useSubscription();
  return (
    <div className="mx-auto sm:m-0 font-inter shadow-sm observe duration-500 transition delay-0 shadow-white relative sm:w-[450px] w-[350px] md:w-[350px] p-8 border-2 bg-background bg-opacity-90 h-fit rounded-xl border-secondary ">
      <div className="absolute whitespace-nowrap -top-[5%] bg-background bg-opacity-70 backdrop-blur w-fit left-[calc(50%-125px)] p-2 px-5 rounded-full z-10 text-text">
        No credit card info required
      </div>
      <h1 className="mb-2 text-2xl font-light text-left text-text">Trial</h1>
      <h1 className="text-4xl font-bold text-left text-text">Free</h1>
      <p className="text-accent text-right">Try everything for free</p>
      <ul className="mt-5 mb-10 text-accent space-y-1 xl:space-y-2">
        <Line text={"250 credits"} />
        <Line text={"1 roadmap slot"} />
        <Line text={"All basic features available"} />
      </ul>
      <Button
        disabled={isLoading ? true : subscription.is_trial_activated}
        callback={async () => {
          const res = await fetchActivateTrial();
          location.reload();
        }}
        variant="outline"
      >
        {error !== undefined && "Error occurred("}

        <SignedIn>
          {isLoading && (
            <div className="border-2 rounded-full border-secondary w-8 h-8 border-t-accent animate-spin " />
          )}
          {!isLoading && subscription.is_trial_activated && (
            <div className="flex items-center justify-center gap-1">
              <Check />
              Activated
            </div>
          )}
          {!isLoading && !subscription.is_trial_activated && "Try now!"}
        </SignedIn>
        <SignedOut>
          <SignInButton>Sign in</SignInButton>
        </SignedOut>
      </Button>
    </div>
  );
};
export default TrialCard;
