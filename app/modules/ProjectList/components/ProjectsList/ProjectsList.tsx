import Link from "next/link";
import ProjectContainer from "../ProjectContainer/ProjectContainer";

export default function ProjectsList({ projects }: { projects: Array<any> }) {
  return (
    <>
      <div className="w-3/4 mx-auto space-y-5 p-5 h-fit py-20">
        {/* Map through the 'projects' array and render each project using the 'ProjectContainer' component. */}
        {projects.map((elem) => (
          <ProjectContainer key={elem._id} title={elem.title} />
        ))}
      </div>

      <p className="mx-auto text-center underline-offset-2 select-none underline text-accent-600">
        <Link
          href="/projects/new"
          className="hover:text-accent transition-colors duration-200"
        >
          Create new project
        </Link>
      </p>
    </>
  );
}
