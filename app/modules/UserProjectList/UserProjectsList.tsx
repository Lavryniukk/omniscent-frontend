import ProjectsNotFound from "./components/ProjectsNotFound/ProjectsNotFound";
import { fetchProjects } from "./api/fetchProjects";
import FetchedRoadmaps from "./components/FetchedRoadmaps/FetchedRoadmaps";
import ErrorAlert from "@/app/UI/alerts/ErrorAlert/ErrorAlert";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import Button from "@/app/UI/buttons/Button";

export default async function UserProjects() {
  try {
    let roadmaps = await fetchProjects();
    return roadmaps.length === 0 ? (
      <ProjectsNotFound />
    ) : (
      <div className="mx-auto flex items-center flex-col gap-5 w-full min-w-[30px] py-16 sm:w-1/3 max-w-[600px] sm:min-w-[500px] sm:px-5 sm:py-16 font-inter h-fit border-2 border-accent rounded-lg relative">
        <h1 className="text-4xl text-center font-bold mx-auto text-text font-inter">
          Your projects
        </h1>
        <LanguageSelector />
        <FetchedRoadmaps roadmaps={roadmaps} />
      </div>
    );
  } catch (err) {
    console.log(err);
    return (
      <>
        <h1 className="text-2xl text-center font-bold mx-auto text-text  font-inter">
          Whoops, error occurred! If this error persists, please contact us.
        </h1>
        <Button callback={() => location.reload()}>Retry</Button>
        <ErrorAlert message="An error occurred while loading your projects. Please try again later." />
      </>
    );
  }
}
