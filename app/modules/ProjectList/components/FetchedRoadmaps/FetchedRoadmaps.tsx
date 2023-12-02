import Link from "next/link";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import RoadmapInterface from "@/app/shared/entities/Roadmap";

export default function FetchedRoadmaps({
  roadmaps,
}: {
  roadmaps: Array<RoadmapInterface>;
}) {
  return (
    <>
      <div className="container xs:mx-auto space-y-5 p-5 h-fit py-20 flex flex-col items-center">
        {/* Map through the 'projects' array and render each project using the 'ProjectContainer' component. */}
        {roadmaps.map((roadmap: RoadmapInterface) => (
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
