import { Handshake } from "lucide-react";
import Link from "next/link";

export default function MentoringSection() {
  return (
    <section id="feature-section" className=" px-2 md:px-8 mx-auto">
      <div className=" h-fit  w-full   mx-auto flex flex-col">
        <figure className="bg-green-200 text-green-700 shadow-green-400/70 p-2 rounded-full shadow-xl  w-fit  dark:bg-green-800 dark:text-green-400  dark:shadow-green-800">
          <Handshake size={60} />
        </figure>
        <h3 className="text-green-700 dark:text-green-400">Mentoring</h3>
        <h2>Have a question or need help? Just ask!</h2>
        <p>
          Since all our teachers are AI-models, you can ask them anything,
          anytime. They are always there to help you out. You can also ask them
          to explain a concept to you, or to help you with a problem you are
          facing. They are always there to help you out.
        </p>
      </div>
      <div className="relative   w-full h-0 pb-[56.250%]">
        <iframe
          allow="fullscreen;autoplay"
          height="100%"
          className="border-0 rounded-2xl  mt-8 w-full h-full absolute top-0 left-0 overflow-hidden"
          src="https://streamable.com/e/fjojkc?autoplay=1&muted=1&nocontrols=1"
          width="100%"
        ></iframe>
      </div>
    </section>
  );
}
