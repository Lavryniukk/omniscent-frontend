"use client";
import PageGradient from "@/app/UI/PrototypePageGradient";
import Grid from "@/app/components/prototypeComponents/PrototypeGrid";
import PrototypeMain from "@/app/modules/prototype/PrototypeHome";
import useGraphStore from "@/app/shared/storages/graphStorage";
import Image from "next/image";
import { useRef } from "react";
let PrototypePage = () => {
  const getGraph = useGraphStore((state) => state.getGraph);
  let inputValue = useRef<string>();
  return (
    <div className=" border border-accent items-center">
      <PageGradient
        left="/images/prototypebg-left.png"
        right="/images/prototypebg-right.png"
      />
      <Grid />
      <PrototypeMain />
      <form
        className="mx-auto border border-accent rounded-lg bg-secondary w-1/4 h-20"
        onSubmit={(e) => {
          e.preventDefault();
          getGraph(inputValue.current);
        }}
      >
        <input
          onChange={(e) => {
            inputValue.current = e.target.value;
          }}
          className="w-3/4 h-full bg-secondary text-text outline-none border-2 border-accent rounded-lg "
        >
          {inputValue.current}
        </input>
        <button className="w-1/4 ">SEND</button>
      </form>
    </div>
  );
};
export default PrototypePage;
