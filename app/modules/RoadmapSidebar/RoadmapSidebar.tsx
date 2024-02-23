"use client";
import Link from "next/link";
import LessonRoadmapNodeComponent from "./components/RoadmapSidebarNode";

import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import useSidebar from "./hooks/useSidebar";
import { ChevronDown, MoveLeft } from "lucide-react";
import { RoadmapNode } from "@/app/shared/entities";
import { LessonPageParams } from "@/app/(pages)/workspace/r/[roadmapId]/l/[lessonId]/page";
import { UseQueryResult } from "@tanstack/react-query";

export default function RoadmapSidebar({
  query,
  lessonId,
}: {
  query: UseQueryResult<RoadmapNode, unknown>;
  lessonId: string;
}) {
  const { isOpen, toggleSidebar } = useSidebar();
  const { data: roadmap, isLoading } = query;
  return (
    <>
      <aside
        className={`sidebar w-[15%] min-w-[270px] max-w-[500px] gap-10 flex  py-5 bg-azure-200 dark:bg-azure-950 px-3 flex-col h-full z-20 ${
          isOpen ? "translate-x-0" : "translate-x-[-100%] lg:translate-x-0"
        } duration-500 transition absolute lg:relative overflow-auto`}
      >
        <Link
          href={`/workspace/r/${roadmap?.parent_node_id}`}
          className=" w-fit mx-auto relative  group overflow-hidden  hover:opacity-80  text-azure-800 dark:text-azure-50/50  space-x-2  rounded-lg flex items-center justify-center"
        >
          <MoveLeft size={20} className="rounded-full " />
          <p className="">Back to roadmap</p>
        </Link>

        <h1 className="dark:text-azure-50 text-azure-950 text-2xl text-center">
          {isLoading && <Skeleton width="70%" height="25px" />}
          {roadmap?.title}
        </h1>

        <ul className=" after:absolute relative after:right-[5px]  after:h-[calc(100%-32px)]  after:w-0.5 after:bg-azure-500 after:top-[16px] flex flex-col gap-6 ">
          {isLoading && <RoadmapSidebarSkeleton />}

          {roadmap?.children.map(
            (
              subroadmapNode: RoadmapNode,
              index: number,
              array: RoadmapNode[]
            ) => {
              return (
                <LessonRoadmapNodeComponent
                  roadmapId={roadmap._id}
                  key={index}
                  tech={subroadmapNode}
                  array={array}
                  isCurrent={lessonId === subroadmapNode.lesson_id}
                />
              );
            }
          )}
        </ul>
      </aside>

      <ChevronDown
        onClick={toggleSidebar}
        size={30}
        className={`switch font-semibold cursor-pointer  text-text absolute left-2 block z-50 top-[calc(50%-15px)] duration-500 rotate-90 transition-transform lg:hidden ${
          isOpen ? "translate-x-[220px]" : "translate-x-0 scale-y-[-1]"
        }`}
      />
    </>
  );
}

function RoadmapSidebarSkeleton() {
  const arr = Array.from({ length: 5 }).map((_, index) => (
    <li key={index} className="relative flex flex-col items-start  gap-0">
      <p className="min-w-[200px] max-w-[300px] flex justify-start  w-full p-2  pointer-events-none">
        <Skeleton width="80%" height="20px" />
      </p>
      <div
        className={`rounded-full absolute  w-2 h-2 bg-azure-500 z-10  right-0.5 top-[calc(50%-4px)]`}
      />
    </li>
  ));
  return arr;
}
