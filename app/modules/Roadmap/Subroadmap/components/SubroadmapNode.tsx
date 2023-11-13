import SubroadmapInterface from "@/app/shared/entities/Subroadmap";
import Link from "next/link";

export default function RoadmapNode({
  current,
  tech,
  isLast,
}: {
  current: boolean;
  tech: { title: string; isCompleted: boolean };
  isLast: boolean;
}) {
  console.log(tech);
  return (
    <li className="w-full flex items-center  justify-center flex-col min-w-[200px]">
      <Link
        href={`/workspace/roadmap/`}
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
