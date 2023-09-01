import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
let HomeButton = () => {
  return (
    <Link
      href={"/"}
      title="Back to home page"
      className="fixed select-none cursor-pointer top-10 group left-10 hover:shadow-2xl overflow-hidden box-content rounded-lg w-[52px] h-9 flex justify-center items-center"
    >
      <div className="bg-primary absolute right-0 box-content transition-all duration-300 group-hover:w-full h-full w-0 "></div>
      <div className="rounded-lg w-12 h-8 box-content bg-secondary absolute overflow-hidden border flex items-center group-hover:border-none border-accent">
        <div className="flex w-fit left-5 h-full translate-x-[18px] transition-transform duration-300 group-hover:-translate-x-[44px] rounded-lg bg-secondary items-center justify-around space-x-8">
          <FaArrowLeft size={25} className="w-6 text-accent box-content" />
          <p className="text-sm text-center w-full text-accent">Home</p>
        </div>
      </div>
    </Link>
  );
};
export default HomeButton;
