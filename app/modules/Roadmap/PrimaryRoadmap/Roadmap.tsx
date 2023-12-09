import fetchRoadmap from "@/app/modules/Roadmap/api/fetchRoadmap";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { Subroadmap } from "@/app/shared/entities/Roadmap";
import RoadmapNodeComponent from "./components/RoadmapNode";

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
    <div className="w-fit mx-auto py-32">
      <div className="border flex-col flex items-center p-3 w-80  rounded-lg bg-secondary border-accent mx-auto">
        <h1 className="text-2xl text-text font-inter font-bold">Hint</h1>
        <p className="text-lg text-text text-center font-light">
          Click on any technology to start learning it.
        </p>
      </div>
      {!isLoading ? (
        <ul className="text-text mx-auto w-fit py-20 h-fit flex items-center justify-center flex-col ">
          {!error && data ? (
            data.sub_roadmap_list.map(
              (tech: Subroadmap, index: number, array: Subroadmap[]) => {
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
                  <RoadmapNodeComponent
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
