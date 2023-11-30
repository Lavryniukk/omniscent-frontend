import SubroadmapNodeInterface from "./SubroadmapNode";

export default interface SubroadmapInterface {
  title: string;
  node_list: SubroadmapNodeInterface[];
  isCompleted: boolean;
}
