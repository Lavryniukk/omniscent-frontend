import Link from "next/link";

let HomeButtons = () => {
  return (
    <div className="w-fit h-12 flex mx-auto mt-10 space-x-5 ">
      <Link
        href={"/"}
        className="flex items-center hover:text-background hover:bg-primary border-2 justify-center text-lg border-primary px-10 rounded-xl text-text transition-all font-roboto shadow-lg"
      >
        Get started
      </Link>
    </div>
  );
};
export default HomeButtons;
