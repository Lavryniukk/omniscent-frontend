import { RoadmapNode } from "@/app/entities";
import Link from "next/link";
import CreateNode from "./CreateNode";
export default function RoadmapNode({
  node,
  isLast,
  action,
}: {
  node: RoadmapNode;
  isLast: boolean;
  action: (data: FormData) => Promise<boolean>;
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
      {!isLast && (
        <>
          <div
            className={`block w-0.5 bg-muted-foreground select-none h-8 ${is_completed && "opacity-60"}`}
          />
          <CreateNode action={action} />
          <div
            className={`block w-0.5 bg-muted-foreground select-none h-8 ${is_completed && "opacity-60"}`}
          />
        </>
      )}
    </>
  );
}
