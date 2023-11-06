let arr = [
  { title: "HTML" },
  { title: "CSS" },
  { title: "JavaScript" },
  { title: "React" },
  { title: "Redux" },
  { title: "SASS" },
  { title: "NPM" },
  { title: "Webpack" },
  { title: "Babel" },
  { title: "Jest" },
];
let RoadmapPage = () => {
  return (
    <div className="h-full min-h-screen w-auto ">
      <div className=" w-fit mx-auto">
        <ul className="text-text mx-auto  w-fit py-20 h-fit  flex items-center justify-center flex-col ">
          {arr.map((tech, index) => {
            return (
              <li
                key={index}
                className="w-full flex items-center justify-center flex-col min-w-[200px] "
              >
                <div className="roadmap-node">{tech.title}</div>
                {index != arr.length - 1 && <div className="roadmap-arrow" />}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RoadmapPage;
