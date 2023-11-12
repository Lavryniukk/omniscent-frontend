"use client";

import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
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

// Create an array of project objects for search.
let arr = [
  { title: "React front-end developer", _id: "1" },
  { title: "Nest.js back-end developer", _id: "2" },
  { title: "Python back-end developer", _id: "3" },
  { title: "Marketing scientist", _id: "4" },
  { title: "Data scientist", _id: "5" },
  { title: "DevOps", _id: "6" },
];

export default function ProjectSearch() {
  const [text, setText] = useState(""); // Initialize state variable for user input text.
  const [filteredArray, setFilteredArray] = useState(arr); // Initialize state variable for the filtered array.

  const { data, isLoading } = useQuery({
    queryKey: ["communityRoadmaps"],
    queryFn: () => fetch("/api/"),
  });

  // Handler function for input change.
  let handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value); // Update the 'text' state with the input value.

    // Create a regex pattern for case-insensitive text matching.
    const regex = new RegExp(e.target.value, "i");

    // Filter the 'arr' based on the input text and set the 'filteredArray' state.
    const filtered = arr.filter((item) => regex.test(item.title));
    setFilteredArray(filtered);
  };

  // Function to highlight the matching text within a string.
  const highlightText = (str: string, term: string) => {
    // Split the input string 'str' using a regular expression to find and split at the 'term', with global and case-insensitive flags.
    const splitText = str.split(new RegExp(`(${term})`, "gi"));

    // Map through the split chunks and create a new array with highlighted spans.
    return splitText.map((chunk, index) =>
      // Check if the current 'chunk' matches the 'term' (case-insensitive).
      chunk.toLowerCase() === term.toLowerCase() ? (
        // If it matches, wrap it in a <span> element with a background color.
        <span key={index} className="bg-primary-800">
          {chunk}
        </span>
      ) : (
        // If it doesn't match, keep the 'chunk' as is.
        chunk
      )
    );

    // Return the array of highlighted chunks.
  };

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
        <AiOutlineSearch
          size={20}
          className="absolute text-accent bg-secondary right-3"
        />
      </div>
      <div className="w-full h-fit space-y-3 overflow-hidden mt-10">
        {!isLoading ? (
          filteredArray.length ? (
            // Map and display the filtered projects with highlighted text.
            filteredArray.map(
              (item, index) =>
                index <= 4 && (
                  <ProjectContainer
                    title={highlightText(item.title, text)}
                    key={item._id}
                  />
                )
            )
          ) : (
            // Display a message if no results were found.
            <div className="text-accent text-lg mx-auto text-center">
              Whoops, seems like nothing was found
            </div>
          )
        ) : (
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
        )}
      </div>
    </div>
  );
}
