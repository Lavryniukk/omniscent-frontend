"use client";
import { treenode } from "@/app/shared/types/node";
let getAfter = (node: treenode, nodeArray: Array<treenode>, height: number) => {
  let firstEl: treenode = nodeArray[0];
  let rounded = "";
  let lastEl: treenode = nodeArray[nodeArray.length - 1];
  let after: string = "";
  if (node == firstEl) {
    rounded = " after:rounded-bl-2xl after:border-l-2";
  }
  if (lastEl !== node) {
    after = `after:absolute after:right-0 ${rounded} after:h-${height.toString} after:border-b-2 after:border-accent after:w-1/2 after:bottom-0 `;
  }

  return after;
};
let getBefore = (
  node: treenode,
  nodeArray: Array<treenode>,
  height: number
) => {
  let firstEl: treenode = nodeArray[0];
  let before: string = "";
  let rounded = "";
  let lastEl: treenode = nodeArray[nodeArray.length - 1];
  if (node == lastEl) {
    rounded = " before:rounded-br-2xl";
  }
  if (firstEl !== node) {
    before = `before:absolute before:left-0 ${rounded} before:h-${height.toString()} before:border-b-2 before:border-accent before:w-1/2 before:bottom-0 before:border-r-2`;
  }

  return before;
};
let GraphTree = ({ treeObjectArray }: { treeObjectArray: Array<treenode> }) => {
  let heightOfSpacing = 10;
  let generateTreeGraph = () => {
    let result = treeObjectArray.map((node) => {
      let after = getAfter(node, treeObjectArray, heightOfSpacing);
      let before = getBefore(node, treeObjectArray, heightOfSpacing);
      return (
        <ul
          key={node.id}
          className={` w-28 ${after} ${before}  relative text-center text-accent`}
        >
          <div key={node.id} className="border h-20">
            {node.name}
          </div>
        </ul>
      );
    });
    return result;
  };
  return <div className="w-fit h-fit flex flex-row">{generateTreeGraph()}</div>;
};
export default GraphTree;
