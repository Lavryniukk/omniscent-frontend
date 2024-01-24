"use client";
import Button from "@/app/UI/buttons/Button";
import { useSlideIn } from "@/app/shared/hooks/useSlideIn";
import { motion, spring } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
let Title = () => {
  let { theme } = useTheme();

  const [slidingAnimation, parentSlidingAnimation] = useSlideIn();

  return (
    <motion.div
      {...parentSlidingAnimation}
      className="overflow-visible max-w-10xl font-inter overflow-x-clip items-center relative flex-col gap-6 flex mx-auto w-full"
    >
      {/* <div className=" top-20 mx-auto  p-4 backdrop-blur-md bg-opacity-50 border-text rounded-lg left-1/4 z-10 bg-secondary text-text">
       ! Attention: We`re making improvements! Our service is currently
       undergoing technical maintenance and will be back shortly. Thank you for
       your patience.
      </div> */}
      <motion.div
        {...slidingAnimation}
        className="mx-auto group border relative xl:p-6 lg:p-5 p-4 w-fit h-fit flex items-center justify-center rounded-xl border-secondary bg-background"
      >
        {theme && theme == "light" ? (
          <Image
            src="/images/cleverize-dark.webp"
            alt="cleverize logo icon svg"
            className="aspect-square w-16 lg:w-20"
            width={100}
            height={100}
          />
        ) : (
          <Image
            src="/images/cleverize.webp"
            alt="cleverize logo icon svg"
            className="aspect-square w-16 lg:w-20"
            width={100}
            height={100}
          />
        )}
        <motion.div
          transition={{ type: spring, duration: 0.8, delay: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute group-hover:animate-pulse rounded-full transition-all bg-gradient-to-r from-primary/80 to-primary/60 aspect-square xl:w-40 lg:w-36 w-32 -z-10 blur-2xl"
        />
      </motion.div>
      <>
        <motion.h2
          {...slidingAnimation}
          className=" text-xl text-center mx-auto sm:text-2xl text-accent pl-1 tracking-[5px] font-extrabold flex justify-center w-fit"
        >
          CLEVERIZE
        </motion.h2>

        <motion.h1
          {...slidingAnimation}
          className="bg-gradient-to-t from-text to-text/70 text-transparent w-full md:w-10/12 antialiased mx-auto leading-none
    				  font-inter relative tracking-tight hyphens-none drop-shadow-lg bg-clip-text font-extrabold text-center text-[40px] xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          The{" "}
          <span className="text-text drop-shadow-[0_5px_15px_rgba(var(--primary),0.6)]">
            AI solution
          </span>
          <br /> for self-education
        </motion.h1>
      </>

      {/* Description text [max(40px,min(8vw,100px))] */}
      <motion.p
        {...slidingAnimation}
        className=" mb-6 text-accent hyphens-manual mx-auto flex items-center justify-center w-10/12 md:w-3/4 lg:w-1/2 text-md sm:text-xl text-center "
      >
        Unleash your full potential with personalized AI-driven tech education.
      </motion.p>

      <motion.div {...slidingAnimation} className="flex gap-5 ">
        <Button href="/workspace">Get started</Button>
        <Button variant="ghost" href="/workspace">
          Workspace
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Title;
