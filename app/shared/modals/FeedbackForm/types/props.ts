type RoadmapProps = {
  roadmapId: string;
  lessonId?: never;
};

type LessonProps = {
  lessonId: string;
  roadmapId?: never;
};

export type FeedbackFormProps = RoadmapProps | LessonProps;
