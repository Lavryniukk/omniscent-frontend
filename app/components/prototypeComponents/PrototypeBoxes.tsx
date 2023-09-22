import Link from "next/link";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { ImTree } from "react-icons/im";

let Boxes = () => {
  return (
    <div className=" flex justify-center space-x-20 md:space-x-40 py-5 mt-10 select-none">
      <Link
        href={"/prototype/chat"}
        className="w-1/4  max-w-[250px] max-h-[250px] pt-box-shadow flex flex-col items-center justify-center space-y-5 transition-all duration-300 aspect-square rounded-2xl "
      >
        <p className="text-md sm:text-xl md:text-2xl  lg:text-3xl text-accent font-roboto font-light text-center mt-2 ">
          Your chats
        </p>
        <HiOutlineChatAlt2 className="text-accent text-5xl md:text-6xl lg:text-7xl  mx-auto" />
      </Link>
      <Link
        href={"/prototype/roadmap"}
        className="w-1/4  max-w-[250px] max-h-[250px] pt-box-shadow flex flex-col items-center justify-center space-y-5 transition-all duration-300 aspect-square rounded-2xl "
      >
        <p className="text-md sm:text-xl md:text-2xl  lg:text-3xl text-accent font-roboto font-light text-center mt-2 ">
          Your roadmaps
        </p>
        <ImTree className="text-accent text-5xl md:text-6xl lg:text-7xl  rotate-180 mx-auto" />
      </Link>
    </div>
  );
};
export default Boxes;
