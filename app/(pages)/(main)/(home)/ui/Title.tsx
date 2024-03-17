"use client";
import { useSlideIn } from "@/app/shared/hooks/useSlideIn";
import { Button } from "@/components/ui/button";
import {
  ButtonWithMovingBorder,
  MovingBorder,
} from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
let Title = () => {
  const [slidingAnimation, parentSlidingAnimation] = useSlideIn();
  const router = useRouter();
  return (
    <motion.div
      {...parentSlidingAnimation}
      className="overflow-visible py-24 mt-40 z-10 max-w-10xl font-inter overflow-x-clip justify-start items-center relative flex-col gap-16 flex mx-auto w-full"
    >
      <AttentionBanner />
      <article className="flex flex-col w-full gap-8">
        <motion.h1
          {...slidingAnimation}
          className="bg-gradient-to-br to-70% from-foreground to-foreground/80 text-transparent w-full  antialiased mx-auto leading-none
      				  font-inter relative tracking-tight hyphens-none drop-shadow-lg bg-clip-text text-center  text-[clamp(40px,4vw,84px)] font-bold"
        >
          Cleverize - the
          <br className="xs:hidden" /> AI solution
          <br className=" max-xs:hidden" /> for <br className="xs:hidden" />
          <span className=" whitespace-nowrap text-foreground drop-shadow-primary shadow-primary">
            self-education
          </span>
        </motion.h1>

        <motion.h2
          {...slidingAnimation}
          className=" text-muted-foreground hyphens-manual mx-auto flex items-center justify-center w-full text-base md:text-[22px] text-center "
        >
          Unleash your full potential with <br className="sm:hidden" />{" "}
          personalized <br className="max-sm:hidden" /> AI-driven tech{" "}
          <br className="sm:hidden" /> education.
        </motion.h2>
      </article>

      <motion.div {...slidingAnimation} className="flex gap-4 ">
        <Link href="workspace">
          <Button size={"lg"}>Get started</Button>
        </Link>
        {/* <Button
          variant="ghost"
          size={"lg"}
          onClick={() => {
            router.push("/sign-up");
          }}
        >
          Sign up
        </Button> */}
      </motion.div>
    </motion.div>
  );
};

function AttentionBanner() {
  return (
    <ButtonWithMovingBorder
      containerClassName="w-fit top-0 absolute "
      borderRadius="0.5rem"
      duration={6000}
      borderClassName=" bg-red-700 dark:bg-red-300 "
      className=" text-base cursor-default select-text  border-0 text-popover-foreground bg-popover  w-full whitespace-nowrap p-2"
    >
      ! Attention: New version of Cleverize is out! It might have some bugs
      though, please report them to us through email or any other way you find.
    </ButtonWithMovingBorder>
  );
}

export default Title;
