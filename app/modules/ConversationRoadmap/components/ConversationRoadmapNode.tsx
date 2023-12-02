"use client";
import RoadmapNodeInterface from "@/app/shared/entities/SubroadmapNode";
import Node from "@/app/shared/entities/SubroadmapNode";
import Link from "next/link";
import useConversationStorage from "../../ConversationWindow/storage/ConversationStorage";

export default function RoadmapNode({
  tech,
  array,
  href,
  isLocked,
  current_tech_title,
}: {
  tech: Node;
  isLocked: boolean;
  array: RoadmapNodeInterface[];
  href: string;
  current_tech_title: string;
}) {
  let isLast: boolean = false;
  if (array[array.length - 1] == tech) {
    isLast = true;
  }
  const selectConversation = useConversationStorage(
    (state) => state.selectConversation
  );

  current_tech_title =
    current_tech_title && current_tech_title.replaceAll("%20", " ");
  return (
    <li className="w-full flex items-center  justify-center flex-col min-w-[200px]">
      <div
        // href={href}
        onClick={() => {
          selectConversation(tech);
        }}
        className={`conversation_roadmap__node ${
          isLocked && "hover:cursor-not-allowed"
        } ${tech.isCompleted && "roadmap__node--completed"} ${
          current_tech_title === tech.title && "bg-secondary"
        }
		  `}
      >
        {tech.title}
      </div>

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
