"use client";

import { useQuery } from "@tanstack/react-query";
import fetchSubroadmap from "./api/fetchSubroadmap";
import RoadmapNodeInterface from "@/app/shared/entities/RoadmapNode";
import RoadmapNode from "./components/ConversationRoadmapNode";
import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/md";
import { useRef, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function ConversationRoadmap({
  roadmap_id,
  subroadmap_title,
  current_tech_title,
}: {
  roadmap_id: string;
  subroadmap_title: string;
  current_tech_title: string;
}) {
  const { data, error, isLoading } = useQuery(["subroadmap"], () => {
    return fetchSubroadmap(roadmap_id, subroadmap_title);
  });

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div
        ref={divRef}
        className={`w-[20%] min-w-[270px] max-w-[500px] space-y-5 py-4 bg-background border-r-2 px-3 border-accent flex-col h-screen z-20 ${
          isOpen ? "translate-x-0" : "translate-x-[-100%] lg:translate-x-0"
        } duration-500 transition absolute lg:relative`}
      >
        <Link
          href={`/workspace/roadmap/${roadmap_id}`}
          className=" w-fit mx-auto relative group overflow-hidden before:w-0 before:left-0 before:-z-0  before:absolute before:bg-secondary before:h-full hover:before:w-full before:transition-all before:duration-200 before:bottom-0 before:ease-in-out hover:before:rounded-lg hover:text-text  text-accent space-x-2  rounded-lg flex items-center justify-center"
        >
          <MdOutlineArrowBack
            size={30}
            className="text-accent z-10 group-hover:translate-x-[67px] transition-transform duration-200 bg-secondary rounded-full p-1"
          />
          <p className="z-10 transition-transform duration-200 group-hover:translate-x-[200px]">
            Back to roadmap
          </p>
        </Link>

        <h1 className="text-text text-2xl text-center">{data?.title}</h1>

        <ul className="">
          {data?.node_list.map(
            (
              tech: RoadmapNodeInterface,
              index: number,
              array: RoadmapNodeInterface[]
            ) => {
              return (
                <RoadmapNode
                  key={index}
                  tech={tech}
                  array={array}
                  current_tech_title={current_tech_title}
                  href={`/workspace/conversation/${roadmap_id}/${subroadmap_title}/${tech.conversation_id}/${tech.title}`}
                />
              );
            }
          )}
        </ul>
      </div>

      <BsChevronDown
        onClick={() => setIsOpen(!isOpen)}
        size={30}
        className={`font-semibold text-text absolute left-2 block z-50 top-[calc(47%-15px)] duration-500 rotate-90 transition-transform lg:hidden ${
          isOpen ? "translate-x-[220px]" : "translate-x-0 scale-y-[-1]"
        }`}
      />
    </>
  );
}
