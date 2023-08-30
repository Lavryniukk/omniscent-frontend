"use client";
import dynamic from "next/dynamic";

const DynamicComponentTree = dynamic(
  () => import("@/app/modules/TreeMap/TreeMap"),
  { ssr: false }
);
import React from "react";
const PrototypePAge = () => {
  return (
    <div className=" w-full mt-16">
      <DynamicComponentTree />
    </div>
  );
};

export default PrototypePAge;
