import { RoadmapNode } from "@/app/shared/entities";
import Link from "next/link";
export default function RoadmapNodeComponent({
  node,
}: {
  node: RoadmapNode;
}) {
  const { title, children, is_completed, _id } = node;
  return (
      <>
        <Link
          className={`roadmap-node hover:scale-105 transition-all duration-200 ${is_completed && "line-through"}`}
          href={`/workspace/r/${_id}/l/${children[0]?.lesson_id}`}
        >
          {title}
        </Link>
        <ArrowDown  isCompleted={is_completed} />
      </>
  );
}
function ArrowDown({
  isCompleted,
}: {
  isCompleted: boolean;
}) {
  return (
      <div
        className={`block w-0.5 divider last:hidden  select-none h-20 bg-azure-400 dark:bg-azure-600 ${isCompleted && "opacity-60"}`}
      />
  );
}
