import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import RoadmapNodeComponent from "./components/RoadmapNode";
import RoadmapNode from "@/app/shared/entities/Roadmap";
import { useRoadmap } from "../../../shared/hooks/useRoadmap";

export default function Roadmap({ id }: { id: string }) {
  const { data, isLoading, error } = useRoadmap(id);

  //TODO: Move this shit into another component
  const skeletonArray = Array.from({ length: 10 }).map((_, index) => (
    <div key={index}>
      <div className="min-w-[200px] w-full h-8 roadmap__node pointer-events-none">
        <Skeleton width="90%" height="20px" rounded="4px" />
      </div>
      {index !== 9 && <div className="roadmap__arrow mx-auto" />}
    </div>
  ));

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
            data.children.map(
              (
                roadmapNode: RoadmapNode,
                index: number,
                array: RoadmapNode[]
              ) => {
                let current;
                const prevTech = array[index - 1];
                let isLast: boolean = false;
                if (array[array.length - 1] == roadmapNode) {
                  isLast = true;
                }
                if (index === 0 && !roadmapNode.is_completed) {
                  current = true;
                } else {
                  if (prevTech?.is_completed && !roadmapNode.is_completed) {
                    current = true;
                  } else current = false;
                }
                return (
                  <RoadmapNodeComponent
                    id={data._id}
                    isLast={isLast}
                    key={index}
                    current={current}
                    subroadmap={roadmapNode}
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
