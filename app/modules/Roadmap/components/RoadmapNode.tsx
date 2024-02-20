import { RoadmapNode } from "@/app/shared/entities";
import Link from "next/link";
export default function RoadmapNodeComponent({
  subroadmap,
  isLast,
}: {
  subroadmap: RoadmapNode;
  isLast: boolean;
}) {
  const { title, children, is_completed, _id } = subroadmap;
  return (
    <li className="w-full flex relative  items-center justify-center flex-col min-w-[200px]">
      <Link
        className={`roadmap-node hover:scale-105 transition-all duration-200 ${is_completed && "line-through"}`}
        href={`/workspace/r/${_id}/l/${children[0]?.lesson_id}`}
      >
        {title}
      </Link>
      <ArrowDown isLast={isLast} isCompleted={is_completed} />
    </li>
  );
}
function ArrowDown({
  isLast,
  isCompleted,
}: {
  isLast: boolean;
  isCompleted: boolean;
}) {
  return (
    !isLast && (
      <div
        className={`block w-0.5 select-none h-20 bg-azure-400 dark:bg-azure-600 ${isCompleted && "opacity-60"}`}
      />
    )
  );
}
