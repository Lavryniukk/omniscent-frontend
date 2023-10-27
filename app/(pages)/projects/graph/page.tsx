"use client";
import SideBar from "@/app/modules/sidebar/Sbar";
import useGraphStore from "@/app/shared/storages/graphStorage";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const DynamicGraphTree = dynamic(
  () => import("@/app/modules/graph/GraphTree"),
  { ssr: false }
);
const RoadmapPage = () => {
  const { drag, showSidebar, closeSidebar } = useGraphStore();

  let handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    drag(event);
  };
  // document.addEventListener("click", closeSidebar);
  useEffect(() => {
    document.addEventListener("click", closeSidebar);

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, [showSidebar]);

  return (
    <div
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
      className="w-full bg-neutral-900 h-screen overflow-hidden select-none"
    >
      <DynamicGraphTree />
      <SideBar />
    </div>
  );
};

export default RoadmapPage;
