"use client";
import { RoadmapNode } from "@/app/shared/entities";
import useLessonStorage from "@/app/shared/stores/lessonStorage";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LessonRoadmapNodeComponent({
  tech,
  isCurrent,
  roadmapId,
}: {
  tech: RoadmapNode;
  roadmapId: string;
  isCurrent: boolean;
}) {
  const { isStreaming } = useLessonStorage();
  const [isOpened, setIsOpened] = useState(false);
  return (
    <li
      className={`lesson-roadmap-node ${isCurrent && "after:h-full"} transition-all duration-200  ${isOpened ? "h-40" : "h-10"}  group`}
    >
      <section className="flex relative justify-between  items-center  w-full">
        <Link
          aria-disabled={isStreaming}
          href={`/workspace/r/${roadmapId}/l/${tech.lesson_id}`}
          className={`w-fit ${
            isStreaming && "hover:cursor-not-allowed"
          } ${tech.is_completed && "line-through"} 
  		  `}
        >
          <p className="hover:opacity-80">{tech.title}</p>
        </Link>

        <form className="relative">
          <ChevronDownIcon className={`${isOpened && "rotate-180"}`} />
          <input
            checked={isOpened}
            onChange={() => setIsOpened(!isOpened)}
            className="absolute peer top-0 cursor-pointer opacity-0 w-6 h-6"
            type="checkbox"
          />
        </form>
        <div
          className={`rounded-full absolute group-hover:scale-150 transition-transform duration-200 w-2 h-2 bg-azure-500 ${isCurrent && "dark:bg-azure-400 bg-azure-700 scale-150"} z-10  -right-5 top-[calc(50%-4px)]`}
        />
      </section>
      <section
        className={`w-full flex flex-col items-center justify-center  transition-all duration-200 h-20 ${isOpened ? " opacity-100" : "opacity-0"}  `}
      >
        <p>You are already on this</p>
      </section>
    </li>
  );
}
