import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import Roadmap from "@/app/modules/Roadmap/PrimaryRoadmap/Roadmap";
import { NavigationButton } from "@/app/shared/components/buttons";
import { Metadata } from "next";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Workspace • Roadmap",
  description:
    "This is a page where a learning path for one of your projects is displayed. You can see all the technologies you need to learn to complete your project.",
};
const RoadmapSkeleton = () => (
  <div className="mt-32">
    {Array.from({ length: 10 }).map((_, index) => (
      <div key={index}>
        <div className="min-w-[200px] max-w-[400px] mx-auto w-full h-8 roadmap__node pointer-events-none">
          <Skeleton width="80%" height="20px" rounded="4px" />
        </div>
        {index !== 9 && <div className="roadmap__arrow mx-auto" />}
      </div>
    ))}
  </div>
);

function RoadmapPage({ params }: { params: { id: string } }) {
  return (
    <div className="h-full py-20 min-h-screen bg-background w-auto">
      <NavigationButton href={"/workspace"} title={"Workspace"} />
      <div className="border flex-col flex items-center p-3 w-80  rounded-lg bg-secondary border-accent mx-auto">
        <h1 className="text-2xl text-text font-inter font-bold">Hint</h1>
        <p className="text-lg text-text text-center font-light">
          Click on any technology to start learning it.
        </p>
      </div>
      <Suspense fallback={<RoadmapSkeleton />}>
        <Roadmap id={params.id} />
      </Suspense>
    </div>
  );
}
export default RoadmapPage;
