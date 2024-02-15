"use client";
import { NavigationButton } from "@/app/shared/components/buttons";
import Link from "next/link";
import ConversationRoadmapNodeComponent from "./components/ConversationRoadmapNode";
import { useRoadmap } from "@/app/shared/hooks/useRoadmap";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import useSidebar from "./hooks/useSidebar";
import { ChevronDown, MoveLeft } from "lucide-react";
import { RoadmapNode } from "@/app/shared/entities";
type QueryParams = {
  queryParams: {
    roadmapId: string;
    subroadmapId: string;
    conversationId: string;
  };
};

export default function ConversationRoadmap({ queryParams }: QueryParams) {
  const { roadmapId, subroadmapId, conversationId } = queryParams;
  const { data: roadmap } = useRoadmap(subroadmapId, "subroadmap");
  let isLoading = false;
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      <aside
        className={`sidebar w-[15%] min-w-[270px] max-w-[500px] gap-10 flex  py-5 bg-azure-200 dark:bg-azure-950 px-3 flex-col h-full z-20 ${
          isOpen ? "translate-x-0" : "translate-x-[-100%] lg:translate-x-0"
        } duration-500 transition absolute lg:relative overflow-auto`}
      >
        <Link
          href={`/workspace/roadmap/${roadmapId}`}
          className=" w-fit mx-auto relative  group overflow-hidden  hover:opacity-80  text-azure-800 dark:text-azure-50/50  space-x-2  rounded-lg flex items-center justify-center"
        >
          <MoveLeft size={20} className="rounded-full " />
          <p className="">Back to roadmap</p>
        </Link>

        <h1 className="dark:text-azure-50 text-azure-950 text-2xl text-center">{roadmap?.title}</h1>
        {isLoading && <Skeleton height="40px" width="50%" />}
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
        className={`switch font-semibold cursor-pointer  text-text absolute left-2 block z-50 top-[calc(50%-15px)] duration-500 rotate-90 transition-transform lg:hidden ${
          isOpen ? "translate-x-[220px]" : "translate-x-0 scale-y-[-1]"
        }`}
      />
    </>
  );
}
