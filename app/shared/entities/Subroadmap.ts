export default interface SubroadmapInterface {
  title: string;
  node_list: {
    title: string;
    isCompleted: boolean;
  }[];
  isCompleted: boolean;
}
