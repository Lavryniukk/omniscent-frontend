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
import sendUserData from "./api/sendUserData";

// Initialize an array 'arr' containing an example project.

export default function UserProjects() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userProjects"],
    queryFn: async () => await fetchProjects(),
  });

  const [userData, setUserData] = useState<{
    user_metadata: { bio: { language: string } };
  }>();
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async (id: string) => {
      const res = await fetchUserData(id);
      setUserData(res);
    };
    user && fetchData(user.sub as string);
  }, [user]);

  return (
    <div className="mx-auto w-full min-w-[400px] py-16 sm:w-1/3 max-w-[600px] sm:min-w-[500px] sm:px-5 sm:py-16 font-inter h-fit sm:border-2 border-accent rounded-lg relative">
      <h1 className="text-4xl text-center font-bold mx-auto text-text  font-inter">
        {!isLoading && data?.length
          ? "Your learning projects"
          : "Create your first project"}
      </h1>

      {userData && (
        <div className="absolute top-4 right-4 flex gap-1 justify-center items-center">
          <label className="text-sm text-text/60">
            Prefered learning language
          </label>
          <select
            className="outline-none bg-transparent w-fit text-text/60"
            defaultValue={`${userData.user_metadata.bio.language}`}
            onChange={async (e) => {
              const body = {
                user_metadata: {
                  bio: {
                    ...userData.user_metadata.bio,
                    language: e.target.value,
                  },
                },
              };
              await sendUserData(body);
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
      )}

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
