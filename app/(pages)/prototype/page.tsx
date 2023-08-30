"use client";
import dynamic from "next/dynamic";
import GraphComponent from "@/app/modules/TreeMap/TreeMap";
// const DynamicComponentTree = dynamic(
//   () => import("@/app/modules/TreeMap/TreeMap"),
//   { ssr: false }
// );
import React from "react";
const PrototypePage = () => {
  return (
    <div className=" w-full mt-16">
      <GraphComponent />
    </div>
  );
};
export default PrototypePage;
