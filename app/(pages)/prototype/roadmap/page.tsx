"use client";
import SideBar from "@/app/shared/prototypeSideBar/Sbar";
import { treenode } from "@/app/shared/types/node";
import dynamic from "next/dynamic";
import { useState } from "react";
const DynamicComponentTree = dynamic(
  () => import("@/app/modules/prototype/treeMap/TreeMap"),
  { ssr: false }
);
const ChatPage = () => {
  let [showSideBar, setShowSideBar] = useState<boolean>(false);
  let [selectedNode, setSelectedNode] = useState<treenode>();
  let selectNode = (node: treenode) => {
    setSelectedNode(node);
  };
  let toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="w-full h-screen select-none">
      <DynamicComponentTree
        showSideBar={showSideBar}
        toggleSideBar={toggleSideBar}
        selectNode={selectNode}
      />
      <SideBar
        showSideBar={showSideBar}
        selectedNode={selectedNode}
        toggleSideBar={toggleSideBar}
      />
    </div>
  );
};
export default ChatPage;
