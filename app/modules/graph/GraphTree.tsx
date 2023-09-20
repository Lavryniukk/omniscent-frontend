"use client";
"Разраб даун - не трогать код";
import { treenode } from "@/app/shared/types/node";
import { useRef, useState } from "react";
let getAfter = (node: treenode, nodeArray: Array<treenode>) => {
  let firstEl: treenode = nodeArray[0];
  let lastEl: treenode = nodeArray[nodeArray.length - 1];
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
let getBefore = (node: treenode, nodeArray: Array<treenode>) => {
  let firstEl: treenode = nodeArray[0];
  let lastEl: treenode = nodeArray[nodeArray.length - 1];
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
let GraphTree = ({
  treeObjectArray,
  setShowSideBar,
  setSelectedNode,
}: {
  treeObjectArray: Array<treenode>;
  setSelectedNode: (trnode: treenode) => void;
  setShowSideBar: (v: boolean) => void;
}) => {
  let generateTreeGraph = (tree: Array<treenode>) => {
    let result = tree.map((node) => {
      let arrowTopAfter =
        "after:absolute after:right-1/2 after:-top-5  after:bg-accent after:h-6 after:w-0.5";
      let after = getAfter(node, tree);
      let before = getBefore(node, tree);
      return node.children ? (
        <ul
          key={node.id}
          className={`w-fit ${after} ${before} flex-col-reverse pb-5 flex relative text-center text-accent`}
        >
          <div
            className={` w-full min-w-[100px] mx-auto pt-2 mt-5 relative text-center `}
          >
            {node.name}
            <div
              onClick={() => {
                setShowSideBar(true);
                setSelectedNode(node);
              }}
              className={`w-10 hover:bg-secondary aspect-square mt-2 rounded-full ${
                node.children.length ? arrowTopAfter : ""
              } border-2 mx-auto border-accent`}
            />
          </div>
          <div className="flex flex-row h-fit w-fit">
            {generateTreeGraph(node.children)}
          </div>
        </ul>
      ) : (
        <li
          key={node.id}
          className={`h-32  border w-fit ${after} ${before} relative text-center text-accent`}
        ></li>
      );
    });
    return result;
  };
  return (
    <div className="w-fit border h-fit flex flex-row">
      {generateTreeGraph(treeObjectArray)}
    </div>
  );
};
export default GraphTree;
