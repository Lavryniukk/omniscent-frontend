"use client";
<<<<<<< HEAD
import { GoPlus } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import { Project } from "@/app/modules/ProjectList/types/project";
import Link from "next/link";
import { fetchProjects } from "./api/fetchProjects";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
let ProjectList = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["userProjects"],
    queryFn: fetchProjects,
  });
  console.log(error, "fetched error");
=======
import ProjectsList from "./components/ProjectsList/ProjectsList";
// import { AiOutlineQuestion } from "react-icons/ai";
import ProjectsNotFound from "./components/ProjectsNotFound/ProjectsNotFound";
>>>>>>> pre-main

// Initialize an array 'arr' containing an example project.
let arr: Array<any> = [{ title: "Node.js", _id: "1" }];

export default function UserProjects() {
  return (
    <div className="mx-auto w-1/3 max-w-[600px] min-w-[500px] px-5 py-16 font-inter h-fit border-2 border-secondary rounded-2xl">
      <h1 className="text-4xl text-center font-bold mx-auto text-text tracking-tight font-inter">
        Your learning projects
      </h1>
      {arr.length !== 0 ? (
        <ProjectsList projects={arr} /> // Render the ProjectsList component with projects from 'arr'.
      ) : (
        <ProjectsNotFound /> // Render the ProjectsNotFound component if 'arr' is empty.
      )}
    </div>
  );
}
