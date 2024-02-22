import FetchedRoadmaps from "./components/FetchedRoadmaps";
import LanguageSelector from "./components/LanguageSelector";
import RoadmapsFetchErrorComponent from "./components/RoadmapsFetchErrorComponent";
import { fetchProjects } from "./api/fetchProjects";
import RoadmapsNotFoundComponent from "./components/RoadmapsNotFoundComponent";
export default async function UserProjects() {
  try {
    const roadmaps = await fetchProjects();
    return (
      <div className="mx-auto flex items-center flex-col gap-5 w-full min-w-[30px] py-16 sm:w-1/3 max-w-[600px] sm:min-w-[500px] sm:px-5 sm:py-16 font-inter h-fit dark:border-azure-800/70 dark:border-2 shadow-xl rounded-lg relative">
        <h1 className="text-4xl text-center font-bold mx-auto text-azure-950 dark:text-azure-50 font-inter">
          Your projects
        </h1>

        {roadmaps.length > 0 && (
          <>
            <LanguageSelector />
            <FetchedRoadmaps roadmaps={roadmaps} />
          </>
        )}
        {roadmaps.length === 0 && <RoadmapsNotFoundComponent />}
      </div>
    );
  } catch (err) {
    console.log(err);
    return <RoadmapsFetchErrorComponent />;
  }
}
