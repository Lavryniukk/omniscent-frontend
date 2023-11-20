"use client";
import { useQuery } from "@tanstack/react-query";
import ProjectsNotFound from "./components/ProjectsNotFound/ProjectsNotFound";
import { fetchProjects } from "./api/fetchProjects";
import FetchedRoadmaps from "./components/FetchedRoadmaps/FetchedRoadmaps";
import UserRoadmapsLoading from "./components/UserRoadmapsLoading/UserRoadmapsLoading";
import ErrorAlert from "@/app/UI/alerts/ErrorAlert/ErrorAlert";

// Initialize an array 'arr' containing an example project.

export default function UserProjects() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userProjects"],
    queryFn: async () => await fetchProjects(),
  });

  return (
    <div className="mx-auto w-full sm:w-1/3 max-w-[600px] sm:min-w-[500px] sm:px-5 sm:py-16 font-inter h-fit sm:border-2 border-secondary rounded-2xl">
      <h1 className="text-4xl text-center font-bold mx-auto text-text trancking-tight font-inter">
        Your learning projects
      </h1>

      {error ? (
        <>
          <button
            onClick={() => location.reload()}
            className="text-text bg-background border w-fit mx-auto px-12 py-3 block rounded lg hover:text-background hover:bg-text duration-200 transition-colors"
          >
            Retry
          </button>
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
