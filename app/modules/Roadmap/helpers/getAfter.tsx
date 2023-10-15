import { RoadmapObject } from "../types/roadmapObject";
import { RoadmapObjectArray } from "../types/RoadmapObjectArray";

let getAfter = (node?: RoadmapObject, array?: RoadmapObjectArray) => {
  let beforeStyle =
    "after:h-[2px] after:absolute after:w-1/2 after:bg-primary after:top-1/2 after:right-[80px]";

  if (array && node == array[0]) {
    beforeStyle = "";
  }

  return beforeStyle;
};

export default getAfter;
