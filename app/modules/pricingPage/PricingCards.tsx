"use client";
import { FaCrown } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
let PricingCards = () => {
  return (
    <div className=" max-w-10xl mt-40 mx-auto flex flex-row justify-around items-center">
      <div className="h-[500px] w-[300px] rounded-xl p-3.5 border-accent opacity-60 border bg-secondary">
        <h3 className=" text-base  italic font-roboto text-start mx-1 text-accent bg-clip-text">
          * trial
        </h3>
        <h1 className=" text-2xl translate-z text-text font-semibold mt-2 ml-3">
          Trial edition
        </h1>
      </div>
      <Tilt
        className="h-[600px] w-[400px] rounded-xl p-3.5 border-primary border-2 bg-secondary preserve-3d"
        perspective={1000}
        glareEnable={true}
        glareMaxOpacity={0.15}
      >
        <h3 className=" text-base  italic font-roboto text-start mx-1 text-accent bg-clip-text">
          * best choice
        </h3>
        <FaCrown className="mx-auto text-yellow-500 w-5 h-5 translate-z" />
        <h1 className=" text-4xl text-text font-semibold mt-2 ml-5">
          Learner edition
        </h1>
      </Tilt>
      <div className="h-[500px] w-[300px] rounded-xl p-3.5 border-accent  opacity-60 border bg-secondary">
        <h3 className=" text-base  italic font-roboto text-start mx-1 text-accent bg-clip-text">
          *all-in-one
        </h3>
        <h1 className=" text-2xl translate-z text-text font-semibold mt-2 ml-3">
          Omniscient edition
        </h1>
      </div>
    </div>
  );
};
export default PricingCards;
