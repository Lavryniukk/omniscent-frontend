"use client";
import { motion, useScroll } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const CardSection = () => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [highlightedElement, setHighlightedElement] = useState<number>(1);
  const { scrollY } = useScroll({ smooth: 0 });
  const [pxVisible, setPxVisible] = useState(1);

  useEffect(() => {
    const element = ref.current;
    const onScroll = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const height = Math.max(0, window.innerHeight - rect.top);
      if (height > 0 && height < 230) {
        setHighlightedElement(1);
      } else if (height > 230 && height < 450) {
        setHighlightedElement(2);
      } else if (height > 450 && height < 750) {
        setHighlightedElement(3);
      } else if (height > 750) {
        setHighlightedElement(4);
      } else {
        setHighlightedElement(1);
      }
      setPxVisible(height * 2);
    };

    const unsubscribe = scrollY.on("change", onScroll);

    return () => unsubscribe();
  }, [scrollY]);
  return (
    <div className="grid grid- grid-cols-1 lg:grid-cols-2 gap-6 w-fit mx-auto relative ">
      <div className="absolute hidden lg:block left-[calc(50%-2px)] top-0 h-full w-1 bg-secondary">
        <div
          style={{ height: pxVisible }}
          className="absolute w-1 max-h-[100%] left-[calc(50%-2px)] 
            transition-all bg-accent/50 blur-[1px] duration-500 rounded-full flex flex-col items-center justify-center"
        ></div>
      </div>
      <div className="big-features-container">
        <div
          style={{
            boxShadow:
              highlightedElement == 1
                ? "0px 0px 20px 0px rgba(var(--accent),0.5)"
                : "",
          }}
          className="w-full  first-features-container grid grid-cols-2 grid-rows-3 bg-white-500 justify-items-center h-full justify-center items-center rounded-xl p-16 bg-clip-content"
        >
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
      <div
        style={{
          boxShadow:
            highlightedElement == 2
              ? "0px 0px 20px 0px rgba(var(--accent),0.5)"
              : "",
        }}
        className="big-features-container"
      >
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
      <div className="small-features-container text-left items-start lg:text-right lg:items-end">
        <h1>Personalized learning path.</h1>
        <p>
          Learn what you need/want to learn. The choice is yours. You can
          customize your learning path to fit your needs.
        </p>
      </div>
      <div
        style={{
          boxShadow:
            highlightedElement == 3
              ? "0px 0px 20px 0px rgba(var(--accent),0.5)"
              : "",
        }}
        className="big-features-container"
        ref={ref}
      >
        <h4>example from Rust functions lesson*</h4>
        {theme == "dark" ? (
          <Image
            src="/images/conversation-dark.png"
            className="rounded-xl"
            alt="Roadmap example"
            width={450}
            height={600}
          />
        ) : (
          <Image
            className="rounded-xl"
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
      <div
        style={{
          boxShadow:
            highlightedElement == 4
              ? "0px 0px 20px 0px rgba(var(--accent),0.5)"
              : "",
        }}
        className="big-features-container"
      >
        <h4>example from Rust functions lesson*</h4>
        {theme == "dark" ? (
          <Image
            src="/images/conversation-question-dark.png"
            className="rounded-xl"
            alt="Roadmap example"
            width={450}
            height={600}
          />
        ) : (
          <Image
            className="rounded-xl"
            src="/images/conversation-question.png"
            alt="Roadmap example"
            width={450}
            height={600}
          />
        )}
        <div className="absolute rounded-2xl w-full h-1/2 bottom-0 bg-gradient-to-t from-background" />
      </div>
      <div className="small-features-container text-left items-start lg:text-right lg:items-end">
        <h1>Be free to ask questions!</h1>
        <p>
          You can ask your AI mentor any question you want and it will answer
          you in a way that you can understand.
        </p>
      </div>
    </div>
  );
};

export default CardSection;
