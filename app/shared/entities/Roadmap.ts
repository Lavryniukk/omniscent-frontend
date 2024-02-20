type RoadmapNode = {
  title: string;
  _id: string;
  children: RoadmapNode[];
  owner_id?: string;
  is_completed: boolean;
  created_at: Date;
  parent_node_id?: string;
  lesson_id?: string;
  updated_at: Date;
};

export default RoadmapNode;
