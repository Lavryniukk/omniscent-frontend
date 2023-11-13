"use client";

import Roadmap from "@/app/modules/Roadmap/PrimaryRoadmap/Roadmap";
export default function RoadmapPage({ params }: { params: { id: string } }) {
  return (
    <div className="h-full min-h-screen w-auto">
      <Roadmap id={params.id} />
    </div>
  );
}
