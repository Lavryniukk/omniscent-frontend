import { NavigationButton } from "@/app/shared/components/buttons";

import Or from "./ui/OrSection";
import { RoadmapCreationForm, TemplateRoadmapsSearch } from "@/app/widgets";

function New() {
  return (
    <div className="max-w-10xl select-none flex lg:flex-row flex-col py-32 max-lg:gap-3  items-center min-h-screen justify-around  mx-auto">
      <NavigationButton href="/workspace" title="Workspace" />

      <div className="mx-auto w-3/4 dark:bgblack 900 dark:borderblack 700 dark:border bgblack 100/60 shadow-lg min-h-[600px] lg:w-1/3 h-fit min-w-[350px] p-2 lg:p-5 gap-12 flex flex-col rounded-lg">
        <TemplateRoadmapsSearch />
      </div>

      <Or />

      <RoadmapCreationForm />
    </div>
  );
}

export default New;
