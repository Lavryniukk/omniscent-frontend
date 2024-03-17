"use client";
import Link from "next/link";
import LessonRoadmapNodeComponent from "./ui/RoadmapSidebarNode";

import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import useSidebar from "./hooks/useSidebar";
import { ChevronDown, MoveLeft } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchRoadmap } from "@/app/entities/roadmap-node/api";
import { ThemeSwitcher } from "@/app/features";

export default function RoadmapSidebar({
  roadmapId,
  id,
}: {
  roadmapId: string;
  id: string;
}) {
  const { data: roadmap, isLoading } = useQuery({
    queryKey: ["roadmap", roadmapId],
    queryFn: () => fetchRoadmap(roadmapId),
  });

  //FIXME help me
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <>
      <aside
        className={` w-[270px] gap-10 flex  py-5 bg-background px-3 flex-col h-full z-20 ${
          isOpen ? "translate-x-0" : "translate-x-[-100%] lg:translate-x-0"
        } duration-500 transition absolute lg:relative overflow-auto`}
      >
        <NavigationButton
          href={`/workspace/?roadmapId=${roadmap?.parent_node_id}`}
        />

        <h1 className="text-2xl mx-auto text-center">
          {isLoading && <Skeleton className="w-[70%] h-6" />}
          {roadmap?.title}
        </h1>

        <ul className=" after:absolute relative after:-right-[1px]  after:h-[calc(100%-32px)]  after:w-0.5 after:top-[16px]  flex flex-col gap-6 ">
          {isLoading && <RoadmapSidebarSkeleton />}
          {roadmap?.children.map((subroadmapNode, index) => (
            <LessonRoadmapNodeComponent
              roadmapId={roadmap._id}
              key={roadmap._id + index}
              tech={subroadmapNode}
              isCurrentLesson={id === subroadmapNode.lesson_id}
              isCurrentQuiz={id === subroadmapNode.quiz_id}
            />
          ))}
        </ul>
      </aside>

      <ChevronDown
        onClick={toggleSidebar}
        size={30}
        className={`switch font-semibold cursor-pointer  text-text absolute left-2 block z-50 top-[calc(50%-15px)] duration-500 rotate-90 transition-transform lg:hidden ${
          isOpen ? "translate-x-[225px]" : "translate-x-0 scale-y-[-1]"
        }`}
      />
    </>
  );
}

function NavigationButton({ href }: { href: string }) {
  return (
    <section className="flex gap-2">
      <Link
        href={href}
        className=" w-fit mx-auto relative  group overflow-hidden  hover:opacity-80    space-x-2  rounded-lg flex items-center justify-center"
      >
        <MoveLeft size={20} className="rounded-full " />
        <p className="">Back to workspace</p>
      </Link>
      <ThemeSwitcher />
    </section>
  );
}

function RoadmapSidebarSkeleton() {
  const arr = Array.from({ length: 5 }).map((_, index) => (
    <li key={index} className="relative flex flex-col items-start  gap-0">
      <p className="min-w-[200px] max-w-[300px] flex justify-start  w-full p-2  pointer-events-none">
        <Skeleton className="w-4/5 h-5" />
      </p>
      <div
        className={`rounded-full absolute  w-2 h-2  z-10  -right-0.5 top-[calc(50%-4px)]`}
      />
    </li>
  ));
  return arr;
}
