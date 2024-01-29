import { RoadmapCreationForm } from "@/app/modules";
import { NavigationButton } from "@/app/shared/components/buttons";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Workspace • Create new project",
  description:
    "This is a place to create new projects. Project is goal, something you want to learn. It can be anything from assembly to python!",
};
const Create = () => {
  return (
    <div className="flex h-screen border-accent items-center px-3">
      <NavigationButton href="/workspace" title="Workspace" />
      <RoadmapCreationForm />
    </div>
  );
};

export default Create;
