"use client";
"Разраб даун - не трогать код";
import useGraphStore from "@/app/shared/storages/graphStorage";
import { graphNode } from "@/app/shared/types/node";
import { useState } from "react";
let getAfter = (node: graphNode, nodeArray: Array<graphNode>) => {
  let firstEl: graphNode = nodeArray[0];
  let lastEl: graphNode = nodeArray[nodeArray.length - 1];
  let rounded = "";
  let after: string = "";
  if (node == firstEl) {
    rounded = " after:rounded-bl-2xl  after:border-l-2";
  } else {
    rounded = "after:border-l";
  }
  if (lastEl !== node) {
    after = `after:absolute after:right-0 ${rounded} after:h-[20px] after:border-b-2 after:border-accent after:w-1/2 after:bottom-0 `;
  }

  return after;
};
let getBefore = (node: graphNode, nodeArray: Array<graphNode>) => {
  let firstEl: graphNode = nodeArray[0];
  let lastEl: graphNode = nodeArray[nodeArray.length - 1];
  let rounded = "";
  let before: string = "";
  if (node == lastEl) {
    rounded = " before:rounded-br-2xl before:border-r-2";
  } else {
    rounded = "before:border-r";
  }
  if (firstEl !== node) {
    before = `before:absolute before:left-0 ${rounded}  before:h-[20px] before:border-b-2  before:border-accent before:w-1/2 before:bottom-0 `;
  }

  return before;
};

let GraphTree = () => {
  const {
    setIsDragging,
    updateInitalMouseCoords,
    graph,
    selectNode,
    setShowSidebar,
    graphCoordinates,
    selectedNode,
  } = useGraphStore();
  const [zoomLevel, setZoomLevel] = useState(100);
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let target = event.target as HTMLElement;
    if (!target.closest(".node-circle")) {
      setIsDragging(true);
      updateInitalMouseCoords(event.clientX, event.clientY);
    }
  };
  const handleScroll = (e: React.WheelEvent) => {
    const minZoom = 50; // Minimum zoom level
    const maxZoom = 150; // Maximum zoom level
    const delta = e.deltaY;
    const zoomFactor = delta > 0 ? -10 : 10; // Adjust the zoom factor based on scroll direction

    if (
      zoomLevel + zoomFactor >= minZoom &&
      zoomLevel + zoomFactor <= maxZoom
    ) {
      setZoomLevel((prevZoom) => prevZoom + zoomFactor);
    }
  };
  const treeStyle = {
    transform: `scale(${zoomLevel / 100})`,
    top: `${graphCoordinates.y}px`,
    left: `${graphCoordinates.x}px`,
  };
  let mappingArray = [graph];
  let generateTreeGraph = (tree: Array<graphNode>) => {
    let result = tree.map((node, index) => {
      let arrowTopAfter =
        "after:absolute after:right-1/2 after:-top-5  after:bg-accent after:h-6 after:w-0.5";
      let after = getAfter(node, tree);
      let before = getBefore(node, tree);
      return (
        <div
          key={index}
          className={`w-fit ${after} ${before}  justify-start items-center flex-col-reverse pb-5 flex relative text-center text-accent`}
        >
          <div
            className={` w-full min-w-[100px]  mx-auto pt-2 mt-5 relative text-center `}
          >
            {node.title}
            <div
              onClick={() => {
                setShowSidebar(true);
                selectNode(node);
              }}
              className={`w-10 hover:bg-secondary node-circle ${
                node === selectedNode ? "shadow-lg" : ""
              } shadow-white aspect-square mt-2 rounded-full ${
                node.subtopics && node.subtopics.length ? arrowTopAfter : ""
              } border-2 mx-auto border-accent`}
            />
          </div>
          <div className="flex flex-row h-fit w-fit">
            {node.subtopics && generateTreeGraph(node.subtopics)}
          </div>
        </div>
      );
    });
    return result;
  };
  return (
    <div
      onMouseDown={(e) => handleClick(e)}
      style={treeStyle}
      onWheel={(e) => handleScroll(e)}
      onMouseUp={() => {
        setIsDragging(false);
      }}
      className="w-fit relative h-fit flex flex-row"
    >
      {generateTreeGraph(mappingArray)}
    </div>
  );
};
export default GraphTree;
