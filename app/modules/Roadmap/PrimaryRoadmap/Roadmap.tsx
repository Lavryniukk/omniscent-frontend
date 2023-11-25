import fetchRoadmap from "@/app/modules/Roadmap/api/fetchRoadmap";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import SubroadmapInterface from "@/app/shared/entities/Subroadmap";
import RoadmapNode from "./components/RoadmapNode";

export default function Roadmap({ id }: { id: string }) {
  const { data, error } = useQuery(
    ["roadmap"],
    async () => await fetchRoadmap(id)
  );
  return (
    <div className="w-fit mx-auto">
      <ul className="text-text mx-auto w-fit py-20 h-fit flex items-center justify-center flex-col ">
        {!error && data ? (
          data.sub_roadmap_list.map(
            (
              tech: SubroadmapInterface,
              index: number,
              array: SubroadmapInterface[]
            ) => {
              let current;
              const prevTech = array[index - 1];
              let isLast: boolean = false;
              if (array[array.length - 1] == tech) {
                console.log("found last:", tech);
                isLast = true;
              }
              if (index === 0 && !tech.isCompleted) {
                current = true;
              } else {
                if (prevTech?.isCompleted && !tech.isCompleted) {
                  current = true;
                } else current = false;
              }
              return (
                <RoadmapNode
                  id={data._id}
                  isLast={isLast}
                  key={index}
                  current={current}
                  subroadmap={tech}
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
