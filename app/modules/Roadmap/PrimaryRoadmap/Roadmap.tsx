import fetchRoadmap from "@/app/modules/Roadmap/api/fetchRoadmap";
import { useQuery } from "@tanstack/react-query";
import SubroadmapInterface from "@/app/shared/entities/Subroadmap";
import RoadmapNode from "./components/RoadmapNode";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";

export default function Roadmap({ id }: { id: string }) {
  const { data, error, isLoading } = useQuery(
    ["roadmap"],
    async () => await fetchRoadmap(id)
  );

  const skeletonCount = 10;

  const skeletonArray = Array.from({ length: skeletonCount }).map(
    (_, index) => (
      <div key={index}>
        <div className="min-w-[200px] w-full h-8 roadmap__node pointer-events-none">
          <Skeleton width="90%" height="20px" rounded="4px" />
        </div>
        {index !== skeletonCount - 1 && (
          <div className="roadmap__arrow mx-auto" />
        )}
      </div>
    )
  );
  return (
    <div className="w-fit mx-auto">
      {!isLoading ? (
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
      ) : (
        <div className="text-text w-fit mx-auto py-20">{skeletonArray}</div>
      )}
    </div>
  );
}
