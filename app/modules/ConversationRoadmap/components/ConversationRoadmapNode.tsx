"use client";
import { RoadmapNode } from "@/app/shared/entities";
import Link from "next/link";
import useConversationStorage from "../../ConversationWindow/storage/ConversationStorage";

export default function ConversationRoadmapNodeComponent({
  tech,
  array,
  isCurrent,
  roadmapId,
  subroadmapId,
}: {
  tech: RoadmapNode;
  roadmapId: string;
  array: RoadmapNode[];
  isCurrent: boolean;
  subroadmapId: string;
}) {
  let isLast: boolean = false;
  if (array[array.length - 1] == tech) {
    isLast = true;
  }
  const { isStreaming } = useConversationStorage();
  return (
    <li className="w-full flex items-center justify-center flex-col min-w-[200px]">
      <Link
        aria-disabled={isStreaming}
        href={`/workspace/conversation/${roadmapId}/${subroadmapId}/${tech.conversation_id}`}
        className={`conversation-roadmap-node ${
          isStreaming && "hover:cursor-not-allowed"
        } ${tech.is_completed && "line-through"} ${isCurrent && " bg-azure-300 font-semibold dark:bg-azure-800"}
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
