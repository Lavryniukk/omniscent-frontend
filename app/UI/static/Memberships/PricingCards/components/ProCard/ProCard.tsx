"use client";
import Link from "next/link";
import Line from "../FeatureLine/FeatureLine";
import PrimaryBtn from "@/app/UI/buttons/primaryBtn/PrimaryBtn";
import buyAdvanced from "./api/buyAdvanced";
import { useRouter } from "next/navigation";

// ProCard component
let ProCard = () => {
  const router = useRouter();
  return (
    <div className=" -translate-x-5 z-20 shadow-[-2px_2px_40px_0px_white] border-t border-r observe duration-500 transition delay-75  w-[350px]  md:w-[450px] p-8  relative bg-background h-fit bg-opacity-90 rounded-xl border-secondary ">
      <h1 className="mb-2 text-2xl font-light text-left text-text">Advanced</h1>
      <h1 className="text-4xl font-bold text-left text-text">
        $14.99
        <span className="text-xl text-accent-600"> /month</span>
      </h1>
      <p className="text-accent text-right">
        Best choice for consistent learners
      </p>
      <ul className="mt-5 mb-10 text-accent space-y-1 xl:space-y-2">
        <Line text={"Unlimited roadmap generations"} />
        <Line text={"Up to 4 roadmap slots available"} />
        <Line
          text={"Access to 'Friday' AI-mentor model(gpt-4-turbo powered)"}
        />
        <Line text={"Unlocked achievements(WIP)"} />
        <Line text={"Unlocked statistics(WIP)"} />
        <Line text={"All experimental features available"} />
      </ul>
      <PrimaryBtn
        callbackFn={async () => {
          const url = await buyAdvanced();
          router.push(url);
        }}
        classname="text-xl"
        text={"Upgrade"}
        height={"50px"}
      />
    </div>
  );
};

export default ProCard;
