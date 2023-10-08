import Link from "next/link";
import Line from "./PricingLine";
let Cards = () => {
  return (
    <div className="w-full select-text flex 2xl:flex-nowrap flex-wrap flex-col gap-5 max-w-[1400px] 2xl:h-[500px] lg:h-[1000px] h-[1600px] lg:flex-row relative 2xl:items-end mx-auto">
      {/* <div className=" h-[500px] block center-align top-1/3 2xl:left-[32%] xl:right-[5%] lg:left-[50%] lg:top-0 blur-[120px] 2xl:-top-28  rounded-full bg-gradient-to-t from-primary-500 via-primary-600 to-primary-700 spinner -z-10  opacity-70 w-[500px] absolute" /> */}

      <div className="2xl:w-1/4 mx-auto shadow-sm 2xl:shadow-none shadow-white lg:w-4/12 relative w-[350px] p-8 border-2 bg-background bg-opacity-90  2xl:h-[80%] lg:h-[47%] h-[30%] rounded-xl border-secondary ">
        <h1 className="mb-2 text-2xl font-light text-left text-text">Trial</h1>
        <h1 className="text-4xl font-bold text-left text-text">
          $0
          <span className="text-xl text-accent-600">/month</span>
        </h1>
        <p className="text-accent text-right">Try everything for free</p>
        <ul className=" mt-5 text-accent space-y-1 xl:space-y-2">
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
      <div className="2xl:w-1/4 shadow-sm 2xl:shadow-none shadow-white after:w-[400px] after:h-[400px] after:absolute after:-z-10 after:center-align after:blur-[120px] after:top-[10%]  after:bg-primary-500 mx-auto lg:w-4/12 w-[350px] p-8 border-2 relative bg-background 2xl:h-full lg:h-[47%] h-[30%] bg-opacity-90 rounded-xl border-secondary 2xl:border-slate-500 ">
        <h1 className="mb-2 text-2xl font-light text-left text-text">Pro</h1>
        <h1 className="text-4xl font-bold text-left text-text">
          $13,99
          <span className="text-xl text-accent-600"> /month</span>
        </h1>
        <p className="text-accent text-right">
          Best choice for consistent learners
        </p>
        <ul className=" mt-5 text-accent space-y-1 xl:space-y-2">
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
      <div className="2xl:w-1/4 shadow-sm 2xl:shadow-none shadow-white mx-auto lg:w-4/12 w-[350px] p-8 relative border-2 bg-background 2xl:h-[90%] lg:h-[47%] h-[30%] bg-opacity-90 rounded-xl border-secondary ">
        <h1 className="mb-2 text-2xl font-light text-left text-text">
          Enterprise
        </h1>
        <h1 className="text-4xl font-bold text-left text-text">Custom</h1>
        <p className="text-accent text-right">Big needs for big companies</p>
        <ul className="mt-5 text-accent space-y-1 xl:space-y-2">
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
  );
};
export default Cards;
