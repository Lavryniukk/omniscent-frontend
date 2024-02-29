import {
  CornerUpLeft,
  ArrowUp,
  ArrowDown,
  CornerDownRight,
} from "lucide-react";

export default function Or() {
  return (
    <article className="text-xl flex flex-col items-center text-center justify-center gap-12 textblack 950 dark:text-foreground">
      <section className="flex flex-col items-center justify-center gap-5">
        <CornerUpLeft size={50} className="hidden lg:block" />
        <ArrowUp className="max-lg:block hidden" />
        <h2 className="text-2xl font-semibold">
          Choose from existing templates
        </h2>
      </section>

      <p>
        <i>or</i>
      </p>

      <section className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-2xl font-semibold">
          Create your own custom roadmap
        </h2>
        <ArrowDown className="max-lg:block hidden" />
        <CornerDownRight size={50} className="hidden lg:block" />
      </section>
    </article>
  );
}
