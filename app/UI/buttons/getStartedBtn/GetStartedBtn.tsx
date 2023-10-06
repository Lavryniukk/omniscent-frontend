import Link from "next/link";

let HomeButtons = () => {
  return (
    <div className="w-fit h-12 flex mx-auto mt-10 space-x-5 ">
      <Link
        href={"/"}
        className="flex items-center from-primary to-sky-700 bg-gradient-to-r border-2 justify-center text-lg border-primary w-36 rounded-xl text-text transition-all font-roboto shadow-lg"
      >
        <div className="w-[97%] h-[94%] hover:text-background bg-background hover:bg-transparent duration-200 transition-all flex items-center justify-center rounded-lg border-accent ">
          Get started
        </div>
      </Link>
    </div>
  );
};
export default HomeButtons;
