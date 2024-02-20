import { RoadmapSize } from "../types/roadmap-size";

type TemplateNode = {
  title: string;
  _id: string;
  size: RoadmapSize;
  children: string[];
  created_at: Date;
  lesson_id?: string;
};

type TemplateNodeWithChildren = TemplateNode & {
  children: TemplateNode[];
};
export type { TemplateNode, TemplateNodeWithChildren };
export default TemplateNode;
