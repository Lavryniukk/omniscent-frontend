"use client";

import fetchRoadmap from "../fetchRoadmap";
import { useQuery } from "@tanstack/react-query";

let arr = [
  { _id: "1", title: "HTML", isCompleted: true },
  { _id: "2", title: "CSS", isCompleted: false },
  { _id: "3", title: "JavaScript", isCompleted: false },
  { _id: "4", title: "React", isCompleted: false },
  { _id: "5", title: "Redux", isCompleted: false },
  { _id: "6", title: "SASS", isCompleted: false },
  { _id: "7", title: "NPM", isCompleted: false },
  { _id: "8", title: "Webpack", isCompleted: false },
  { _id: "9", title: "Babel", isCompleted: false },
  { _id: "10", title: "Jest", isCompleted: false },
];

export default function RoadmapPage({ params }: { params: { id: string } }) {
  const { data, error } = useQuery(
    ["roadmap"],
    async () => await fetchRoadmap(params.id)
  );
  return (
    <div className="h-full min-h-screen w-auto ">
      <div className=" w-fit mx-auto">
        <ul className="text-text mx-auto  w-fit py-20 h-fit  flex items-center justify-center flex-col ">
          {!error && data ? (
            arr.map(
              (
                tech: { title: string; _id: string; isCompleted: boolean },
                index: number,
                array
              ) => {
                let current;
                const prevTech = array[index - 1];

                if (index === 0 && !tech.isCompleted) {
                  current = true;
                } else {
                  if (prevTech?.isCompleted && !tech.isCompleted) {
                    current = true;
                  } else current = false;
                }
                return (
                  <li
                    key={tech._id}
                    className="w-full flex items-center justify-center flex-col min-w-[200px]"
                  >
                    <div
                      className={`text-center px-5 w-full cursor-pointer relative hover:text-background hover:bg-text duration-200 
                      transition-colors font-semibold flex items-center justify-center border h-12 bg-background border-accent 
                      rounded-lg ${
                        tech.isCompleted &&
                        "opacity-60 bg-secondary hover:bg-background hover:text-accent"
                      } ${current && "drop-shadow-[0px_5px_5px_#f5f5f5]"}
                      `}
                    >
                      {tech.title}
                    </div>
                    {index != arr.length - 1 && (
                      <div
                        className={`block w-0.5 select-none h-20 bg-accent ${
                          tech.isCompleted && "opacity-60"
                        }`}
                      />
                    )}
                  </li>
                );
              }
            )
          ) : (
            <div className="mx-auto text-center text-text mt-20 text-3xl">
              Roadmap is empty
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
