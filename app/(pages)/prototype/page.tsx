"use client";
import dynamic from "next/dynamic";

const DynamicComponentTree = dynamic(
  () => import("@/app/modules/TreeMap/TreeMap"),
  { ssr: false }
);
import React from "react";
import GraphComponent from "@/app/modules/TreeMap/TreeMap";
const Home = () => {
  return (
    <div className=" w-full mt-16">
      <DynamicComponentTree />
    </div>
  );
};

export default Home;
