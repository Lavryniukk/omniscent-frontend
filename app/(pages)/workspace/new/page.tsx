import { RoadmapCreationForm, RoadmapTemplates } from "@/app/modules";
import { NavigationButton } from "@/app/shared/components/buttons";

function New() {
  return (
    <div className="max-w-10xl select-none flex flex-col py-20 gap-10 items-center justify-around  mx-auto">
      <NavigationButton href="/workspace" title="Workspace" />

      <RoadmapTemplates />

      <p className="text-xl text-accent">or</p>

      <RoadmapCreationForm />
    </div>
  );
}

export default New;
