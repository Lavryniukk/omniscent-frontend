import Link from "next/link";

let HomeButtons = () => {
  return (
    <div className="w-fit h-12 flex mx-auto mt-10 space-x-5 ">
      <Link
        href={"/"}
        className="flex items-center justify-center bg-primary
                                        px-10  rounded-lg text-text font-roboto
                                        hover:bg-blue-700 transition-colors duration-300
                                        shadow-lg"
      >
        Get started
      </Link>
    </div>
  );
};
export default HomeButtons;
