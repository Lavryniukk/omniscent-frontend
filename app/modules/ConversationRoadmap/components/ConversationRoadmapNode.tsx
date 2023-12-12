"use client";
import { SubroadmapNode } from "@/app/shared/entities/Roadmap";
import useConversationStorage from "../../ConversationWindow/storage/ConversationStorage";
import Link from "next/link";

export default function ConversationRoadmapNodeComponent({
  tech,
  array,
  isLocked,
  isCurrent,
  roadmapId,
  subroadmapTitle,
}: {
  tech: SubroadmapNode;
  roadmapId: string;
  isLocked: boolean;
  array: SubroadmapNode[];
  isCurrent: boolean;
  subroadmapTitle: string;
}) {
  let isLast: boolean = false;
  if (array[array.length - 1] == tech) {
    isLast = true;
  }

  return (
    <li className="w-full flex items-center  justify-center flex-col min-w-[200px]">
      <Link
        href={`/workspace/conversation/${roadmapId}/${subroadmapTitle}/${tech.conversation_id}`}
        className={`conversation_roadmap__node ${
          isLocked && "hover:cursor-not-allowed"
        } ${tech.isCompleted && "roadmap__node--completed"} ${
          isCurrent && "bg-secondary"
        }
		  `}
      >
        {tech.title}
      </Link>

      {!isLast && (
        <div
          className={`block w-0.5 select-none h-8 bg-accent  ${
            tech.isCompleted && "opacity-60"
          }`}
        />
      )}
    </li>
  );
}
