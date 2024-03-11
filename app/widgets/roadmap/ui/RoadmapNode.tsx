import { RoadmapNode } from "@/app/entities";
import Link from "next/link";
export default function RoadmapNodeComponent({
  node,
  isLast,
}: {
  node: RoadmapNode;
  isLast: boolean;
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
      {!isLast && <ArrowDown isCompleted={is_completed} />}
    </>
  );
}
function ArrowDown({ isCompleted }: { isCompleted: boolean }) {
  return (
    <div
      className={`block w-0.5 divider bg-muted-foreground select-none h-20  ${isCompleted && "opacity-60"}`}
    />
  );
}
