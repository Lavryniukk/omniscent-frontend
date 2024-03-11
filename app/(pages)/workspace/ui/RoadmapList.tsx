import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { RoadmapNode } from "@/app/entities";
import { fetchRoadmaps } from "@/app/entities/roadmap-node/api";
import { DeleteRoadmapButton, LanguageSelector } from "@/app/features";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function RoadmapList({
  onChildClick,
}: {
  onChildClick: (id: string) => void;
}) {
  const { data: roadmaps, isLoading } = useQuery(["roadmaps"], () => {
    return fetchRoadmaps();
  });
  if (!isLoading && (roadmaps?.length === 0 || !roadmaps)) {
    return <p>No roadmaps found</p>;
  } else {
    return (
      <div className="mx-auto flex items-center flex-col gap-5 w-full min-w-[30px] py-16 sm:w-1/3 max-w-[600px] sm:min-w-[500px] sm:px-5 sm:py-16 font-inter h-fit  dark:border shadow-xl rounded-lg relative">
        <h1 className="text-4xl text-center font-bold mx-auto  950 dark:text-foreground font-inter">
          Your projects
        </h1>

        <LanguageSelector />
        <>
          <div className="container xs:mx-auto space-y-5 p-5 h-fit py-20 flex flex-col items-center">
            {!isLoading &&
              roadmaps.map((roadmap) => (
                <button
                  key={roadmap._id}
                  onClick={() => onChildClick(roadmap._id)}
                  className={`py-5  transition-transform duration-100 hover:opacity-80 dark:border block shadow-xl rounded-lg font-semibold text-lg text-center px-7 relative w-full }`}
                >
                  {roadmap.title}
                </button>
              ))}
            {isLoading && <Loading />}
          </div>

          {roadmaps?.length && <Link href="/workspace/new">Create new</Link>}
        </>
      </div>
    );
  }
}
function Loading() {
  return (
    <div className="w-full mx-auto space-y-5 p-1 h-fit ">
      <div className="space-y-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="dark:border bgblack 100 shadow-xl rounded-lg dark:bgblack 900 dark:borderblack 700 p-5  min-h-[60px] flex items-center justify-center"
          >
            <Skeleton width={"75%"} height={"24px"} />
          </div>
        ))}
      </div>
      <Skeleton height="20px" width="100px" />
    </div>
  );
}
