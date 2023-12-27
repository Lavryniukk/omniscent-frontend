import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function Version010() {
  return (
    <div className="max-w-4xl font-inter  space-y-20 text-text mx-auto p-6 mt-20">
      <Link
        className="text-accent flex items-center space-x-2 decoration-accent underline-offset-4 hover:text-text"
        href="/blog"
      >
        <MoveLeft />
        <p>Back to blog</p>
      </Link>
      <p className="text-accent ">Saturday, November 25th 2023</p>
      <h1 className="text-4xl font-bold mb-6">Cleverize v0.1.0</h1>
      {/* <p className="text-text text-xl  mt-10">
          We are thrilled to announce the launch of Cleverize, version V0.1.0
          (MVP), marking a significant milestone in our journey towards
          revolutionizing digital technology learning. Cleverize leverages
          cutting-edge AI to create a unique and interactive educational
          experience, tailor-made for each learner.
        </p> */}
      {/* <div className="w-full flex items-end flex-col ">
        <div className=" w-1/3 h-28">
          <p className="text-accent mb-5">Posted by</p>
          <div className="w-full flex flex-col justify-center ">
            <div className="rounded-full w-10 h-10 bg-secondary "></div>
            <p className="text-xs text-accent">@Lavryniukk</p>
          </div>
        </div>
        <div className="h-0.5 w-full bg-secondary"></div>
      </div> */}
      <div className="h-0.5 w-full bg-secondary" />

      <div>
        <h3 className="text-2xl font-semibold ">
          Core Features of Cleverize V0.1.0
        </h3>
        <ul className="list-disc list-inside text-lg space-y-10  mt-2">
          <li>
            <strong>AI-Generated Learning Roadmaps:</strong> Cleverize stands
            out with its capability to generate personalized learning roadmaps.
            By simply inputting their desired programming language focus – C++,
            Rust, Java, Python and other – users receive a custom-designed
            learning pathway. This roadmap is visually presented as a series of
            interconnected nodes, each representing a specific technology or
            topic, akin to a journey map guiding learners through the complex
            terrain of programming language.
          </li>
          <li>
            <strong>Conversations Release:</strong> The heart of Cleverize`s
            learning process is its AI-powered chat interface. Initiated by
            clicking the `<i>start conversation</i>` button, this feature
            immerses learners in an engaging, conversational learning
            experience. Each node in the learning roadmap becomes a dynamic
            interaction, enabling users to delve deep into their chosen topics.
            The platform`s interactive nature ensures a hands-on learning
            experience that adapts to each user`s pace and style.
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold ">
          Reflecting on Our Pre-MVP Stage
        </h3>
        <p className="text-text mt-2 text-lg">
          Prior to this release, Cleverize was in its pre-MVP stage, focused on
          developing these core features. Our aim was to create a platform that
          not only educates but also empowers learners by offering personalized,
          AI-driven educational pathways. We`ve taken inspiration from various
          platforms, to ensure our interface is user-friendly, intuitive, and
          conducive to learning.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold ">What`s Next for Cleverize?</h3>
        <p className=" mt-2 text-lg">
          As we look ahead, our vision for Cleverize includes expanding its
          capabilities and enhancing the user experience. We are committed to
          evolving Cleverize into a comprehensive, interactive educational
          environment, integrating socialization aspects for user interaction
          and community building. Our future plans also involve the introduction
          of an achievements system to further motivate and reward our learners.
        </p>
      </div>
    </div>
  );
}
