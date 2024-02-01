import { RoadmapCreationForm, RoadmapTemplates } from "@/app/modules";
import { NavigationButton } from "@/app/shared/components/buttons";

function New() {
  return (
    <div className="max-w-10xl select-none flex items-center justify-around h-screen mx-auto">
      <NavigationButton href="/workspace" title="Workspace" />

      <RoadmapTemplates />

      <p className="text-xl text-accent ">or</p>

      <RoadmapCreationForm />
    </div>
  );
}

export default New;
