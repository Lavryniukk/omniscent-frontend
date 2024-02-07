"use client";

import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import fetchTemplates from "../../api/fetchTemplates";
function ProjectContainer({ title }: { title: string | ReactNode }) {
  return (
    <Link
      href={"/"}
      className="py-5 border block border-secondary rounded-lg text-lg text-center text-accent px-3"
    >
      {title}
    </Link>
  );
}

export default function ProjectSearch() {
  const { data: templates, isLoading } = useQuery({
    queryKey: ["templateRoadmaps"],
    queryFn: () => fetchTemplates(),
  });

  const [text, setText] = useState("");

  const [filteredArray, setFilteredArray] = useState(templates);

  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value); // Update the 'text' state with the input value.

    const regex = new RegExp(e.target.value, "i");

    // Filter the 'arr' based on the input text and set the 'filteredArray' state.
    const filtered = templates?.filter((item) => regex.test(item.title));
    setFilteredArray(filtered);
  };

  // Function to highlight the matching text within a string.

  return (
    <div className="py-20">
      <div className="relative h-10 w-full mx-auto items-center flex">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            handleChange(e);
          }}
          className="bg-secondary focus:outline-none h-full focus:border-text w-full rounded-lg border-accent-600 text-accent pl-3 border mx-auto"
        />
        <Search
          size={20}
          className="absolute text-accent bg-secondary right-3"
        />
      </div>
      <div className="w-full h-fit space-y-3 overflow-hidden mt-10">
        {isLoading && <LoadingTemplates />}

        {!isLoading &&
          filteredArray?.map(
            (item, index) =>
              index <= 4 && (
                <ProjectContainer
                  title={highlightText(item.title, text)}
                  key={item._id}
                />
              )
          )}
      </div>
    </div>
  );
}

function LoadingTemplates() {
  return (
    <div className="w-full h-fit space-y-3 overflow-hidden">
      <div className="border border-secondary p-4 rounded min-h-[70px] flex items-center justify-center">
        <Skeleton width="75%" height="24px" />
      </div>
      <div className="border border-secondary p-4 rounded min-h-[70px] flex items-center justify-center">
        <Skeleton width="75%" height="24px" />
      </div>
      <div className="border border-secondary p-4 rounded min-h-[70px] flex items-center justify-center">
        <Skeleton width="75%" height="24px" />
      </div>
      <div className="border border-secondary p-4 rounded min-h-[70px] flex items-center justify-center">
        <Skeleton width="75%" height="24px" />
      </div>
      <div className="border border-secondary p-4 rounded min-h-[70px] flex items-center justify-center">
        <Skeleton width="75%" height="24px" />
      </div>
    </div>
  );
}

const highlightText = (str: string, term: string) => {
  const splitText = str.split(new RegExp(`(${term})`, "gi"));

  return splitText.map((chunk, index) =>
    chunk.toLowerCase() === term.toLowerCase() ? (
      <span key={index} className="bg-primary-800">
        {chunk}
      </span>
    ) : (
      chunk
    )
  );
};
