"use server";
import { NavigationButton } from "@/app/shared/components/buttons";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { fetchRoadmaps } from "@/app/entities/roadmap-node/api";
import RoadmapsNotFound from "./ui/RoadmapsNotFound";
import Hint from "./ui/Hint";
import RoadmapList from "./ui/RoadmapList";

async function WorkspacePage() {
  const roadmaps = await fetchRoadmaps();
  const isEmpty = roadmaps.length === 0;
  return (
    <div className="flex flex-col h-screen  items-center justify-between mt-20">
      <NavigationButton href={"/"} title={"Home"} />
      <div className="flex flex-col pt-10 w-min items-center min-w-[350px] gap-10 mx-auto h-fit">
        <Hint />
        <div className="mx-auto flex items-center flex-col gap-5 w-full min-w-[30px] py-16 sm:w-1/3 max-w-[600px] sm:min-w-[500px] sm:px-5 sm:py-16 font-inter h-fit dark:border-azure-800/70 dark:border-2 shadow-xl rounded-lg relative">
          <h1 className="text-4xl text-center font-bold mx-auto text-azure-950 dark:text-azure-50 font-inter">
            Your projects
          </h1>

          {!isEmpty ? (
            <RoadmapList roadmaps={roadmaps} />
          ) : (
            <RoadmapsNotFound />
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkspacePage;

function Loading() {
  return (
    <div className="w-full mx-auto space-y-10 p-5 h-fit py-20">
      <Skeleton height="40px" width="150px" />
      <div className="space-y-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="dark:border bg-azure-100 shadow-xl rounded-lg dark:bg-azure-900 dark:border-azure-700 p-5  min-h-[60px] flex items-center justify-center"
          >
            <Skeleton width={"75%"} height={"24px"} />
          </div>
        ))}
      </div>
      <Skeleton height="20px" width="100px" />
    </div>
  );
}
