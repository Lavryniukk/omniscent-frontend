type SlideInAnimation = {
  initial: {
    y: number;
    opacity: number;
    transition: { type: string; delay: 0 };
  };
  animate: {
    y: number;
    opacity: number;
    transition: { type: string; delay: 0.3 };
  };
};

type ParentSlideInAnimation = {
  initial: {
    y: number;
    opacity: number;
    transition: { type: string; delay: 0; staggerChildren: number };
  };
  animate: {
    y: number;
    opacity: number;
    transition: { type: string; delay: 0.3; staggerChildren: number };
  };
};

export const useSlideIn = (): [SlideInAnimation, ParentSlideInAnimation] => {
  const transition = { type: "spring", duration: 0.8 };

  return [
    {
      initial: {
        y: 30,
        opacity: 0,
        transition: {
          ...transition,
          delay: 0,
        },
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          ...transition,
          delay: 0.3,
        },
      },
    },
    {
      initial: {
        y: 30,
        opacity: 0,
        transition: {
          ...transition,
          delay: 0,
          staggerChildren: 0.3,
        },
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          ...transition,
          delay: 0.3,
          staggerChildren: 0.3,
        },
      },
    },
  ];
};
