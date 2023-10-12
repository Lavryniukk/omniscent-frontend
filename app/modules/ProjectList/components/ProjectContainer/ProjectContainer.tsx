"use client";
import Link from "next/link";
import { Project } from "../../types/project";
import {
  MdOutlineSettings,
  MdDeleteOutline,
  MdInfoOutline,
} from "react-icons/md";
import { removeProject } from "../../api/removeProject";
import { useState } from "react";
let ProjectContainer = ({ project }: { project: Project }) => {
  let [isOpen, setIsOpen] = useState(false);
  const { title, _id } = project;
  return (
    <div className="project" key={_id}>
      <Link
        href={`/projects/${_id}`}
        className="text-lg w-10/12 text-accent-300 font-light text-left "
      >
        {title}
      </Link>
      <div className="w-fit relative   h-full flex items-center justify-center ">
        <MdOutlineSettings
          size={25}
          className={`text-accent hover:text-accent-200 transition-all duration-300  peer z-10 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setIsOpen((prev) => !prev)}
        />
        <div
          className={` backdrop:blur-md ${
            isOpen ? "h-full" : "h-0"
          } transition-all duration-300 rounded-sm w-full box-content  border-accent items-center justify-around space-y-5 left-0  absolute flex flex-col`}
        >
          <MdDeleteOutline
            size={20}
            className=" text-accent hover:text-accent-200 transition-colors duration-200"
            onClick={() => removeProject(_id)}
          />
          <MdInfoOutline
            className="text-accent hover:text-accent-200 transition-colors duration-200"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};
export default ProjectContainer;
