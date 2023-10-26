"use client";
import ProjectsList from "./components/ProjectsList/ProjectsList";
// import { AiOutlineQuestion } from "react-icons/ai";
import ProjectsNotFound from "./components/ProjectsNotFound/ProjectsNotFound";

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
