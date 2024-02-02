import { RoadmapCreationForm } from "@/app/modules";
import { NavigationButton } from "@/app/shared/components/buttons";

const Create = () => {
  return (
    <div className="flex h-screen border-accent items-center px-3">
      <NavigationButton href="/workspace" title="Workspace" />
      <RoadmapCreationForm />
    </div>
  );
};

export default Create;
