import SubroadmapInterface from "@/app/shared/entities/Subroadmap";
import Link from "next/link";

export default function RoadmapNode({
  id,
  current,
  tech,
  isLast,
}: {
  id: string;
  current: boolean;
  tech: SubroadmapInterface;
  isLast: boolean;
}) {
  return (
    <li className="w-full flex items-center justify-center flex-col min-w-[200px]">
      <Link
        href={`/workspace/roadmap/${id}/${tech.title}`}
        className={`roadmap__node ${
          tech.isCompleted && "roadmap__node--complete"
        } ${current && "roadmap__node--current"}
		  `}
      >
        {tech.title}
      </Link>

      {!isLast && (
        <div className={`roadmap__arrow ${tech.isCompleted && "opacity-60"}`} />
      )}
    </li>
  );
}
