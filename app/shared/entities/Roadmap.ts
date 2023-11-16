import Subroadmap from "./Subroadmap";

export default interface RoadmapInterface {
  title: string;
  _id: string;
  sub_roadmap_list: Subroadmap[];
  owner_id: string;
  isCompleted: boolean;
  created_at: Date;
  // last_interaction_at: string;
}
