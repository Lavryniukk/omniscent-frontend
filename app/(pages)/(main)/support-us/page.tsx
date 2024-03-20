"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SupportUs() {
  return (
    <div className="flex items-center mt-96 lg:mt-52 overflow-x-hidden max-w-7xl w-full mx-auto">
      <div className="flex flex-col gap-12">
        <h1 className="px-6 text-foreground text-center text-5xl font-bold">
          Like what we are doing?
        </h1>
        <div className="text-foreground flex flex-col gap-6">
          <p className="px-6 text-center">
            If you would love to contribute to the growth of the platform,
            please, support us by simply pressing the button below! ;)
          </p>
          <Link
            href={"/"}
            className="link link-primary w-fit px-4 py-2 mx-auto text-base"
          >
            Support
          </Link>
        </div>
      </div>
      <div className="max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:absolute -z-50 flex flex-col items-center justify-center shrink-0 min-w-[522px] overflow-hidden max-sm:hidden">
        <div className="grid grid-cols-2 w-fit">
          <Hexagon place={0} />
          <div />
          <div />
        </div>

        <div className="grid grid-cols-3 w-fit -translate-y-[26%] ">
          <div />
          <Hexagon place={0} />
          <div />
        </div>

        <div className="grid grid-cols-2 w-fit -translate-y-[51.5%] ">
          <Hexagon place={0} />
          <Hexagon place={1} />
        </div>
      </div>
    </div>
  );
}

//to line up repfecly, Hexagons accept place - index of the hexagon in the row
function Hexagon({ place }: { place: number }) {
  const style = { transform: `translateX(-${place * 5}px)` };

  return (
    <div style={style} className="w-fit h-fit">
      <motion.svg
        whileTap={{ scale: 0.85 }}
        width="174"
        height="200"
        viewBox="0 0 174 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"focus:outline-0 stroke-accent"}
      >
        <path
          d="M89.5 2.59808L170.103 49.134C171.65 50.0271 172.603 51.6778 172.603 53.4641V146.536C172.603 148.322 171.65 149.973 170.103 150.866L89.5 197.402C87.953 198.295 86.047 198.295 84.5 197.402L3.89746 150.866C2.35046 149.973 1.39746 148.322 1.39746 146.536V53.4641C1.39746 51.6778 2.35046 50.0271 3.89746 49.134L84.5 2.59808C86.047 1.70491 87.953 1.70491 89.5 2.59808Z"
          strokeWidth="5"
        />
      </motion.svg>
    </div>
  );
}
