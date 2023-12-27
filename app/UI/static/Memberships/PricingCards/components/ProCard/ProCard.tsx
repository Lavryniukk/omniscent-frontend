"use client";
import Line from "../FeatureLine/FeatureLine";
import buyAdvanced from "./api/buyAdvanced";
import Button from "@/app/UI/buttons/Button";

// ProCard component
let ProCard = () => {
  const handleClick = async () => {
    await buyAdvanced();
  };
  // write function handle click based on func below

  return (
    <div className="observe sm:-translate-x-5 mx-auto sm:m-0 z-20 shadow-[0px_0px_30px_0px_rgb(var(--text))] sm:shadow-[10px_10px_35px_0px_rgb(var(--text))] border-t border-r duration-500 transition delay-75 w-[350px] md:w-[450px] p-8 relative bg-background h-fit bg-opacity-90 rounded-xl border-secondary">
      <h1 className="mb-2 text-2xl font-light text-left text-text">Advanced</h1>
      <h1 className="text-4xl font-bold text-left  text-text">
        $14.99
        <span className="text-xl text-accent-600"> /month</span>
      </h1>
      <p className="text-accent text-right">
        Best choice for consistent learners
      </p>
      <ul className="mt-5 mb-10 text-accent space-y-1 xl:space-y-2">
        <Line text={"200 credits monthly"} />
        <Line text={"Up to 4 roadmap slots available"} />
        <Line text="Technical support 24/7" />
        <Line text="" />
        <Line text={"All experimental features available"} />
      </ul>
      <Button callback={() => handleClick()}>Upgrade</Button>
    </div>
  );
};

export default ProCard;
