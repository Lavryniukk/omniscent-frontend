"use client";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/app/modules/TreeMap/TreeMap"),
  { ssr: false }
);
import React from "react";
import GraphComponent from "@/app/modules/TreeMap/TreeMap";
const Home = () => {
  console.log("rendered");
  return (
    <div className="w-1/2 mx-auto">
      <DynamicComponentWithNoSSR />
    </div>
  );
};

export default Home;
