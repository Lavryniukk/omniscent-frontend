"use client";
import { useQuery } from "@tanstack/react-query";
import ProjectsNotFound from "./components/ProjectsNotFound/ProjectsNotFound";
import { fetchProjects } from "./api/fetchProjects";
import FetchedRoadmaps from "./components/FetchedRoadmaps/FetchedRoadmaps";
import UserRoadmapsLoading from "./components/UserRoadmapsLoading/UserRoadmapsLoading";
import ErrorAlert from "@/app/UI/alerts/ErrorAlert/ErrorAlert";
import Roadmap from "./types/Roadmap";

// Initialize an array 'arr' containing an example project.

export default function UserProjects() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userProjects"],
    queryFn: async () => await fetchProjects(),
  });
  const testIsLoading = false;
  const testRoadmap: Roadmap[] = [
    {
      title: "Roadmap to Web Development",
      _id: "1",
      node_list: [],
      owner_id: "owner123",
    },
    {
      title: "Roadmap to Data Science",
      _id: "2",
      node_list: [],
      owner_id: "owner456",
    },
    {
      title: "Roadmap to Machine Learning",
      _id: "3",
      node_list: [],
      owner_id: "owner789",
    },
  ];
  console.log("Projects", data);
  return (
    <div className="mx-auto w-1/3 max-w-[600px] min-w-[500px] px-5 py-16 font-inter h-fit border-2 border-secondary rounded-2xl">
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
      ) : testIsLoading ? (
        <UserRoadmapsLoading />
      ) : testRoadmap?.length ? (
        <FetchedRoadmaps roadmaps={testRoadmap} />
      ) : (
        <ProjectsNotFound /> // Render the ProjectsNotFound component if 'arr' is empty.
      )}
    </div>
  );
}
