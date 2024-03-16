import { RoadmapSize } from "@/app/shared/types/roadmap-size";
import { createRoadmapAction } from "./actions/create-roadmap-action";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SubmitButton } from "./ui/SubmitButton";
//FIXME Action throws a client error? WTF is that?
export default function NewProjectForm() {
  return (
    <form
      className="flex flex-col items-start border rounded-lg shadow-xl gap-8 w-3/4 lg:w-1/3 min-w-[350px] h-fit justify-center xs:mx-auto  p-5 xs:py-12 mx-3"
      action={createRoadmapAction}
    >
      <h1 className="text-center font-semibold text-2xl ">
        Generate your own roadmap
        <span className="italic text-base text-primary/60 ">(AI)</span>
      </h1>
      <section className="gap-2 flex flex-col w-full">
        <Label htmlFor="roadmap-title">Name of technology</Label>
        <Input
          id="roadmap-title"
          required
          name="title"
          type="text"
          placeholder="Java"
        />
      </section>
      <section className="gap-2 flex flex-col w-full">
        <Label htmlFor="roadmap-size">Type of technology</Label>
        <Select name="size" required defaultValue={RoadmapSize.MEDIUM}>
          <SelectTrigger id="roadmap-size">
            <SelectValue placeholder={"Programming language"} />
          </SelectTrigger>
          <SelectContent defaultValue={RoadmapSize.MEDIUM}>
            <SelectItem value={RoadmapSize.MEDIUM}>
              Programming language
            </SelectItem>
            <SelectItem value={RoadmapSize.SMALL}>
              Framework / Library
            </SelectItem>
          </SelectContent>
        </Select>
      </section>
      <SubmitButton />
    </form>
  );
}
