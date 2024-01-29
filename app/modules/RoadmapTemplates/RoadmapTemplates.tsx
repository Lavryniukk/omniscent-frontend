import Link from "next/link";
import ProjectSearch from "./components/ProjectsSearch/ProjectSearch"; // Importing the ProjectSearch component.

export default function NewProjectField() {
  return (
    <div className="mx-auto w-1/3  h-fit min-h-[800px] px-5 py-20 border border-secondary rounded-xl">
      <h1 className="text-4xl text-center font-bold mx-auto text-text tracking-tight mt-10 font-inter">
        Choose from existing templates
      </h1>
      <ProjectSearch />
      <div className="w-fit ml-auto opacity-70 border-secondary rounded-lg text-accent text-right text-md whitespace-nowrap">
        <p>
          Not satisfied with templates?{" "}
          <Link href="/workspace/create">Create your own!</Link>
        </p>
      </div>
    </div>
  );
}
