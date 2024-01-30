import Link from "next/link";
import ProjectSearch from "./components/ProjectsSearch/ProjectSearch"; // Importing the ProjectSearch component.

export default function NewProjectField() {
  return (
    <div className="mx-auto w-1/3 h-fit min-w-[350px] min-h-[800px] px-5 gap-20 py-20 flex flex-col border border-secondary rounded-lg">
      <h1 className="text-3xl lg;text-4xl text-center font-bold mx-auto text-text tracking-tight  ">
        Choose from existing templates
      </h1>
      <ProjectSearch />
    </div>
  );
}
