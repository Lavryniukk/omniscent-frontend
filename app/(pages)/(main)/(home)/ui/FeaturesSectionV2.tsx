import { cn } from "@/lib/utils";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section id="feature-section" className="max-w-7xl mx-auto">
      <div className=" h-fit max-w-7xl w-full px-8 mx-auto flex flex-col">
        <figure>
          <GraduationCap size={60} className=" text-primary" />
        </figure>
        <h3>Flexibility</h3>
        <h2>Learn whatever You want, whenever You want</h2>
        <p>
          Since all learning material comes from well-trained AI-models, you can
          learn anything related to coding out there. You can learn at your own
          pace, and at your own time.
          <br />
          <i>`The power of the sun, in the palm of your hand.`</i>
        </p>
        <Link
          className="link link-size-lg w-fit mt-8 link-primary "
          href="workspace"
        >
          Start learning
        </Link>
      </div>
      <div className="max-w-5xl flex flex-wrap gap-6 ml-auto md:items-end justify-center md:justify-end mt-8 relative ">
        {/* <div className="absolute w-1/2 h-full bg-gradient-to-l pointer-events-none top-0   from-background  z-50 "></div> */}
        <Key
          label={"Python"}
          className="shadow-[8px_8px_0px_var(--purple-700)] bg-purple-400 dark:bg-purple-700 dark:shadow-[8px_8px_0px_var(--purple-950)]"
        />
        <Key
          label={"JavaScript"}
          className="shadow-[8px_8px_0px_var(--yellow-700)] bg-yellow-400 dark:bg-yellow-700 dark:shadow-[8px_8px_0px_var(--yellow-950)]"
        />
        <Key
          label={"React"}
          className="shadow-[8px_8px_0px_var(--blue-700)] bg-blue-400 dark:bg-blue-700 dark:shadow-[8px_8px_0px_var(--blue-950)]"
        />
        <Key
          label={"Node.js"}
          className="shadow-[8px_8px_0px_var(--amber-700)] bg-amber-400 dark:bg-amber-700 dark:shadow-[8px_8px_0px_var(--amber-950)]"
        />
        <Key
          label={"Java"}
          className="shadow-[8px_8px_0px_var(--red-700)] bg-red-400 dark:bg-red-700 dark:shadow-[8px_8px_0px_var(--red-950)]"
        />
        <Key
          label={"C#"}
          className="shadow-[8px_8px_0px_var(--fuchsia-700)] bg-fuchsia-400 dark:bg-fuchsia-700 dark:shadow-[8px_8px_0px_var(--fuchsia-950)]"
        />
        <Key
          label={"Ruby"}
          className="shadow-[8px_8px_0px_var(--pink-700)] bg-pink-400 dark:bg-pink-700 dark:shadow-[8px_8px_0px_var(--pink-950)]"
        />
        <Key
          label={"Swift"}
          className="shadow-[8px_8px_0px_var(--indigo-700)] bg-indigo-400 dark:bg-indigo-700 dark:shadow-[8px_8px_0px_var(--indigo-950)]"
        />
        <Key
          label={"Kotlin"}
          className="shadow-[8px_8px_0px_var(--violet-700)] bg-violet-400 dark:bg-violet-700 dark:shadow-[8px_8px_0px_var(--violet-950)]"
        />
        <Key
          label={"Django"}
          className="shadow-[8px_8px_0px_var(--rose-700)] bg-rose-400 dark:bg-rose-700 dark:shadow-[8px_8px_0px_var(--rose-950)]"
        />
        <Key
          label={"Flutter"}
          className="shadow-[8px_8px_0px_var(--lime-700)] bg-lime-400 dark:bg-lime-700 dark:shadow-[8px_8px_0px_var(--lime-950)]"
        />
        <Key
          label={"TypeScript"}
          className="shadow-[8px_8px_0px_var(--cyan-700)] bg-cyan-400 dark:bg-cyan-700 dark:shadow-[8px_8px_0px_var(--cyan-950)]"
        />
        <Key
          label={"Vue.js"}
          className="shadow-[8px_8px_0px_var(--green-700)] bg-green-400 dark:bg-green-700 dark:shadow-[8px_8px_0px_var(--green-950)]"
        />
        <Key
          label={"Angular"}
          className="shadow-[8px_8px_0px_var(--red-700)] bg-red-400 dark:bg-red-700 dark:shadow-[8px_8px_0px_var(--red-950)]"
        />
        <Key
          label={"Rust"}
          className="shadow-[8px_8px_0px_var(--orange-700)] bg-orange-400 dark:bg-orange-700 dark:shadow-[8px_8px_0px_var(--orange-950)]"
        />
        <Key
          label={"Go"}
          className="shadow-[8px_8px_0px_var(--sky-700)] bg-sky-400 dark:bg-sky-700 dark:shadow-[8px_8px_0px_var(--sky-950)]"
        />
        <Key
          label={"PHP"}
          className="shadow-[8px_8px_0px_var(--purple-700)] bg-purple-400 dark:bg-purple-700 dark:shadow-[8px_8px_0px_var(--purple-950)]"
        />

        <Key
          label={"Docker"}
          className="shadow-[8px_8px_0px_var(--blue-700)] bg-blue-400 dark:bg-blue-700 dark:shadow-[8px_8px_0px_var(--blue-950)]"
        />
        <Key
          label={"TensorFlow"}
          className="shadow-[8px_8px_0px_var(--orange-700)] bg-orange-400 dark:bg-orange-700 dark:shadow-[8px_8px_0px_var(--orange-950)]"
        />
        <Key
          label={"React Native"}
          className="shadow-[8px_8px_0px_var(--cyan-700)] bg-cyan-400 dark:bg-cyan-700 dark:shadow-[8px_8px_0px_var(--cyan-950)]"
        />
        <Key
          label={"Next.js"}
          className="shadow-[8px_8px_0px_var(--teal-700)] bg-teal-400 dark:bg-teal-700 dark:shadow-[8px_8px_0px_var(--teal-950)]"
        />
        <Key
          label={"GraphQL"}
          className="shadow-[8px_8px_0px_var(--pink-700)] bg-pink-400 dark:bg-pink-700 dark:shadow-[8px_8px_0px_var(--pink-950)]"
        />
        <Key
          label={"Svelte"}
          className="shadow-[8px_8px_0px_var(--orange-700)] bg-orange-400 dark:bg-orange-700 dark:shadow-[8px_8px_0px_var(--orange-950)]"
        />
        <Key
          label={"Laravel"}
          className="shadow-[8px_8px_0px_var(--red-700)] bg-red-400 dark:bg-red-700 dark:shadow-[8px_8px_0px_var(--red-950)] "
        />
      </div>
    </section>
  );
}
const Key = ({ label, className }: { label: string; className: string }) => {
  return (
    <div className=" rotate-6   box-border group cursor-pointer ">
      <div
        className={cn(
          className,
          ` transform peer transition-all duration-300 text-foreground h-fit -skew-x-[25deg] hover:border-primary group-active:translate-x-[4px] box-border border-4 border-transparent group-hover:shadow-none group-active:shadow-none group-hover:translate-x-[4px] group-active:translate-y-[4px] group-hover:translate-y-[4px] md:px-8 px-2 py-1 md:py-4 w-fit text-xs sm:text-sm md:text-xl  rounded-md `
        )}
      >
        {label}
      </div>
    </div>
  );
};
