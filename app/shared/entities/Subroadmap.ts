import Node from "./RoadmapNode";

export default interface SubroadmapInterface {
  title: string;
  node_list: Node[];
  isCompleted: boolean;
}
