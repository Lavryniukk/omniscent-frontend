"use client";
import { useSlideIn } from "@/app/shared/hooks/useSlideIn";
import { ButtonWithMovingBorder } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import Link from "next/link";
let Title = () => {
  const [slidingAnimation, parentSlidingAnimation] = useSlideIn();
  return (
    <motion.div
      {...parentSlidingAnimation}
      className="overflow-visible flex w-x flex-col items-start  justify-center z-10  text-left overflow-x-clip relative gap-8 w-full"
    >
      <article className="space-y-4 max-w-2xl ">
        <motion.h1
          {...slidingAnimation}
          className=" antialiased leading-none
      				   relative  hyphens-none drop-shadow-lg text-4xl font-semibold"
        >
          Cleverize - education for developers powered by AI
        </motion.h1>
        <motion.h2
          {...slidingAnimation}
          className=" text-muted-foreground hyphens-manual max-w-xl  text-base md:text-lg  "
        >
          Unleash your full potential with personalized AI-driven tech
          education.
        </motion.h2>
      </article>

      <motion.div {...slidingAnimation} className="flex  ">
        <Link className="link link-primary link-size-lg" href="workspace">
          Get started
        </Link>
      </motion.div>
    </motion.div>
  );
};

function AttentionBanner() {
  return (
    <ButtonWithMovingBorder
      containerClassName="w-[clamp(350px,70vw,1200px)] h-fit top-0 absolute "
      borderRadius="0.5rem"
      duration={6000}
      borderClassName=" bg-red-700 dark:bg-red-300 "
      className=" text-base cursor-default select-text  border-0 text-popover-foreground bg-popover  w-full  p-2"
    >
      ! Attention: New version of Cleverize is out! It might have some bugs
      though, please report them to us through email or any other way you find.
    </ButtonWithMovingBorder>
  );
}

export default Title;
