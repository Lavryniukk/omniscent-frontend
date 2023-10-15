import { RoadmapObject } from "../types/roadmapObject";
import { RoadmapObjectArray } from "../types/RoadmapObjectArray";

let getAfter = (node?: RoadmapObject, array?: RoadmapObjectArray) => {
  let afterStyle =
    "after:h-[2px] after:absolute after:w-1/2 after:bg-primary after:top-1/2 after:right-[80px]";
  if (array && node == array[0]) {
    afterStyle = "";
  }
  return afterStyle;
};

export default getAfter;
