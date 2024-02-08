import ProjectSearch from "./components/ProjectsSearch/ProjectSearch"; // Importing the ProjectSearch component.

export default function RoadmapTemplates() {
  return (
    <div className="mx-auto w-3/4 dark:bg-azure-900 dark:border-azure-700 dark:border bg-azure-100/60 shadow-lg min-h-[600px] lg:w-1/3 h-fit min-w-[350px] p-2 lg:p-5 gap-12 flex flex-col rounded-lg">
      <ProjectSearch />
    </div>
  );
}
