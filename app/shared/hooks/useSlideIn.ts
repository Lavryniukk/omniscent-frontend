type SlideInAnimation = {};

type ParentSlideInAnimation = {};

export const useSlideIn = (): [SlideInAnimation, ParentSlideInAnimation] => {
  const transition = { type: "spring", duration: 0.8 };

  const parentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const childVariants = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ...transition,
      },
    },
  };

  return [
    {
      variants: { ...childVariants },
    },
    {
      variants: { ...parentVariants },
      initial: "hidden",
      animate: "show",
    },
  ];
};
