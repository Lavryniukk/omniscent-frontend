import getAfter from "./helpers/getAfter";
import getBefore from "./helpers/getBefore";
import { RoadmapObjectArray } from "./types/RoadmapObjectArray";

const testArray: RoadmapObjectArray = [
  {
    _id: "1",
    title: "HTML",
    description:
      "HTML is the foundation of web pages, using tags to structure and display content. It defines elements like headings, paragraphs, links, and images, enabling the creation of interactive websites.",
  },
  {
    _id: "2",
    title: "CSS",
    description:
      "CSS (Cascading Style Sheets) is used for styling web pages. It allows you to control the layout, colors, and design of elements on a webpage.",
  },
  {
    _id: "3",
    title: "JavaScript",
    description:
      "JavaScript is a versatile programming language used for web development. It adds interactivity and dynamic behavior to web pages.",
  },
  {
    _id: "4",
    title: "React",
    description:
      "React is a popular JavaScript library for building user interfaces. It allows developers to create interactive and reusable UI components.",
  },
  {
    _id: "5",
    title: "React",
    description:
      "React is a popular JavaScript library for building user interfaces. It allows developers to create interactive and reusable UI components.",
  },
  {
    _id: "6",
    title: "React",
    description:
      "React is a popular JavaScript library for building user interfaces. It allows developers to create interactive and reusable UI components.",
  },
  {
    _id: "7",
    title: "React",
    description:
      "React is a popular JavaScript library for building user interfaces. It allows developers to create interactive and reusable UI components.",
  },
];

let Roadmap = () => {
  return (
    <div
      className="overflow-hidden h-fit bg-transparent mx-auto box-border max-w-10xl
					  w-full py-40 sm:py-52 md:py-64"
    >
      <ul className="flex gap-20 items-center mx-auto w-[1000px] overflow-x-scroll">
        {testArray.map((item) => (
          <li key={item._id} className={`text-text`}>
            <div
              className={`p-4 border w-20 h-20 flex justify-center items-center rounded-full border-primary-900 ${getAfter(
                item,
                testArray
              )} ${getBefore(item, testArray)} relative`}
            >
              {item.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;
