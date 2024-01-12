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
    <li className="w-full flex items-center  justify-center flex-col min-w-[200px]">
      <Link
        href={`/workspace/conversation/${roadmapId}/${subroadmapId}/${tech.conversation_id}`}
        className={`conversation_roadmap__node ${
          isStreaming && "hover:cursor-not-allowed"
        } ${tech.is_completed && "roadmap__node--completed"} ${
          isCurrent && "bg-secondary"
        }
		  `}
      >
        {tech.title}
      </Link>

      {!isLast && (
        <div
          className={`block w-0.5 select-none h-8 bg-accent  ${
            tech.is_completed && "opacity-60"
          }`}
        />
      )}
    </li>
  );
}
