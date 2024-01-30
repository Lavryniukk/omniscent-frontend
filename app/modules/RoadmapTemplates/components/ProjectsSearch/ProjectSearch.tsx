"use client";

import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
function ProjectContainer({ title }: { title: string | ReactNode }) {
  return (
    <Link
      href={"/"}
      className="py-5 border block w-full border-secondary rounded-lg text-lg text-center text-accent"
    >
      {title}
    </Link>
  );
}

let arr = [
  { title: "React front-end developer", _id: "1" },
  { title: "Nest.js back-end developer", _id: "2" },
  { title: "Python back-end developer", _id: "3" },
  { title: "Marketing scientist", _id: "4" },
  { title: "Data scientist", _id: "5" },
  { title: "DevOps", _id: "6" },
];

export default function ProjectSearch() {
  const [text, setText] = useState("");
  const [filteredArray, setFilteredArray] = useState(arr);

  const { data, isLoading } = useQuery({
    queryKey: ["communityRoadmaps"],
    queryFn: () => fetch("/api/"),
  });

  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value); // Update the 'text' state with the input value.

    const regex = new RegExp(e.target.value, "i");

    // Filter the 'arr' based on the input text and set the 'filteredArray' state.
    const filtered = arr.filter((item) => regex.test(item.title));
    setFilteredArray(filtered);
  };

  // Function to highlight the matching text within a string.
  const highlightText = (str: string, term: string) => {
    const splitText = str.split(new RegExp(`(${term})`, "gi"));

    return splitText.map((chunk, index) =>
      chunk.toLowerCase() === term.toLowerCase() ? (
        <span key={index} className="bg-primary">
          {chunk}
        </span>
      ) : (
        chunk
      )
    );
  };

  return (
    <>
      <div className="relative h-12 w-full  items-center flex">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            handleChange(e);
          }}
          className="bg-secondary/40 focus:outline-none h-full focus:border-text w-full rounded-lg border-secondary text-accent pl-3 border "
        />
        <Search size={20} className="absolute text-accent right-3" />
      </div>
      <div className="w-full h-fit gap-3 items-center flex flex-col overflow-hidden ">
        {filteredArray.length !== 0 &&
          filteredArray.map(
            (item, index) =>
              index <= 4 && (
                <ProjectContainer
                  title={highlightText(item.title, text)}
                  key={item._id}
                />
              )
          )}

        {filteredArray.length === 0 && (
          <div className="text-accent text-lg  text-center">
            Whoops, seems like nothing was found
          </div>
        )}

        {isLoading && <LoadingTemplates />}
      </div>
    </>
  );
}

function LoadingTemplates() {
  return (
    <div className="w-full h-fit space-y-3 overflow-hidden">
      <div className="border border-secondary p-4 rounded min-h-[70px] flex items-center justify-center">
        <Skeleton width="75%" height="24px" rounded="4px" />
      </div>
      <div className="border border-secondary p-4 rounded min-h-[70px] flex items-center justify-center">
        <Skeleton width="75%" height="24px" rounded="4px" />
      </div>
      <div className="border border-secondary p-4 rounded min-h-[70px] flex items-center justify-center">
        <Skeleton width="75%" height="24px" rounded="4px" />
      </div>
      <div className="border border-secondary p-4 rounded min-h-[70px] flex items-center justify-center">
        <Skeleton width="75%" height="24px" rounded="4px" />
      </div>
      <div className="border border-secondary p-4 rounded min-h-[70px] flex items-center justify-center">
        <Skeleton width="75%" height="24px" rounded="4px" />
      </div>
    </div>
  );
}
