import Link from "next/link";
import Line from "../FeatureLine/FeatureLine";

// EnterpriseCard component
let EnterpriseCard = () => {
  return (
    <div className="2xl:w-1/4 shadow-sm 2xl:shadow-none shadow-white observe duration-500 transition delay-150 mx-auto lg:w-4/12 w-[350px] p-8 relative border-2 bg-background 2xl:h-[90%] lg:h-[47%] h-[30%] bg-opacity-90 rounded-xl border-secondary ">
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
        className="text-center absolute right-8 bottom-7 w-[82%] text-lg text-text bg-background font-bold border hover:text-background hover:bg-opacity-90 transition-all duration-200 border-text hover:bg-text mx-auto p-4 py-2 block rounded-lg "
      >
        Contact sales
      </Link>
    </div>
  );
};

export default EnterpriseCard;
