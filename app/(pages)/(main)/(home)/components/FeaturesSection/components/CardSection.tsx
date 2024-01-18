"use client";
import { motion, useScroll } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const CardSection = () => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll({ smooth: 0 });
  const [pxVisible, setPxVisible] = useState(0);

  useEffect(() => {
    const element = ref.current;

    const onScroll = () => {
      if (!element) {
        return;
      }
      const rect = element.getBoundingClientRect();
      const height = Math.max(0, window.innerHeight - rect.top);
      setPxVisible(height * 2.3);
    };

    const unsubscirbe = scrollY.on("change", onScroll);

    return () => unsubscirbe();
  }, [scrollY]);
  console.log(pxVisible);
  return (
    <div className="grid grid-cols-2 gap-6 w-fit mx-auto relative overflow-hidden">
      <motion.div
        className="absolute w-1 top-0 left-[calc(50%-2px)] bg-accent transition-all duration-700"
        style={{ height: pxVisible }}
      />
      <div className="big-features-container">
        <div className="w-full first-features-container grid grid-cols-2 grid-rows-3 bg-white-500 justify-items-center h-full justify-center items-center rounded-xl p-16 bg-clip-content">
          <figure>
            <Image
              src="/images/vue.png"
              alt="Vue.js logo"
              height={84}
              width={84}
            />
          </figure>
          <figure>
            <Image
              src="/images/c++.png"
              alt="C++ logo"
              height={84}
              width={84}
            />
          </figure>
          <figure>
            <Image
              src="/images/python.png"
              alt="Python logo"
              height={84}
              width={84}
            />
          </figure>
          <figure>
            <Image
              src="/images/react.png"
              alt="React.js logo"
              height={84}
              width={84}
            />
          </figure>
          <figure>
            <Image
              src="/images/rust.png"
              alt="Rust logo"
              height={84}
              width={84}
            />
          </figure>
          <figure>
            <Image
              src="/images/java.png"
              alt="Java logo"
              height={84}
              width={84}
            />
          </figure>
        </div>
      </div>
      <div className="small-features-container text-left items-start">
        <h1>Anything.Anytime.</h1>
        <p>
          Cleverize allows you to learn any coding technology, whether it`s a
          web framework like React.js or a complex programming language like
          C++.
        </p>
      </div>
      <div className="big-features-container">
        <h4>example from Rust roadmap*</h4>
        {theme == "dark" ? (
          <Image
            src="/images/roadmap-dark.png"
            alt="Roadmap example"
            width={400}
            height={550}
          />
        ) : (
          <Image
            src="/images/roadmap.png"
            alt="Roadmap example"
            width={400}
            height={550}
          />
        )}
        <div className="absolute rounded-2xl w-full h-full bg-gradient-to-t from-background" />
      </div>
      <div className="small-features-container text-right items-end">
        <h1>Personalized learning path.</h1>
        <p>
          Learn what you need/want to learn. The choice is yours. You can
          customize your learning path to fit your needs.
        </p>
      </div>
      <div className="big-features-container" ref={ref}>
        <h4>example from Rust functions lesson*</h4>
        {theme == "dark" ? (
          <Image
            src="/images/conversation-dark.png"
            alt="Roadmap example"
            width={450}
            height={600}
          />
        ) : (
          <Image
            src="/images/conversation.png"
            alt="Roadmap example"
            width={450}
            height={600}
          />
        )}
        <div className="absolute rounded-2xl w-full h-full bg-gradient-to-t from-background" />
      </div>
      <div className="small-features-container text-left items-start">
        <h1>Your experienced AI mentor.</h1>
        <p>
          Cleverize provides you with well-tuned teacher that can be whatever
          you want it to be.
        </p>
      </div>
      <div className="big-features-container"></div>
      <div className="small-features-container"></div>
    </div>
  );
};

export default CardSection;
