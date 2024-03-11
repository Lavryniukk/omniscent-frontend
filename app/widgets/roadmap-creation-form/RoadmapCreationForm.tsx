import { RoadmapSize } from "@/app/shared/types/roadmap-size";
import { createRoadmapAction } from "./actions/create-roadmap-action";
import { Button } from "@/components/ui/button";

export default function NewProjectForm() {
  return (
    <form
      className="flex flex-col items-start  dark:border shadow-xl gap-8 w-3/4 lg:w-1/3 min-w-[350px] h-fit justify-center xs:mx-auto border-transparent bgblack 100/60 dark:bgblack 900 rounded-lg xs:borderblack 950/40 xs:dark:borderblack 700 p-5 xs:py-12 mx-3"
      action={createRoadmapAction}
    >
      <section className="gap-2 flex flex-col w-full">
        <label htmlFor="roadmap-name">
          <span className="textblack 950 dark:text-foreground text-lg text-left font-semibold">
            Name of technology
          </span>
        </label>
        <input
          id="roadmap-title"
          required
          name="title"
          type="text"
          placeholder="Java"
          className={`relative overflow-visible 
             box-border shadow-md  bgblack 200 dark:bgblack 800 p-2 rounded-md dark:border dark:borderblack 700 transition-all duration-300  text-base
  				  outline-none  w-full peer `}
        />
      </section>
      <section className="gap-2 flex flex-col w-full">
        <label htmlFor="roadmap-size">
          <span className="textblack 950 dark:text-foreground text-lg text-left font-semibold">
            Type of technology
          </span>
        </label>
        <select
          required
          id="roadmap-size"
          name="size"
          defaultValue={RoadmapSize.MEDIUM}
          className="bgblack 200  p-2 rounded-md dark:borderblack 700 dark:border dark:bgblack 800 peer appearance-none box-border transition-all duration-200 text-base
  				 textblack 950/70 dark:text-foreground/70 outline-none cursor-pointer w-full "
        >
          <option value={RoadmapSize.MEDIUM}>Programming language</option>
          <option value={RoadmapSize.SMALL}>Framework / Library </option>
        </select>
      </section>
      <section className="flex w-full justify-end items-end">
        <Button type="submit">Submit</Button>
      </section>
    </form>
  );
}
