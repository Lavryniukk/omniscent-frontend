import fetchRoadmap from "@/app/modules/Roadmap/api/fetchRoadmap";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import SubroadmapInterface from "@/app/shared/entities/Subroadmap";
import SubroadmapNode from "./components/SubroadmapNode";
import fetchSubroadmap from "../api/fetchSubroadmap";
import Node from "@/app/shared/entities/Node";

export default function Roadmap({ id, title }: { id: string; title: string }) {
  const { data, error } = useQuery(
    ["roadmap"],
    async () => await fetchSubroadmap(id, title)
  );
  return (
    <div className="w-fit mx-auto">
      <ul className="text-text mx-auto w-fit py-20 h-fit flex items-center justify-center flex-col ">
        {!error && data ? (
          data.node_list.map(
            (
              tech: Node,

              index: number,
              array: Node[]
            ) => {
              let current;
              let isLast: boolean = false;
              if (array[array.length - 1] == tech) {
                isLast = true;
              }
              const prevTech = array[index - 1];

              if (index === 0 && !tech.isCompleted) {
                current = true;
              } else {
                if (prevTech?.isCompleted && !tech.isCompleted) {
                  current = true;
                } else current = false;
              }
              return (
                <SubroadmapNode
                  key={index}
                  current={current}
                  tech={tech}
                  isLast={isLast}
                  roadmap_id={id}
                  subroadmap_title={title}
                />
              );
            }
          )
        ) : (
          <div className="mx-auto text-center text-text mt-20 text-3xl">
            Roadmap is empty
          </div>
        )}
      </ul>
    </div>
  );
}
