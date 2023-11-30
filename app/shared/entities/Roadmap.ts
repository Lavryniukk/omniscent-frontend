import SubroadmapInterface from "./Subroadmap";

export default interface RoadmapInterface {
  title: string;
  _id: string;
  sub_roadmap_list: SubroadmapInterface[];
  owner_id: string;
  isCompleted: boolean;
  created_at: Date;
  // last_interaction_at: string;
}
