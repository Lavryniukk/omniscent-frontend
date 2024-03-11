import { ArrowDown } from "lucide-react";
import React from "react";

const FeedbackSection = () => {
  return (
    <div className="w-full flex items-center justify-center gap-5 flex-col py-20">
      <h1 className="text-3xl sm:text-4xl text-center lg:text-6xl  font-semibold  ">
        Loved it? Hated it? Please leave your feedback!
      </h1>
      <ArrowDown size={30} />
      <p className=" drop-shadow-xl  text-xl lg:text-3xl">
        cleverize@proton.me
      </p>
    </div>
  );
};

export default FeedbackSection;
