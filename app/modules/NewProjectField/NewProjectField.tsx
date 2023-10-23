import Link from "next/link";
import ProjectSearch from "./components/ProjectsSearch/ProjectSearch";

export default function NewProjectField() {
  return (
    <div className="mx-auto w-1/2  min-w-[500px] h-fit min-h-[800px] p-5 rounded-xl">
      <h1 className="text-4xl text-center font-bold mx-auto text-text trancking-tight mt-10 font-inter">
        Choose from existing templates
      </h1>
      <ProjectSearch />
      <div className="  w-fit ml-auto opacity-70 hover:opacity-90   border-secondary rounded-lg  text-accent text-right  text-md whitespace-nowrap mt-10">
        <Link href="/projects/create" className="">
          Not satisfied with templates? Create your own!
        </Link>
      </div>
    </div>
  );
}
