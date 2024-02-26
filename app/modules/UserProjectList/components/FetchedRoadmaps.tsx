import Link from "next/link";
import ProjectContainer from "./ProjectContainer";
import { RoadmapNode } from "@/app/shared/entities";
import Button from "@/app/shared/ui/buttons/Button";

export default function FetchedRoadmaps({
  roadmaps,
}: {
  roadmaps: Array<RoadmapNode>;
}) {
  return (
    <>
      <div className="container xs:mx-auto space-y-5 p-5 h-fit py-20 flex flex-col items-center">
        {roadmaps.map((roadmap: RoadmapNode) => (
          <ProjectContainer key={roadmap._id} roadmap={roadmap} />
        ))}
      </div>

      <Button variant="ghost" href="/workspace/new">
        Create new
      </Button>
    </>
  );
}
