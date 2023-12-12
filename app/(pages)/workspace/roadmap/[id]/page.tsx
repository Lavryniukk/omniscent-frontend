"use client";

import Roadmap from "@/app/modules/Roadmap/PrimaryRoadmap/Roadmap";
import { NavigationButton } from "@/app/shared/components/buttons";
function RoadmapPage({ params }: { params: { id: string } }) {
  return (
    <div className="h-full min-h-screen w-auto">
      <NavigationButton href={"/workspace"} title={"Workspace"} />
      <Roadmap id={params.id} />
    </div>
  );
}
export default RoadmapPage;
