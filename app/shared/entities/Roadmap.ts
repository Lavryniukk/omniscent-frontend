export type SubroadmapNode = {
  title: string;
  isCompleted: boolean;
  conversation_id: string;
};

export type Subroadmap = {
  title: string;
  node_list: SubroadmapNode[];
  isCompleted: boolean;
};

type Roadmap = {
  title: string;
  _id: string;
  sub_roadmap_list: Subroadmap[];
  owner_id: string;
  isCompleted: boolean;
  created_at: Date;
};

export default Roadmap;
