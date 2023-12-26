"use client";
import { useQuery } from "@tanstack/react-query";
import ProjectsNotFound from "./components/ProjectsNotFound/ProjectsNotFound";
import { fetchProjects } from "./api/fetchProjects";
import FetchedRoadmaps from "./components/FetchedRoadmaps/FetchedRoadmaps";
import UserRoadmapsLoading from "./components/UserRoadmapsLoading/UserRoadmapsLoading";
import ErrorAlert from "@/app/UI/alerts/ErrorAlert/ErrorAlert";

import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import Button from "@/app/UI/buttons/Button";

// Initialize an array 'arr' containing an example project.

export default function UserProjects() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userProjects"],
    queryFn: async () => await fetchProjects(),
  });

  return (
    <div className="mx-auto flex items-center flex-col gap-5 w-full min-w-[30px] py-16 sm:w-1/3 max-w-[600px] sm:min-w-[500px] sm:px-5 sm:py-16 font-inter h-fit border-2 border-accent rounded-lg relative">
      <h1 className="text-4xl text-center font-bold mx-auto text-text  font-inter">
        {isLoading
          ? "Loading..."
          : error
            ? "Whoops, troubles. If they persist, try resigning in."
            : !data?.length
              ? "Create your first project"
              : "Your learning projects"}
      </h1>
      <LanguageSelector />
      {error ? (
        <>
          <Button callback={() => location.reload()}>Retry</Button>
          <ErrorAlert message="An error occurred while loading your projects. Please try again later." />
        </>
      ) : isLoading ? (
        <UserRoadmapsLoading />
      ) : data?.length ? (
        <FetchedRoadmaps roadmaps={data} />
      ) : (
        <ProjectsNotFound /> // Render the ProjectsNotFound component if 'arr' is empty.
      )}
    </div>
  );
}
