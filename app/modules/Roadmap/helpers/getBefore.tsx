import { RoadmapObject } from "../types/roadmapObject";
import { RoadmapObjectArray } from "../types/RoadmapObjectArray";

let getBefore = (node?: RoadmapObject, array?: RoadmapObjectArray) => {
  let beforeStyle =
    "before:h-[2px] before:absolute before:w-1/2 before:bg-primary before:top-1/2 before:left-[80px]";

  if (array && node == array[array.length - 1]) {
    beforeStyle = "";
  }
  return beforeStyle;
};

export default getBefore;
