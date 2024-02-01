import { ConversationRoadmap, ConversationWindow } from "@/app/modules";
import { Metadata } from "next";

type ConversationPageProps = {
  params: {
    roadmapId: string;
    subroadmapId: string;
    conversationId: string;
  };
};
export const metadata: Metadata = {
  title: "Workspace • Conversation",
  description:
    "This page is where all learning is. AI mentor will guide you through your learning journey.",
};
function Conversation({ params }: ConversationPageProps) {
  try {
    function handleResize() {
      let vh = window && window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    window && window.addEventListener("resize", handleResize);
  } catch {}

  return (
    <div
      className={`select-none overflow-x-hidden overflow-auto full-height w-full h-full flex flex-row overflow-y-auto  mx-auto box-border`}
    >
      <ConversationRoadmap queryParams={params} />
      <ConversationWindow
        queryParams={{
          conversationId: params.conversationId,
          roadmapId: params.roadmapId,
        }}
      />
    </div>
  );
}

export default Conversation;
