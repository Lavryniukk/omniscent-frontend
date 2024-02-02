import { RoadmapCreationForm, RoadmapTemplates } from "@/app/modules";
import { NavigationButton } from "@/app/shared/components/buttons";
import {
  ArrowDown,
  ArrowUp,
  CornerDownRight,
  CornerUpLeft,
} from "lucide-react";

function New() {
  return (
    <div className="max-w-10xl select-none flex lg:flex-row flex-col py-32 max-lg:gap-3  items-center min-h-screen justify-around  mx-auto">
      <NavigationButton href="/workspace" title="Workspace" />

      <RoadmapTemplates />

      <article className="text-xl flex flex-col items-center text-center justify-center gap-12 text-azure-950 dark:text-azure-50">
        <section className="flex flex-col items-center justify-center gap-5">
          <CornerUpLeft size={50} className="hidden lg:block" />
          <ArrowUp className="max-lg:block hidden" />
          <h2 className="text-2xl font-semibold">
            Choose from existing templates
          </h2>
        </section>

        <p>
          <i>or</i>
        </p>

        <section className="flex flex-col items-center justify-center gap-5">
          <h2 className="text-2xl font-semibold">
            Create your own custom roadmap
          </h2>
          <ArrowDown className="max-lg:block hidden" />
          <CornerDownRight size={50} className="hidden lg:block" />
        </section>
      </article>

      <RoadmapCreationForm />
    </div>
  );
}

export default New;
