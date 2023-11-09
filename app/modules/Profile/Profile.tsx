import { useUser } from "@auth0/nextjs-auth0/client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { fetchProjects } from "./api/fetchProjects";
import { Project } from "./types/project";

export default function ProfilePage() {
  const [projects, setProjects] = useState<Project[] | undefined>(undefined);
  const { user } = useUser();
  const pic = user?.picture ?? ""; // Fallback to an empty string if picture is not available.

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["userProjects"],
  //   queryFn: async () => await fetchProjects(),
  // });
  useEffect(() => {
    fetchProjects().then((data) => setProjects(data));
  }, []);

  console.log("Projects:", projects);

  const arr: [] | Project[] = [
    // {
    //   _id: "new_id_0",
    //   owner_id: "google-oauth2|116000322186574711788",
    //   title: "New Title 1",
    //   node_list: [
    //     { title: "HTML" },
    //     { title: "CSS" },
    //     { title: "JavaScript" },
    //     { title: "Vue" },
    //     { title: "Vuex" },
    //     { title: "Vue" },
    //     { title: "Axios" },
    //     { title: "ESLint" },
    //     { title: "Jest" },
    //     { title: "Npm" },
    //   ],
    //   __v: 0,
    // },
    // {
    //   _id: "new_id_1",
    //   owner_id: "google-oauth2|116000322186574711788",
    //   title: "New Title 2",
    //   node_list: [
    //     { title: "HTML" },
    //     { title: "CSS" },
    //     { title: "JavaScript" },
    //     { title: "Vue" },
    //     { title: "Vuex" },
    //     { title: "Vue" },
    //     { title: "Axios" },
    //     { title: "ESLint" },
    //     { title: "Jest" },
    //     { title: "Npm" },
    //   ],
    //   __v: 0,
    // },
    // {
    //   _id: "new_id_2",
    //   owner_id: "google-oauth2|116000322186574711788",
    //   title: "New Title 3",
    //   node_list: [
    //     { title: "HTML" },
    //     { title: "CSS" },
    //     { title: "JavaScript" },
    //     { title: "Vue" },
    //     { title: "Vuex" },
    //     { title: "Vue" },
    //     { title: "Axios" },
    //     { title: "ESLint" },
    //     { title: "Jest" },
    //     { title: "Npm" },
    //   ],
    //   __v: 0,
    // },
    // {
    //   _id: "new_id_3",
    //   owner_id: "google-oauth2|116000322186574711788",
    //   title: "New Title 4",
    //   node_list: [
    //     { title: "HTML" },
    //     { title: "CSS" },
    //     { title: "JavaScript" },
    //     { title: "Vue" },
    //     { title: "Vuex" },
    //     { title: "Vue" },
    //     { title: "Axios" },
    //     { title: "ESLint" },
    //     { title: "Jest" },
    //     { title: "Npm" },
    //   ],
    //   __v: 0,
    // },
  ];

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-background mx-auto mt-20 px-2 h-screen sm:min-w-[420px] sm:container ">
      <div className="h-fit w-full flex flex-col gap-10 sm:flex-row justify-between sm:gap-4">
        <div className="space-y-10 sm:min-w-[300px] w-full mx-auto sm:w-1/4">
          <div className="flex flex-col items-start bg-secondary p-6 rounded-lg shadow-lg">
            <img
              src={pic}
              alt="User profile"
              className="rounded-full border-4 border-accent w-40 h-40"
            />
            <h2 className="mt-4 text-4xl sm:text-3xl font-bold text-text">
              {user.name}
            </h2>
            <p className="text-base sm:text-sm text-accent">@{user.nickname}</p>
          </div>
          <div className=" w-full sm:max-w-xl">
            <form className="bg-secondary p-6 rounded-lg shadow-lg">
              <div className="">
                <label
                  htmlFor="bio"
                  className="block text-xl sm:text-lg text-text mb-2"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={3}
                  className="w-full p-2 rounded min-h-[40px] text-lg sm:text-base h-fit max-h-[150px] bg-background text-text"
                  placeholder="Tell us your story"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="p-6 bg-secondary  rounded-lg">
            <h2 className="text-text text-xl sm:text-lg mb-2">Achievments</h2>
            <div className="h-20 bg-background rounded w-full flex "></div>
          </div>
        </div>
        <div className="w-full sm:w-8/12 mx-auto border-secondary flex flex-col overflow-hidden rounded-lg">
          <div className="h-20 w-full bg-background flex items-center justify-center text-center ">
            <p className="font-semibold text-text text-4xl sm:text-3xl">{`${user.name}'s Projects`}</p>
          </div>
          {projects && projects.length > 0 ? (
            <div className="h-fit grid grid-cols-1 lg:grid-cols-2 p-1 gap-4">
              {projects.map((item, index, array) => {
                if (index !== array.length - 1) {
                  return (
                    <Link
                      href={"/"}
                      key={item._id}
                      className="border rounded border-accent p-6"
                    >
                      <div className="text-accent text-2xl text-center">
                        {item.title}
                      </div>
                    </Link>
                  );
                } else
                  return (
                    <Fragment key={item._id}>
                      <Link
                        href={"/"}
                        className="border rounded border-accent p-6 hover:border-accent-300 transition duration-200"
                      >
                        <div className="text-accent text-2xl text-center">
                          {item.title}
                        </div>
                      </Link>
                      <Link
                        href={"/create"}
                        className="border rounded bg-text text-background p-6 hover:bg-background hover:text-text transition duration-300"
                      >
                        <div className="text-inherit text-2xl text-center font-medium">
                          Create new
                        </div>
                      </Link>
                    </Fragment>
                  );
              })}
            </div>
          ) : (
            <div className="h-full text-text flex w-full justify-center items-center">
              <Link
                href={"/projects/create"}
                className="hover:bg-text hover:text-background font-medium transition duration-300 text-base md:text-2xl block border border-text p-3 md:p-4 rounded"
              >
                {`Embark on the journey ->`}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
