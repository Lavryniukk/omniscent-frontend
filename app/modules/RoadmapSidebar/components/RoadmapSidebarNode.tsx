"use client";
import { RoadmapNode } from "@/app/shared/entities";
import useLessonStorage from "@/app/shared/stores/lessonStorage";
import Link from "next/link";

export default function LessonRoadmapNodeComponent({
  tech,
  array,
  isCurrent,
  roadmapId,
}: {
  tech: RoadmapNode;
  roadmapId: string;
  array: RoadmapNode[];
  isCurrent: boolean;
}) {
  let isLast: boolean = false;
  if (array[array.length - 1] == tech) {
    isLast = true;
  }
  const { isStreaming } = useLessonStorage();
  return (
    <li className="w-full  flex justify-center flex-col min-w-[200px]">
      <Link
        aria-disabled={isStreaming}
        href={`/workspace/r/${roadmapId}/l/${tech.lesson_id}`}
        className={`lesson-roadmap-node ${
          isStreaming && "hover:cursor-not-allowed"
        } ${tech.is_completed && "line-through"} ${isCurrent && " bg-azure-300 font-semibold after:w-0.5 after:h-full after:absolute after:-left-2 relative dark:after:bg-azure-400 after:bg-azure-700 dark:bg-azure-800"}
		  `}
      >
        <p
          className={`font-semibold  `}
        >
          {tech.title}
        </p>
        <div className={`rounded-full absolute  w-2 h-2 bg-azure-500 ${isCurrent && "bg-azure-700"} z-10  right-0.5 top-[calc(50%-4px)]`}/>
      </Link>
    </li>
  );
}
