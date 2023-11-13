"use client";

import Roadmap from "@/app/modules/ProjectList/types/Roadmap";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchRoadmap from "../../fetchRoadmap";
let arr = [
  { title: "HTML" },
  { title: "CSS" },
  { title: "JavaScript" },
  { title: "React" },
  { title: "Redux" },
  { title: "SASS" },
  { title: "NPM" },
  { title: "Webpack" },
  { title: "Babel" },
  { title: "Jest" },
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
            data.node_list.map(
              (tech: { title: string; _id: string }, index: number) => {
                return (
                  <li
                    key={index}
                    className="w-full flex items-center justify-center flex-col min-w-[200px] "
                  >
                    <div
                      className={`roadmap-node ${index <= 3 && "roadmap-done"}`}
                    >
                      {tech.title}
                    </div>
                    {index != data.node_list.length - 1 && (
                      <div className="roadmap-arrow" />
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
