"use client";

import Roadmap from "@/app/modules/Roadmap/Roadmap";
import RoadmapContext from "@/app/modules/Roadmap/types/RoadmapContext";

export default function RoadmapPage({ params }: { params: { id: string } }) {
  return (
    <div className="h-full min-h-screen w-auto">
      <RoadmapContext.Provider value={{ id: params.id }}>
        <Roadmap />
      </RoadmapContext.Provider>
    </div>
  );
}
