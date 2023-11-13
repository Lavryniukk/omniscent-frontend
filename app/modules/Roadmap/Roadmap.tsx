import fetchRoadmap from "@/app/modules/Roadmap/api/fetchRoadmap";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import RoadmapContext from "./types/RoadmapContext";

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

export default function Roadmap() {
  const context = useContext(RoadmapContext);

  if (!context) {
    throw new Error("Please");
  }
  const { id } = context;

  const { data, error } = useQuery(
    ["roadmap"],
    async () => await fetchRoadmap(id)
  );

  return (
    <div className="w-fit mx-auto">
      <ul className="text-text mx-auto w-fit py-20 h-fit flex items-center justify-center flex-col ">
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
                    className={`roadmap_node ${
                      tech.isCompleted && "roadmap__node--complete"
                    } ${current && "roadmap__node-shadow"}
    			  `}
                  >
                    {tech.title}
                  </div>

                  {index != arr.length - 1 && (
                    <div
                      className={`roadmap__arrow ${
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
  );
}
