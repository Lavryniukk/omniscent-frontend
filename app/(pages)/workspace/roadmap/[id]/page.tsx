import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import FeedbackForm from "@/app/components/FeedbackForm,tsx/FeedbackForm";
import Roadmap from "@/app/modules/Roadmap/PrimaryRoadmap/Roadmap";
import { NavigationButton } from "@/app/shared/components/buttons";

import { Suspense } from "react";

const RoadmapSkeleton = () => (
  <div className="mt-32 flex-col flex items-center justify-center  ">
    {Array.from({ length: 10 }).map((_, index) => (
      <div key={index}>
        <div className="min-w-[200px] max-w-[300px] mx-auto w-full h-8 roadmap-node pointer-events-none">
          <Skeleton width="80%" height="20px" />
        </div>
        {index !== 9 && (
          <div className="block w-0.5 select-none h-20 bg-azure-400 dark:bg-azure-600 mx-auto" />
        )}
      </div>
    ))}
  </div>
);

function RoadmapPage({ params }: { params: { id: string } }) {
  return (
    <div className="h-full py-20 min-h-screen bg-background w-auto">
      <NavigationButton href={"/workspace"} title={"Workspace"} />
      <div className=" flex-col flex items-center p-3 w-80  rounded-lg border-2 text-azure-950 dark:text-azure-50 bg-azure-100 dark:bg-azure-900 border-azure-200 dark:border-azure-800 border-accent mx-auto">
        <h1 className="text-2xl font-inter font-bold">Hint</h1>
        <p className="text-lg text-center font-light">
          Click on any technology to start learning it.
        </p>
      </div>

      <FeedbackForm roadmapId={params.id} />

      <Suspense fallback={<RoadmapSkeleton />}>
        <Roadmap id={params.id} />
      </Suspense>
    </div>
  );
}
export default RoadmapPage;
