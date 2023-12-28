"use client";

import Link from "next/link";
import useConversationStorage from "../ConversationWindow/storage/ConversationStorage";
import ConversationRoadmapNodeComponent from "./components/ConversationRoadmapNode";
import { useRoadmap } from "@/app/shared/hooks/useRoadmap";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import useSidebar from "./hooks/useSidebar";
import { ChevronDown, MoveLeft } from "lucide-react";
import { RoadmapNode } from "@/app/shared/entities";

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
  const {
    data: roadmap,
    isLoading,
    error,
  } = useRoadmap(subroadmapId, "subroadmap");

  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      <aside
        className={`sidebar w-[15%] min-w-[270px] max-w-[500px] space-y-5 py-4 bg-background  px-3 flex-col h-full z-20 ${
          isOpen ? "translate-x-0" : "translate-x-[-100%] lg:translate-x-0"
        } duration-500 transition absolute lg:relative overflow-auto`}
      >
        <Link
          href={`/workspace/roadmap/${roadmapId}`}
          className=" w-fit mx-auto relative  group overflow-hidden before:w-0 before:left-0 before:-z-0  before:absolute before:bg-secondary before:h-full hover:before:w-full before:transition-all before:duration-200 before:bottom-0 before:ease-in-out hover:before:rounded-lg hover:text-text  text-accent space-x-2  rounded-lg flex items-center justify-center"
        >
          <MoveLeft
            size={30}
            className="text-accent z-10 group-hover:translate-x-[67px] transition-transform duration-200 bg-secondary rounded-full p-1"
          />
          <p className="z-10 transition-transform duration-200 group-hover:translate-x-[200px]">
            Back to roadmap
          </p>
        </Link>

        <h1 className="text-text text-2xl text-center">{roadmap?.title}</h1>
        {isLoading && <Skeleton height="40px" rounded="6px" width="50%" />}
        {isLoading && <div className="mx-auto text-text">Loading</div>}

        <ul>
          {roadmap?.children.map(
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
                  isCurrent={conversationId === subroadmapNode.conversation_id}
                />
              );
            }
          )}
        </ul>
      </aside>

      <ChevronDown
        onClick={toggleSidebar}
        size={30}
        className={`switch font-semibold cursor-pointer  text-text absolute left-2 block z-50 top-[15px] duration-500 rotate-90 transition-transform lg:hidden ${
          isOpen ? "translate-x-[220px]" : "translate-x-0 scale-y-[-1]"
        }`}
      />
    </>
  );
}
