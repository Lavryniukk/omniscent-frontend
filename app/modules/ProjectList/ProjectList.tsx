"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Link from "next/link";
import ProjectsList from "./components/ProjectsList/ProjectsList";
// import { AiOutlineQuestion } from "react-icons/ai";
import ProjectsNotFound from "./components/ProjectsNotFound/ProjectsNotFound";
import ProjectSkeleton from "../../UI/loading/ProjectSkeleton/ProjectSkeleton";

// Initialize an array 'arr' containing an example project.
let arr: Array<any> = [{ title: "Node.js", _id: "1" }];

export default function UserProjects() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const { data, isLoading } = useQuery({
  //   queryKey: ["userProjects"],
  //   queryFn: () => fetch("/user/roadmaps/"),
  // });
  return (
    <div className="mx-auto w-1/3 max-w-[600px] min-w-[500px] px-5 py-16 font-inter h-fit border-2 border-secondary rounded-2xl">
      <h1 className="text-4xl text-center font-bold mx-auto text-text trancking-tight font-inter">
        Your learning projects
      </h1>
      {isLoading ? (
        <>
          <div className="w-3/4 mx-auto space-y-5 p-5 h-fit py-20">
            <ProjectSkeleton />
            <ProjectSkeleton />
            <ProjectSkeleton />
          </div>
          <p className="mx-auto text-center underline-offset-2 select-none underline text-accent-600">
            <Link
              href="/projects/new"
              className="hover:text-accent transition-colors duration-200"
            >
              Create new project
            </Link>
          </p>
        </>
      ) : arr.length !== 0 ? (
        <ProjectsList projects={arr} /> // Render the ProjectsList component with projects from 'arr'.
      ) : (
        <ProjectsNotFound /> // Render the ProjectsNotFound component if 'arr' is empty.
      )}
    </div>
  );
}
