"use client";
import { fetchRoadmap } from "@/app/entities/roadmap-node/api";
import { Quiz, RoadmapSidebar } from "@/app/widgets";
import { useQuery } from "@tanstack/react-query";
export type LessonPageParams = {
  params: {
    roadmapId: string;
    quizId: string;
  };
};
function LessonPage({ params }: LessonPageParams) {
  const { quizId, roadmapId } = params;
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
      <RoadmapSidebar roadmapId={roadmapId} id={params.quizId} />
      <Quiz params={params} />
    </div>
  );
}

export default LessonPage;
