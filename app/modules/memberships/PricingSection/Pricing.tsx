import Line from "@/app/components/pricingComponents/PricingLine";
import Link from "next/link";
import { HiCheck } from "react-icons/hi";
let Pricing = () => {
  return (
    <div className="w-full border-secondary from-slate-950 to-background">
      <div className="gradient h-[1000px] hidden 2xl:block center-align top-[230px] -z-10 blur-[160px] opacity-70 w-[1000px] absolute" />
      <div className="box-border items-end justify-around w-full lg:px-10 mx-auto my-10 md:my-20 xl:my-32 overflow-x-hidden bg-transparent select-none max-w-10xl h-fit">
        <h2 className="mx-auto my-20 font-bold text-center text-text text-4xl sm:text-5xl md:text-7xl font-roboto">
          Choose a plan that
          <br /> fits your style
        </h2>
        <div className="w-full flex 2xl:flex-nowrap flex-wrap flex-col gap-5 max-w-[1400px] 2xl:h-[500px] lg:h-[1000px] h-[1600px] lg:flex-row relative 2xl:items-end mx-auto">
          <div className="2xl:w-1/4 mx-auto lg:w-4/12 relative w-[350px] p-8 border-2 bg-background bg-opacity-90  2xl:h-[80%] lg:h-[45%] h-[30%] rounded-xl border-secondary ">
            <h1 className="mb-2 text-2xl font-light text-left text-text">
              Trial
            </h1>
            <h1 className="text-4xl font-bold text-left text-text">
              $0
              <span className="text-xl text-slate-500">/month</span>
            </h1>
            <p className="text-accent text-right">Try everything for free</p>
            <ul className=" mt-5 text-accent space-y-2">
              <Line text={"1 Free roadmap generation"} />
              <Line text={"10 Free api calls"} />
              <Line text={"All learning features available"} />
              <Line text={"No credit card info required"} />
            </ul>
            <Link
              href="/"
              className=" text-center absolute right-8 bottom-7 w-[82%] rounded-lg  text-lg text-text bg-background font-bold border hover:text-background hover:bg-opacity-90  transition-all duration-200 border-text hover:bg-text  mx-auto p-4 py-2 block"
            >
              Get started
            </Link>
          </div>
          <div className="2xl:w-1/4 shadow-md shadow-secondary mx-auto lg:w-4/12 w-[350px] p-8 border-2 relative bg-background 2xl:h-full lg:h-[45%] h-[30%] bg-opacity-90 rounded-xl border-secondary 2xl:border-slate-500 ">
            <h1 className="mb-2 text-2xl font-light text-left text-text">
              Pro
            </h1>
            <h1 className="text-4xl font-bold text-left text-text">
              $13,99
              <span className="text-xl text-slate-500"> /month</span>
            </h1>
            <p className="text-accent text-right">
              Best choice for consistent learners
            </p>
            <ul className=" mt-5 text-accent space-y-2">
              <Line text={"Unlimited roadmap generations"} />
              <Line text={"200 Api calls monthly"} />
              <Line text={"'Top learners' section unlocked"} />
              <Line text={"Unlocked achievments"} />
              <Line text={"Unlocked statistics"} />
              <Line text={"Private chat with other learners"} />
              <Line text={"All experimental features available"} />
            </ul>
            <Link
              href="/"
              className=" text-center absolute right-8 bottom-7 w-[82%] text-lg text-background bg-text font-bold border border-text hover:text-text hover:bg-opacity-90  transition-all duration-200 hover:border-text hover:bg-background  mx-auto p-4 py-2 block rounded-lg glow-effect"
            >
              Purchase
            </Link>
          </div>
          <div className="2xl:w-1/4 mx-auto lg:w-4/12 w-[350px] p-8 relative border-2 bg-background 2xl:h-[90%] lg:h-[45%] h-[30%] bg-opacity-90 rounded-xl border-secondary ">
            <h1 className="mb-2 text-2xl font-light text-left text-text">
              Enterprise
            </h1>
            <h1 className="text-4xl font-bold text-left text-text">Custom</h1>
            <p className="text-accent text-right">
              Big needs for big companies
            </p>
            <ul className="mt-5 text-accent space-y-2">
              <Line text={"Everything included in pro"} />
              <Line text={"Custom requirements"} />
            </ul>

            <Link
              href="/"
              className=" text-center absolute right-8 bottom-7 w-[82%] text-lg text-text bg-background font-bold border hover:text-background hover:bg-opacity-90  transition-all duration-200 border-text hover:bg-text  mx-auto p-4 py-2 block rounded-lg "
            >
              Contact sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
