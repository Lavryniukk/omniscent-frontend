import { RoadmapNode } from "@/app/shared/entities";
import { Check } from "lucide-react";
type mockRoadmapNode = {
  title: string;
  _id: string;
  children: RoadmapNode[];
  owner_id?: string;
  is_completed: boolean;
  created_at: Date;
  conversation_id?: string;
  updated_at: Date;
  progress: number;
};
export default function ProjectContainer({
  project,
}: {
  project: mockRoadmapNode;
}) {
  const { title, progress } = project;
  return (
    <div className="h-[500px] min-w-[350px] mx-auto lg:mx-0 items-center z-0 box-content group hover:shadow-[0px_15px_25px_0px_rgba(var(--secondary),1)] overflow-hidden hover:border-accent/30 hover:scale-[105%] transition-all duration-200 cursor-pointer border-secondary flex-col rounded-2xl w-1/4 max-w-[360px] flex border-4">
      <div className="w-full h-3/4  flex items-center justify-center"></div>
      <div className="w-[100%] h-1/4 p-5 font-inter box-border  transition-colors duration-300 group-hover:bg-accent/30 bg-secondary ">
        <section className=" justify-between h-fit flex items-center w-full">
          <article className="text-xl font-semibold text-text">{title}</article>
          <ProgressBar progress={progress} />
        </section>
        <section className=" mt-5  p-1">
          <div className="h-1 w-full bg-accent"></div>
        </section>
      </div>
    </div>
  );
}

function ProgressBar({ progress }: { progress: number }) {
  if (progress >= 100) {
    return (
      <div className="text-base items-center h-fit  justify-center flex w-fit font-light text-accent/50">
        <Check className="text-accent/50 mt-1 h-4 w-4" />
        <p>Completed</p>
      </div>
    );
  }

  return (
    <div className="text-base font-light text-accent/50">
      Progress: {progress}%
    </div>
  );
}
