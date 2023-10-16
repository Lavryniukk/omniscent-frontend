import Link from "next/link";
import Line from "../FeatureLine/FeatureLine";

let ProCard = () => {
  return (
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
  );
};
export default ProCard;
