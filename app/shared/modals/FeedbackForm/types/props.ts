type RoadmapProps = {
  roadmapId: string;
  lessonId?: never;
  placeholder?: string;
};

type LessonProps = {
  lessonId: string;
  roadmapId?: never;
  placeholder?: string;
};

export type FeedbackFormProps = RoadmapProps | LessonProps;
