import ProjectSkeleton from "@/app/UI/loading/ProjectSkeleton/ProjectSkeleton";
import Link from "next/link";

export default function UserRoadmapsLoading() {
  return (
    <>
      <div className="w-3/4 mx-auto space-y-5 p-5 h-fit py-20">
        <ProjectSkeleton />
        <ProjectSkeleton />
        <ProjectSkeleton />
      </div>
      <p className="mx-auto text-center underline-offset-2 select-none underline text-accent-600">
        <Link
          href="/projects/create"
          className="hover:text-accent transition-colors duration-200"
        >
          Create new project
        </Link>
      </p>
    </>
  );
}
