import Link from "next/link";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import { RoadmapNode } from "@/app/shared/entities";

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

      <p className="mx-auto text-center underline-offset-2 select-none underline text-accent/75">
        <Link
          href="/workspace/create"
          className="hover:text-accent transition-colors duration-200"
        >
          Create new project
        </Link>
      </p>
    </>
  );
}
