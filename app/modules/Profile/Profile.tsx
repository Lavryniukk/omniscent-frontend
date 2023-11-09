import { useUser } from "@auth0/nextjs-auth0/client";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";
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

  const arr = [
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
    <div className="bg-background mx-auto mt-20 px-2 h-screen min-w-[420px] sm:container ">
      <div className="h-fit w-full flex justify-between gap-4">
        <div className="space-y-10 min-w-[400px] w-1/4">
          <div className="flex flex-col items-start bg-secondary p-6 rounded-lg shadow-lg">
            <img
              src={pic}
              alt="User profile"
              className="rounded-full border-4 border-accent w-40 h-40"
            />
            <h2 className="mt-4 text-3xl font-bold text-text">{user.name}</h2>
            <p className="text-sm text-accent">@{user.nickname}</p>
          </div>
          <div className=" w-full max-w-xl">
            <form className="bg-secondary p-6 rounded-lg shadow-lg">
              <div className="">
                <label htmlFor="bio" className="block text-lg text-text mb-2">
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={3}
                  className="w-full p-2 rounded min-h-[40px] h-fit max-h-[150px] bg-background text-text"
                  placeholder="Tell us your story"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="p-6 bg-secondary  rounded-lg">
            <h2 className="text-text text-lg mb-2">Achievments</h2>
            <div className="h-20 bg-background rounded w-full flex "></div>
          </div>
        </div>
        <div className="w-8/12 border-secondary flex flex-col overflow-hidden rounded-lg">
          <div className="h-20 w-full bg-background flex items-center justify-center text-center ">
            <p className="font-semibold text-text text-3xl">{`${user.name}'s Projects`}</p>
          </div>
          {/* {projects ? (
            <div className="h-fit grid grid-cols-2 p-1 gap-4">
              {projects.map((item) => (
                <Link
                  href={"/"}
                  key={item._id}
                  className="border rounded border-accent p-8"
                >
                  <div className="text-accent text-2xl text-center">
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          ) : ( */}
          <div className="h-full text-text flex w-full justify-center items-center">
            <Link
              href={"/projects/create"}
              className="hover:bg-text hover:text-background font-medium transition duration-300 text-2xl block border border-text p-4 rounded"
            >
              {`Embark on the journey ->`}
            </Link>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}
