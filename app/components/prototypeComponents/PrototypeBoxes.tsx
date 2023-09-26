import Link from "next/link";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { ImTree } from "react-icons/im";

let Boxes = () => {
  return (
    <div className="flex justify-center space-x-20 md:space-x-40 py-5 select-none">
      <div className="border-[0.5px] border-secondary w-1/4  flex relative  items-center group justify-center max-w-[200px] rounded-[20px] max-h-[200px]">
        <div className="w-[40%] h-[40%] group-hover:w-[120%] blur-3xl group-hover:h-[120%] rounded-full border overflow-hidden  group-hover:spinner opacity-75 transition-all transi duration-[1s] z-[15]  bg-gradient-to-t from-primary via-indigo-900 to-rose-700  absolute rotate-45"></div>

        <Link
          href={"/prototype/chat"}
          className=" w-[97%] h-[97%] relative  z-20 bg-background  max-w-[200px] border-[0.5px] border-secondary max-h-[200px] flex flex-col items-center justify-center space-y-5 transition-all duration-300 aspect-square rounded-2xl "
        >
          <p className="text-lg sm:text-xl group-hover:text-text md:text-2xl text-accent transition-colors duration-500 group-hover:opacity-80 lg:text-3xl  font-roboto font-bold text-center mt-2 ">
            Chat
          </p>
          <HiOutlineChatAlt2 className="text-accent group-hover:opacity-80 group-hover:text-text  transition-colors duration-500 text-4xl md:text-5xl lg:text-6xl mx-auto" />
        </Link>
      </div>
      <div className="border-[0.5px] border-secondary w-1/4  flex relative items-center group justify-center max-w-[200px] rounded-[20px] max-h-[200px]">
        <div className="w-[40%] h-[40%] group-hover:w-[120%] blur-3xl group-hover:h-[120%] rounded-full border overflow-hidden  group-hover:spinner opacity-75 transition-all transi duration-[1s] z-[15]  bg-gradient-to-t from-primary via-indigo-900 to-rose-700  absolute rotate-45"></div>
        <Link
          href={"/prototype/roadmap"}
          className=" w-[97%] h-[97%] g relative  z-20 bg-background  max-w-[200px] border-[0.5px] border-secondary max-h-[200px] flex flex-col items-center justify-center space-y-5 transition-all duration-300 aspect-square rounded-2xl "
        >
          <p className="text-lg sm:text-xl group-hover:text-text md:text-2xl text-accent transition-colors duration-500 group-hover:opacity-80 lg:text-3xl  font-roboto font-bold text-center mt-2 ">
            Roadmap
          </p>
          <ImTree className="text-accent group-hover:opacity-80 group-hover:text-text  transition-colors duration-500 text-4xl md:text-5xl lg:text-6xl rotate-180 mx-auto" />
        </Link>
      </div>
    </div>
  );
};
export default Boxes;
