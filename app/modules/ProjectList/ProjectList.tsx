"use client";
import ProjectsList from "./components/ProjectsList/ProjectsList";
// import { AiOutlineQuestion } from "react-icons/ai";
import ProjectsNotFound from "./components/ProjectsNotFound/ProjectsNotFound";

let arr: Array<any> = [];

export default function UserProjects() {
  return (
    <div className="mx-auto w-1/3 max-w-[600px] min-w-[500px] px-5 py-16 font-inter h-fit  border-2 border-secondary rounded-2xl">
      <h1 className="text-4xl text-center font-bold mx-auto text-text trancking-tight font-inter">
        Your learning projects
      </h1>
      {arr.length !== 0 ? (
        <ProjectsList projects={arr} />
      ) : (
        <ProjectsNotFound />
      )}
    </div>
  );
}
