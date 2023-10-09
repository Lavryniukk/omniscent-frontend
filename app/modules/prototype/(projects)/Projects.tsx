"use client";
import { GoPlus } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "./helpers/fetchProjects";
import { Project } from "@/app/shared/types/projects";
import Slot from "@/app/components/projectComponents/projectSlot/ProjectSlot";
let Projects = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["userProjects"],
    queryFn: fetchProjects,
  });

  let result;
  if (isLoading) {
    result = (
      <Slot>
        <div className="w-10 h-10 rounded-full border-2 border-secondary-700 border-t-accent animate-spin"></div>
      </Slot>
    );
  } else if (isError) {
    result = (
      <Slot>
        <p className="text-lg ml-2 text-accent-300 font-light text-left ">
          An error occured during project loading, try to refresh the page
        </p>
      </Slot>
    );
  } else {
    if (data && data.length > 0) {
      result = data?.map((project: Project) => {
        return (
          <Slot id={project._id}>
            <p className="text-lg ml-2 w-full text-accent-300 font-light text-left ">
              {project.title}
            </p>
          </Slot>
        );
      });
      result.push(
        <Slot>
          <GoPlus />
        </Slot>
      );
    } else if (data?.length === 0) {
      result = (
        <Slot>
          <GoPlus />
        </Slot>
      );
    }
  }
  return <>{result}</>;
};
export default Projects;
