import RoadmapNodeInterface from "@/app/shared/entities/RoadmapNode";
import Node from "@/app/shared/entities/RoadmapNode";
import Link from "next/link";

export default function RoadmapNode({
  tech,
  array,
  index,
  href,
  current_tech_title,
}: {
  tech: Node;
  array: RoadmapNodeInterface[];
  index: number;
  href: string;
  current_tech_title: string;
}) {
  let isLast: boolean = false;
  if (array[array.length - 1] == tech) {
    isLast = true;
  }
  const prevTech = array[index - 1];
  current_tech_title = current_tech_title.replaceAll("%20", " ");
  console.log(tech.title, "and", current_tech_title);
  return (
    <li className="w-full flex items-center  justify-center flex-col min-w-[200px]">
      <Link
        href={href}
        className={`conversation_roadmap__node ${
          tech.isCompleted && "roadmap__node--completed"
        } ${current_tech_title === tech.title && "bg-secondary"}
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
