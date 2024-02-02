"use client";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";

let arr = [
  { title: "React front-end developer", _id: "1" },
  { title: "Nest.js back-end developer", _id: "2" },
  { title: "Python back-end developer", _id: "3" },
  { title: "Marketing scientist", _id: "4" },
  { title: "Data scientist", _id: "5" },
  { title: "DevOps", _id: "6" },
];

function ProjectContainer({ title }: { title: string | ReactNode }) {
  return (
    <Link
      href={"/"}
      className="py-5 border hover:dark:text-azure-50 hover:dark:bg-azure-900  hover:text-azure-950 transition-colors duration-200  hover:bg-azure-50  block w-full dark:border bg-azure-100 dark:bg-azure-800 dark:border-azure-700  shadow-md rounded-lg text-lg text-center text-azure-900 dark:text-azure-100"
    >
      {title}
    </Link>
  );
}

const highlightText = (str: string, term: string) => {
  const splitText = str.split(new RegExp(`(${term})`, "gi"));

  return splitText.map((chunk, index) =>
    chunk.toLowerCase() === term.toLowerCase() ? (
      <span key={index} className="bg-azure-300  dark:bg-azure-700">
        {chunk}
      </span>
    ) : (
      chunk
    )
  );
};
export default function NewProjectField() {
  const [text, setText] = useState("");
  const [filteredArray, setFilteredArray] = useState(arr);

  const { data, isLoading } = useQuery({
    queryKey: ["communityRoadmaps"],
    queryFn: () => fetch("/api/"),
  });

  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);

    const regex = new RegExp(e.target.value, "i");

    const filtered = arr.filter((item) => regex.test(item.title));
    setFilteredArray(filtered);
  };
  let isEmpty = filteredArray.length === 0;

  return (
    <div className="mx-auto w-3/4 dark:bg-azure-900 dark:border-azure-700 dark:border bg-azure-100/60 shadow-lg min-h-[600px] lg:w-1/3 h-fit min-w-[350px] p-2 lg:p-5 gap-12 flex flex-col rounded-lg">
      <div className="relative h-12 w-full text-azure-900 dark:text-azure-100 items-center flex">
        <input
          type="text"
          placeholder="Search for a template..."
          value={text}
          onChange={(e) => {
            handleChange(e);
          }}
          className="bg-azure-200 dark:bg-azure-800 dark:border-azure-700 shadow-md focus:outline-none h-full focus:shadow-xl transition-shadow duration-200 w-full rounded-lg pl-3 dark:border "
        />
        <Search size={20} className="absolute right-3" />
      </div>
      <div className="w-full h-fit gap-3 items-center  flex flex-col ">
        {isLoading && <LoadingTemplates />}

        {!isEmpty &&
          !isLoading &&
          filteredArray.map(
            (item, index) =>
              index <= 4 && (
                <ProjectContainer
                  title={highlightText(item.title, text)}
                  key={item._id}
                />
              )
          )}

        {isEmpty && (
          <div className="text-accent text-lg  text-center">
            Whoops, seems like nothing was found
          </div>
        )}
      </div>
    </div>
  );
}

function LoadingTemplates() {
  return (
    <div className="w-full h-fit space-y-3 overflow-hidden">
      {Array.from({ length: 4 }).map((_, index) => (
        <ProjectContainer
          key={index}
          title={<Skeleton width="75%" height="24px" />}
        />
      ))}
    </div>
  );
}
