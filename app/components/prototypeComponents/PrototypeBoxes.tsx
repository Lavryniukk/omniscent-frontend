import Link from "next/link";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { ImTree } from "react-icons/im";

let Boxes = () => {
  return (
    <div className=" flex justify-center space-x-20 md:space-x-40 py-5 mt-10 select-none">
      <div className="border-[0.5px] border-secondary w-1/4  flex relative overflow-hidden items-center group justify-center max-w-[200px] rounded-[20px] max-h-[200px]">
        <div className="w-[50%] group-hover:w-[200%] overflow-hidden group-hover:rotate-[110] group-hover:spinner opacity-75  transition-all transi duration-[2s] z-[15] h-[50%] bg-gradient-to-t from-sky-800 via-indigo-900 to-rose-700 group-hover:h-[200%] absolute rotate-45" />

        <Link
          href={"/prototype/chat"}
          className=" w-[97%] h-[97%] relative  z-20 bg-background  max-w-[200px] border-[0.5px] border-secondary max-h-[200px] flex flex-col items-center justify-center space-y-5 transition-all duration-300 aspect-square rounded-2xl "
        >
          <p className="text-lg sm:text-xl md:text-2xl  lg:text-3xl text-accent font-roboto font-light text-center mt-2 ">
            Chat
          </p>
          <HiOutlineChatAlt2 className="text-accent text-4xl md:text-5xl lg:text-6xl mx-auto" />
        </Link>
      </div>
      <div className="border-[0.5px] border-secondary w-1/4  flex relative overflow-hidden items-center group justify-center max-w-[200px] rounded-[20px] max-h-[200px]">
        <div className="w-[50%] group-hover:w-[200%] overflow-hidden group-hover:rotate-[110]  group-hover:spinner opacity-75 transition-all transi duration-[2s] z-[15] h-[50%] bg-gradient-to-t from-sky-800 via-indigo-900 to-rose-700 group-hover:h-[200%] absolute rotate-45" />
        <Link
          href={"/prototype/roadmap"}
          className=" w-[97%] h-[97%] relative  z-20 bg-background  max-w-[200px] border-[0.5px] border-secondary max-h-[200px] flex flex-col items-center justify-center space-y-5 transition-all duration-300 aspect-square rounded-2xl "
        >
          <p className="text-lg sm:text-xl md:text-2xl  lg:text-3xl text-accent font-roboto font-light text-center mt-2 ">
            Roadmap
          </p>
          <ImTree className="text-accent text-4xl md:text-5xl lg:text-6xl rotate-180 mx-auto" />
        </Link>
      </div>
    </div>
  );
};
export default Boxes;
