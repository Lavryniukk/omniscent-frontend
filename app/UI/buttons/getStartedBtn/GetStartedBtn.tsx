import Link from "next/link";

let HomeButtons = () => {
  return (
    <div className="w-fit h-12 flex mx-auto mt-10 space-x-5 ">
      <Link
        href={"/"}
        className="flex items-center from-primary to-primary-600 bg-gradient-to-r justify-center text-lg  w-36 rounded-xl text-text transition-all font-roboto shadow-lg"
      >
        <div className="w-[97%] h-[91%] bg-background hover:bg-transparent duration-200 transition-all flex items-center justify-center rounded-xl  ">
          Get started
        </div>
      </Link>
    </div>
  );
};
export default HomeButtons;
