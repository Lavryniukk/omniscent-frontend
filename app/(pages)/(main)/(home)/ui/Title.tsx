"use client";
import { useSlideIn } from "@/app/shared/hooks/useSlideIn";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
let Title = () => {
  const [slidingAnimation, parentSlidingAnimation] = useSlideIn();
  const router = useRouter();
  return (
    <motion.div
      {...parentSlidingAnimation}
      className="overflow-visible py-24 mt-40 z-10 max-w-10xl font-inter overflow-x-clip justify-start items-center relative flex-col gap-16 flex mx-auto w-full"
    >
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
        <Button size={"lg"}>Get started</Button>
        <Button
          variant="ghost"
          size={"lg"}
          onClick={() => {
            router.push("/sign-up");
          }}
        >
          Workspace
        </Button>
      </motion.div>
    </motion.div>
  );
};

function AttentionBanner() {
  return (
    <div className=" top-20 mx-auto  p-4 backdrop-blur-md bg-opacity-50  rounded-lg left-1/4 z-10 ">
      ! Attention: We`re making improvements! Our service is currently
      undergoing technical maintenance and will be back shortly. Thank you for
      your patience.
    </div>
  );
}

export default Title;
