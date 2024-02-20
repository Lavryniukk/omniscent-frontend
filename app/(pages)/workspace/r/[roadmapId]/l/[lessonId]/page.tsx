import { Lesson, RoadmapSidebar } from "@/app/modules";

export type LessonPageParams = {
  params: {
    roadmapId: string;
    lessonId: string;
  };
};

function LessonPage({ params }: LessonPageParams) {
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
      <RoadmapSidebar params={params} />
      <Lesson params={params} />
    </div>
  );
}

export default LessonPage;
