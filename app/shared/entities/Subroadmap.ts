import Node from "./Node";

export default interface SubroadmapInterface {
  title: string;
  node_list: Node[];
  isCompleted: boolean;
}
