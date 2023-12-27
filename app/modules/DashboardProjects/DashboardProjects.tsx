import useProjects from "./hooks/useProjects";
import ProjectContainer from "./components/ProjectContainer";
import RoadmapNode from "@/app/shared/entities/Roadmap";
import { PlusCircle } from "lucide-react";

export default function DashboardProjects() {
  //   const { projects, isLoading, error } = useProjects();

  let mockProjects = [
    {
      title: "Java",
      _id: "123",
      children: [],
      owner_id: "",
      is_completed: false,
      created_at: new Date(),
      updated_at: new Date(),
      progress: 28,
    },
    {
      title: "Rust",
      _id: "1234",
      children: [],
      owner_id: "4",
      is_completed: false,
      created_at: new Date(),
      updated_at: new Date(),
      progress: 100,
    },
  ];

  return (
    <section className="h-fit py-40 flex max-w-10xl  justify-start  flex-wrap gap-10">
      <NewProjectContainer />

      {mockProjects.map((project) => {
        return <ProjectContainer project={project} key={project._id} />;
      })}
    </section>
  );
}

function NewProjectContainer() {
  return (
    <div className="h-[500px] min-w-[350px] mx-auto lg:mx-0  items-center z-0 box-content group hover:shadow-[0px_15px_25px_0px_rgba(var(--secondary),1)] overflow-hidden hover:border-accent/30 hover:scale-[105%] transition-all duration-200 cursor-pointer border-secondary flex-col rounded-2xl w-1/4 max-w-[360px] flex border-4">
      <div className="w-full h-[375px] flex items-center justify-center">
        <PlusCircle className="text-secondary group-hover:animate-spin-slow w-1/3 h-1/3 transition-colors duration-300 group-hover:text-accent/30 bg-background" />
      </div>
      <div className="w-[100%] h-1/4 z-[1]  box-content  transition-colors duration-300 group-hover:bg-accent/30 bg-secondary "></div>
    </div>
  );
}
