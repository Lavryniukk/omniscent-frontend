"use client";
import Button from "@/app/UI/buttons/Button";
import { useSlideIn } from "@/app/shared/hooks/useSlideIn";
import { motion } from "framer-motion";
let Title = () => {
  const [slidingAnimation, parentSlidingAnimation] = useSlideIn();

  return (
    <motion.div
      {...parentSlidingAnimation}
      className="overflow-visible py-24 max-w-10xl font-inter overflow-x-clip justify-start items-center relative flex-col gap-16 flex mx-auto w-full"
    >
      <article className="flex flex-col w-full gap-8">
        <motion.h1
          {...slidingAnimation}
          className="bg-gradient-to-br dark:from-azure-50 dark:to-azure-100/70 to-70% from-azure-950 to-azure-800 text-transparent w-full  antialiased mx-auto leading-none
      				  font-inter relative tracking-tight hyphens-none drop-shadow-lg bg-clip-text text-center text-[40px] md:text-[72px] lg:text-[84px] font-semibold"
        >
          Cleverize - the
          <br className="xs:hidden" /> AI solution{" "}
          <br className=" max-xs:hidden" /> for <br className="xs:hidden" />{" "}
          self-education
        </motion.h1>

        <motion.h2
          {...slidingAnimation}
          className="  text-azure-800/80 dark:text-azure-200/70 hyphens-manual mx-auto flex items-center justify-center w-full text-base md:text-[22px] text-center "
        >
          Unleash your full potential with <br className="sm:hidden" />{" "}
          personalized <br className="max-sm:hidden" /> AI-driven tech{" "}
          <br className="sm:hidden" /> education.
        </motion.h2>
      </article>

      <motion.div {...slidingAnimation} className="flex gap-4 ">
        <Button href="/workspace">Get started</Button>
        <Button variant="ghost" href="/workspace">
          Workspace
        </Button>
      </motion.div>
    </motion.div>
  );
};

function AttentionBanner() {
  return (
    <div className=" top-20 mx-auto  p-4 backdrop-blur-md bg-opacity-50 border-text rounded-lg left-1/4 z-10 bg-secondary text-text">
      ! Attention: We`re making improvements! Our service is currently
      undergoing technical maintenance and will be back shortly. Thank you for
      your patience.
    </div>
  );
}

export default Title;
