"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
const CardSection = () => {
  const { resolvedTheme } = useTheme();
  let srcRoadmap;
  let srcLesson;
  let srcQuestion;
  switch (resolvedTheme) {
    case "light":
      srcRoadmap = "/images/roadmap.png";
      srcLesson = "/images/lesson.png";
      srcQuestion = "/images/lesson-question.png";
      break;
    case "dark":
      srcRoadmap = "/images/roadmap-dark.png";
      srcLesson = "/images/lesson-dark.png";
      srcQuestion = "/images/lesson-question-dark.png";

      break;
    default:
      srcRoadmap =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      srcLesson = srcRoadmap;
      srcQuestion = srcRoadmap;
      break;
  }
  return (
    <div className="grid grid- grid-cols-1 lg:grid-cols-2 gap-6 w-fit mx-auto relative ">
      <div className="big-features-container">
        <div className="w-full  first-features-container grid grid-cols-2 grid-rows-3 bg-white-500 justify-items-center h-full justify-center items-center rounded-xl p-16 bg-clip-content">
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

        <Image
          src={srcRoadmap}
          alt="Roadmap example"
          className="left-0 top-10 scale-150 absolute "
          width={604}
          height={738}
        />

        <div className="absolute rounded-2xl w-full h-1/2 bottom-0 bg-gradient-to-t from-background " />
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
          height: "fit-content",
        }}
        className="big-features-container"
      >
        <h4>example from Rust functions lesson*</h4>

        <Image
          src={srcLesson}
          className="rounded-xl"
          alt="Roadmap example"
          width={450}
          height={600}
        />

        <div className="absolute rounded-2xl w-full h-1/2 bottom-0 bg-gradient-to-t from-background  " />
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
          height: "fit-content",
        }}
        className="big-features-container "
      >
        <h4>example from Rust functions lesson*</h4>

        <Image
          src={srcQuestion}
          className="rounded-xl"
          alt="Lesson question example"
          width={450}
          height={600}
        />

        <div className="absolute rounded-2xl w-full  bottom-0 bg-gradient-to-t from-background" />
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
