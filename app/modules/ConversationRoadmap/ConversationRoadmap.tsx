"use client";

import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/md";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import useConversationStorage from "../ConversationWindow/storage/ConversationStorage";
import ConversationRoadmapNodeComponent from "./components/ConversationRoadmapNode";
import RoadmapNode from "@/app/shared/entities/Roadmap";
import { useRoadmap } from "@/app/shared/hooks/useRoadmap";

export default function ConversationRoadmap({
  roadmapId,
  subroadmapId,
  conversationId,
}: {
  roadmapId: string;
  subroadmapId: string;
  conversationId: string;
}) {
  const isStreaming = useConversationStorage((state) => state.isStreaming);
  const { data, isLoading, error } = useRoadmap(subroadmapId);

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
        className={`sidebar w-[20%] min-w-[270px] max-w-[500px] space-y-5 py-4 bg-background border-r-2 px-3 border-accent flex-col h-full z-20 ${
          isOpen ? "translate-x-0" : "translate-x-[-100%] lg:translate-x-0"
        } duration-500 transition absolute lg:relative overflow-auto`}
      >
        <Link
          href={`/workspace/roadmap/${roadmapId}`}
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
            {data?.children.map(
              (
                subroadmapNode: RoadmapNode,
                index: number,
                array: RoadmapNode[]
              ) => {
                return (
                  <ConversationRoadmapNodeComponent
                    roadmapId={roadmapId}
                    isLocked={isStreaming}
                    key={index}
                    subroadmapId={subroadmapId}
                    tech={subroadmapNode}
                    array={array}
                    isCurrent={
                      conversationId === subroadmapNode.conversation_id
                    }
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
