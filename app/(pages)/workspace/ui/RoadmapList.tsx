import { RoadmapNode } from "@/app/entities";
import { fetchRoadmaps } from "@/app/entities/roadmap-node/api";
import { DeleteRoadmapButton, LanguageSelector } from "@/app/features";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import RoadmapsNotFound from "./RoadmapsNotFound";
import { CryptoCard } from "@/components/ui/crypto-card";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import CreditsCounter from "@/app/features/credits-counter/CreditsCounter";

export default function RoadmapList({
  onChildClick,
  selectedRoadmap,
}: {
  onChildClick: (id: string) => void;
  selectedRoadmap?: string;
}) {
  const { data: roadmaps, isLoading } = useQuery(["roadmaps"], () => {
    return fetchRoadmaps();
  });

  return (
    <div className="mx-auto flex items-center border gap-10 flex-col py-10 w-full min-w-[350px]  sm:w-1/3 max-w-[600px] sm:min-w-[500px]   h-fit  dark:border shadow-xl rounded-lg relative">
      <h1 className="text-4xl text-center font-bold mx-auto   ">
        Your projects
      </h1>
      <LanguageSelector />
      <>
        <div className="container xs:mx-auto gap-5 h-fit  flex flex-col items-center">
          {!isLoading &&
            roadmaps &&
            roadmaps.map((roadmap) => (
              <CryptoCard
                className={`border-2 ${selectedRoadmap == roadmap._id && "shadow-primary shadow-lg "} text-foreground font-semibold cursor-pointer rounded-lg w-full text-xl h-[100px]`}
                text={roadmap.title}
                key={roadmap._id}
                onClick={() => onChildClick(roadmap._id)}
              />
            ))}
          {isLoading && <Loading />}

          <Link href="workspace/new" className="w-full">
            <CryptoCard
              className="border-2 text-muted-foreground font-semibold  rounded-lg w-full text-xl h-[100px]"
              text={"Create new"}
            />
          </Link>
        </div>
      </>
    </div>
  );
}
function Loading() {
  return (
    <div className="w-full mx-auto space-y-5  h-fit ">
      {Array.from({ length: 1 }).map((_, i) => (
        <CryptoCard
          key={i}
          text={<Skeleton className="w-28 h-6"></Skeleton>}
          className="border-2 text-foreground font-semibold cursor-pointer rounded-lg w-full text-xl h-[100px]"
        />
      ))}
    </div>
  );
}
