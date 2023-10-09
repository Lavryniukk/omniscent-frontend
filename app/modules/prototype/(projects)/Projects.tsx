"use client";
import { GoPlus } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "./helpers/fetchProjects";
import { Project } from "@/app/shared/types/projects";
let Projects = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userProjects"],
    queryFn: fetchProjects,
  });

  let result;
  if (isLoading) {
    result = (
      <div className="w-full flex items-center hover:cursor-pointer text-xl justify-center text-accent select-none border h-20 rounded-lg border-dashed border-accent">
        <div className="w-10 h-10 rounded-full border-2 border-secondary-700 border-t-accent animate-spin"></div>
      </div>
    );
  } else if (isError) {
    result = (
      <div className="w-full flex items-center hover:cursor-pointer text-xl justify-center text-accent select-none border h-20 rounded-lg border-dashed border-accent">
        An error occured during loading projects, try refreshing page
      </div>
    );
  } else {
    if (data) {
      result = data?.map((project: Project) => {
        return (
          <div
            key={project._id}
            className="w-full flex  hover:cursor-pointer text-xl items-center text-accent select-none border h-20 rounded-lg border-dashed border-accent"
          >
            <p className="text-lg ml-2 text-accent-300 font-light text-left ">
              {project.title}
            </p>
          </div>
        );
      });
    } else {
      result = (
        <div className="w-full flex items-center hover:cursor-pointer text-xl justify-center text-accent select-none border h-20 rounded-lg border-dashed border-accent">
          <GoPlus />
        </div>
      );
    }
  }
  return <>{result}</>;
};
export default Projects;
