"use client";
import SideBar from "@/app/shared/prototypeSideBar/Sbar";
import dynamic from "next/dynamic";
import { useState } from "react";
const DynamicComponentTree = dynamic(
  () => import("@/app/modules/prototype/treeMap/TreeMap"),
  { ssr: false }
);
const ChatPage = () => {
  let [showSideBar, setShowSideBar] = useState<boolean>(false)
  let toggleSideBar = () => {
    setShowSideBar(!showSideBar)
  }
  
  return (
    <div className="w-full h-screen items-center select-none">
      <DynamicComponentTree showSideBar={showSideBar} toggleSideBar={toggleSideBar} />
      <SideBar showSideBar={showSideBar} toggleSideBar={toggleSideBar}/>
    </div>
  );
};
export default ChatPage;
