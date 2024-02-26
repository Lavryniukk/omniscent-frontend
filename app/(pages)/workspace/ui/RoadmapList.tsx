import { RoadmapNode } from "@/app/entities";
import { LanguageSelector } from "@/app/features";
import { Button } from "@/app/shared/ui/buttons";
import { RoadmapContainer } from "@/app/widgets";

export default function RoadmapList({ roadmaps }: { roadmaps: RoadmapNode[] }) {
  return (
    <>
      <LanguageSelector />
      <>
        <div className="container xs:mx-auto space-y-5 p-5 h-fit py-20 flex flex-col items-center">
          {roadmaps.map((roadmap: RoadmapNode) => (
            <RoadmapContainer key={roadmap._id} roadmap={roadmap} />
          ))}
        </div>

        <Button variant="ghost" href="/workspace/new">
          Create new
        </Button>
      </>
    </>
  );
}
