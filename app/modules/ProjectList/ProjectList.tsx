"use client";
import { useQuery } from "@tanstack/react-query";
import ProjectsNotFound from "./components/ProjectsNotFound/ProjectsNotFound";
import { fetchProjects } from "./api/fetchProjects";
import FetchedRoadmaps from "./components/FetchedRoadmaps/FetchedRoadmaps";
import UserRoadmapsLoading from "./components/UserRoadmapsLoading/UserRoadmapsLoading";
import ErrorAlert from "@/app/UI/alerts/ErrorAlert/ErrorAlert";
import { useEffect, useState } from "react";
import fetchUserData from "./api/fetchUserData";
import { useUser } from "@auth0/nextjs-auth0/client";

// Initialize an array 'arr' containing an example project.

export default function UserProjects() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userProjects"],
    queryFn: async () => await fetchProjects(),
  });

  const [userData, setUserData] = useState();
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async (id: string) => {
      const res = await fetchUserData(id);
      setUserData(res.user_metadata.bio.language);
      console.log(res.user_metadata.bio.language);
    };
    user && fetchData(user.sub as string);
  }, []);

  return (
    <div className="mx-auto w-full sm:w-1/3 max-w-[600px] sm:min-w-[500px] sm:px-5 sm:py-16 font-inter h-fit sm:border-2 border-secondary rounded-2xl relative">
      <h1 className="text-4xl text-center font-bold mx-auto text-text trancking-tight font-inter">
        {!isLoading && data?.length
          ? "Your learning projects"
          : "Create your first project"}
      </h1>

      <div className="absolute top-4 right-4 flex gap-1 justify-center items-center">
        <label className="text-sm text-text/60">
          Prefered learning language
        </label>
        <select
          className="outline-none bg-transparent w-fit text-text/60"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        >
          <option value="english" className="bg-background text-text/60">
            EN
          </option>
          <option value="russian" className="bg-background text-text/60">
            RU
          </option>
        </select>
      </div>

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
