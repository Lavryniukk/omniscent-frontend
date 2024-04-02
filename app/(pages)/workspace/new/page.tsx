import { NavigationButton } from "@/app/shared/components/buttons";

import Or from "./ui/OrSection";
import { RoadmapCreationForm, TemplateRoadmapsSearch } from "@/app/widgets";
import CreditCostBadge from "@/app/features/credit-cost-badge/CreditCostBadge";
import CreditsCounter from "@/app/features/credits-counter/CreditsCounter";

function New() {
  return (
    <div className="max-w-10xl select-none flex lg:flex-row flex-col px-2 py-32 max-lg:gap-3  items-center min-h-screen justify-around  mx-auto">
      <NavigationButton href="/workspace" title="Workspace" />
      <CreditsCounter className="absolute top-5 right-5" />
      <div className="mx-auto w-full relative sm:w-3/4 border shadow-lg min-h-[600px] lg:w-1/3 h-fit min-w-[350px] sm:p-2 lg:p-5 gap-12 flex flex-col rounded-lg">
        <CreditCostBadge cost={10} className="top-2 absolute right-2" />

        <TemplateRoadmapsSearch />
      </div>

      <Or />

      <RoadmapCreationForm />
    </div>
  );
}

export default New;
