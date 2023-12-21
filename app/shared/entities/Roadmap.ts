type RoadmapNode = {
  title: string;
  _id: string;
  children: RoadmapNode[];
  owner_id?: string;
  is_completed: boolean;
  created_at: Date;
  conversation_id?: string;
  updated_at: Date;
};

export default RoadmapNode;
