import RoadmapNodeComponent from "./components/RoadmapNode";
import { RoadmapNode } from "@/app/shared/entities";
import { fetchRoadmap } from "@/app/shared/api/roadmaps/fetchRoadmapById";

export default async function Roadmap({ id }: { id: string }) {
  try {
    const roadmap = await fetchRoadmap(id);
    return (
      <div className="w-fit mx-auto pt-32 pb-48">
        <ul className="text-text mx-auto w-fit h-fit flex items-center justify-center flex-col">
          {roadmap.children.map(
            (roadmapNode: RoadmapNode, index: number, array: RoadmapNode[]) => {
              const isLast = index === array.length - 1;
              const isFirst = index === 0;
              const prevTechCompleted = isFirst
                ? false
                : array[index - 1].is_completed;
              const current = isFirst
                ? !roadmapNode.is_completed
                : prevTechCompleted && !roadmapNode.is_completed;

              return (
                <RoadmapNodeComponent
                  id={roadmap._id}
                  isLast={isLast}
                  key={roadmap._id + index}
                  current={current}
                  subroadmap={roadmapNode}
                />
              );
            }
          )}
        </ul>
      </div>
    );
  } catch (err) {
    console.error(err);
    return (
      <div className="mx-auto text-center text-text mt-20 text-3xl">
        Roadmap not found
      </div>
    );
  }
}
