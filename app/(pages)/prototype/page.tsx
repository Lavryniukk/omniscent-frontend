"use client";
import dynamic from "next/dynamic";
import Home from "@/app/modules/homePage/Home";
const DynamicComponentTree = dynamic(
  () => import("@/app/modules/TreeMap/TreeMap"),
  { ssr: false }
);
import React from "react";
const PrototypePage = () => {
  return (
    <div className=" w-full mt-16">
      <DynamicComponentTree />
      <Home />
    </div>
  );
};

export default PrototypePage;
