export type Project = {
  title: string;
  _id: string;
  node_list: {
    title: string;
    subroadmap_id?: string;
  };
  owner_id: string;
  created_at: string;
  // last_interaction_at: string;
};
