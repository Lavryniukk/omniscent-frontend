import Link from "next/link";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { ImTree } from "react-icons/im";

let Boxes = () => {
  return (
    <div className=" flex justify-center space-x-20 md:space-x-40 py-5 mt-10 select-none">
      <Link
        href={"/prototype/chat"}
        className="w-1/4  max-w-[200px] max-h-[200px] pt-box-shadow flex flex-col items-center justify-center space-y-5 transition-all duration-300 aspect-square rounded-2xl "
      >
        <p className="text-lg sm:text-xl md:text-2xl  lg:text-3xl text-accent font-roboto font-light text-center mt-2 ">
          Chat
        </p>
        <HiOutlineChatAlt2 className="text-accent text-4xl md:text-5xl lg:text-6xl mx-auto" />
      </Link>
      <Link
        href={"/prototype/roadmap"}
        className=" w-1/4  max-w-[200px] max-h-[200px] pt-box-shadow flex flex-col items-center justify-center space-y-5 transition-all duration-300 aspect-square rounded-2xl "
      >
        <p className="text-lg sm:text-xl md:text-2xl  lg:text-3xl text-accent font-roboto font-light text-center mt-2 ">
          Roadmap
        </p>
        <ImTree className="text-accent text-4xl md:text-5xl lg:text-6xl rotate-180 mx-auto" />
      </Link>
    </div>
  );
};
export default Boxes;
