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
    <li className="w-full flex items-center justify-center flex-col min-w-[200px]">
      <Link
        aria-disabled={isStreaming}
        href={`/workspace/r/${roadmapId}/l/${tech.lesson_id}`}
        className={`lesson-roadmap-node ${
          isStreaming && "hover:cursor-not-allowed"
        } ${tech.is_completed && "line-through"} ${isCurrent && " bg-azure-300 font-semibold after:w-0.5 after:h-full after:absolute after:-left-2 relative dark:after:bg-azure-400 after:bg-azure-700 dark:bg-azure-800"}
		  `}
      >
        {tech.title}
      </Link>

      {!isLast && (
        <div
          className={`block w-0.5 select-none after:absolute relative after:bottom-0 after:w-2 after:h-2 after:border-b-2 after:rotate-45 after:left-[calc(50%-4px)] after:border-r-2 after:border-azure-700 h-8 my-1 bg-azure-700  ${
            tech.is_completed && "opacity-60"
          }`}
        />
      )}
    </li>
  );
}
