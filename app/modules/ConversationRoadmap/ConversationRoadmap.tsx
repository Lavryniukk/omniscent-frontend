"use client";

import { useQuery } from "@tanstack/react-query";
import fetchSubroadmap from "./api/fetchSubroadmap";
import RoadmapNodeInterface from "@/app/shared/entities/SubroadmapNode";
import RoadmapNode from "./components/ConversationRoadmapNode";
import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/md";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import useConversationStorage from "../ConversationWindow/storage/ConversationStorage";
import SubroadmapNodeInterface from "@/app/shared/entities/SubroadmapNode";

export default function ConversationRoadmap({
  roadmap_id,
  subroadmap_title,
}: {
  roadmap_id: string;
  subroadmap_title: string;
}) {
  const { tech, selectConversation, isStreaming } = useConversationStorage();

  const { data, isLoading } = useQuery(["subroadmap"], () => {
    return fetchSubroadmap(roadmap_id, subroadmap_title);
  });
  useEffect(() => {
    if (tech === null && !isLoading) {
      console.log("triggered");
      selectConversation(data?.node_list[0] as SubroadmapNodeInterface);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const closeSidebar = (e: MouseEvent) => {
      let target = e.target as Element;
      if (isOpen && !target.closest(".sidebar") && !target.closest(".switch")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("click", closeSidebar);
    }

    return () => {
      if (isOpen) {
        window.removeEventListener("click", closeSidebar);
      }
    };
  }, [isOpen]);

  return (
    <>
      <aside
        className={`sidebar w-[20%] min-w-[270px] max-w-[500px]  space-y-5 py-4 bg-background border-r-2 px-3 border-accent flex-col h-full z-20 ${
          isOpen ? "translate-x-0" : "translate-x-[-100%] lg:translate-x-0"
        } duration-500 transition absolute lg:relative`}
      >
        <Link
          href={`/workspace/roadmap/${roadmap_id}`}
          className=" w-fit mx-auto relative  group overflow-hidden before:w-0 before:left-0 before:-z-0  before:absolute before:bg-secondary before:h-full hover:before:w-full before:transition-all before:duration-200 before:bottom-0 before:ease-in-out hover:before:rounded-lg hover:text-text  text-accent space-x-2  rounded-lg flex items-center justify-center"
        >
          <MdOutlineArrowBack
            size={30}
            className="text-accent z-10 group-hover:translate-x-[67px] transition-transform duration-200 bg-secondary rounded-full p-1"
          />
          <p className="z-10 transition-transform duration-200 group-hover:translate-x-[200px]">
            Back to roadmap
          </p>
        </Link>

        <h1 className="text-text text-2xl text-center">
          {!isLoading && data?.title}
        </h1>

        {!isLoading ? (
          <ul className="">
            {data?.node_list.map(
              (
                subroadmapNode: SubroadmapNodeInterface,
                index: number,
                array: SubroadmapNodeInterface[]
              ) => {
                return (
                  <RoadmapNode
                    isLocked={isStreaming}
                    key={index}
                    tech={subroadmapNode}
                    array={array}
                    current_tech_title={tech?.title as string}
                    href={`/workspace/conversation/${roadmap_id}/${subroadmap_title}/`}
                  />
                );
              }
            )}
          </ul>
        ) : (
          <div className="mx-auto text-text">Loading</div>
        )}
      </aside>

      <BsChevronDown
        onClick={() => setIsOpen(!isOpen)}
        size={30}
        className={`switch font-semibold text-text absolute left-2 block z-50 top-[15px] duration-500 rotate-90 transition-transform lg:hidden ${
          isOpen ? "translate-x-[220px]" : "translate-x-0 scale-y-[-1]"
        }`}
      />
    </>
  );
}
