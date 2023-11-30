import Node from "@/app/shared/entities/SubroadmapNode";
import SubroadmapInterface from "@/app/shared/entities/Subroadmap";
import Link from "next/link";

export default function RoadmapNode({
  current,
  tech,
  isLast,
  roadmap_id,
  subroadmap_title,
}: {
  current: boolean;
  tech: Node;
  isLast: boolean;
  roadmap_id: string;
  subroadmap_title: string;
}) {
  return (
    <li className="w-full flex items-center  justify-center flex-col min-w-[200px]">
      <Link
        href={`/workspace/conversation/${roadmap_id}/${subroadmap_title}/${tech.conversation_id}/${tech.title}`}
        className={`roadmap__node ${
          tech.isCompleted && "roadmap__node--complete"
        } ${current && "roadmap__node--current"}
		  `}
      >
        {tech.title}
      </Link>

      {!isLast && (
        <div
          className={`roadmap__arrow  ${tech.isCompleted && "opacity-60"}`}
        />
      )}
    </li>
  );
}
