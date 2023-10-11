"use client";
import { GoPlus } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@/app/modules/ProjectList/types/project";
import { AiOutlineEllipsis } from "react-icons/ai";
import Link from "next/link";
import { fetchProjects } from "./api/fetchProjects";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
let ProjectList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["userProjects"],
    queryFn: fetchProjects,
  });

  let result;
  if (isLoading) {
    result = (
      <Link className="project" href={`.`}>
        <div className="w-10 h-10 rounded-full border-2 border-secondary-700 border-t-accent animate-spin"></div>
      </Link>
    );
  } else if (isError) {
    console.log("This is error", error);
    result = (
      <Link className="project" href={``}>
        <p className="text-lg ml-2 text-accent-300 font-light text-left ">
          An error occured during project loading, check console
        </p>
      </Link>
    );
  } else {
    if (data && data.length > 0) {
      result = data?.map((project: Project) => {
        return <ProjectContainer project={project} />;
      });

      result.push(
        <Link className="project" href="/projects/new">
          <GoPlus className="animate-pulse" />
        </Link>
      );
    }
    //  else if (data?.length === 0) {
    //   result = (
    //     <Link className="project" href="/projects/new">
    //       <GoPlus className="animate-pulse" />
    //     </Link>
    //   );
    // }
  }
  return <>{result}</>;
};
export default ProjectList;
