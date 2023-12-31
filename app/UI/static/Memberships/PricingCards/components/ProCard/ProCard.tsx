"use client";
import { useRouter } from "next/navigation";
import fetchActivateSubscription from "../../api/fetchActivateSubscription";
import Line from "../FeatureLine/FeatureLine";
import Button from "@/app/UI/buttons/Button";
let ProCard = () => {
  const router = useRouter();
  return (
    <div className="observe md:-translate-x-5 mx-auto sm:m-0 z-20 shadow-[0px_0px_30px_0px_rgb(var(--text))] md:shadow-[10px_10px_35px_0px_rgb(var(--text))] border-t border-r duration-500 transition delay-75 w-[350px] sm:w-[450px] md:w-[400px] lg:w-[450px]  p-8 relative bg-background h-fit bg-opacity-90 rounded-xl border-secondary">
      <h1 className="mb-2 text-2xl font-light text-left text-text">Advanced</h1>
      <h1 className="text-4xl font-bold text-left  text-text">
        $14.99
        <span className="text-xl text-accent-600"> /month</span>
      </h1>
      <p className="text-accent text-right">
        Best choice for consistent learners
      </p>
      <ul className="mt-5 mb-10 text-accent space-y-1 xl:space-y-2">
        <Line text={"2000 credits monthly"} />
        <Line text={"Up to 4 roadmap slots available"} />
        <Line text="Technical support 24/7" />
        <Line text={"All experimental features available"} />
      </ul>
      <Button
        callback={async () => {
          const url = await fetchActivateSubscription();
          router.push(url);
        }}
      >
        Upgrade
      </Button>
    </div>
  );
};

export default ProCard;
