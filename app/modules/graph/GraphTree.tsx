"use client";
import { treenode } from "@/app/shared/types/node";
let getAfter = (node: treenode, nodeArray: Array<treenode>) => {
  let lastEl: treenode = nodeArray[-1];
  let after: string = "";
  if (lastEl !== node) {
    after =
      "after:absolute after:right-1/2 after:bg-background after:w-1/2 after:bottom-0 after:h-10 after:border";
  }

  return after;
};
let GraphTree = ({ treeObjectArray }: { treeObjectArray: Array<treenode> }) => {
  let generateTreeGraph = () => {
    let result = treeObjectArray.map((node) => {
      let after = getAfter(node, treeObjectArray);
      let before = getBefore(node, treeObjectArray);
      console.log(afterBefore);
      return (
        <div
          className={`w-fit flex relative flex-col-reverse h-60 border ${
            (afterBefore[1], afterBefore[0])
          }`}
        >
          <ul key={node.id} className="border w-40 h-40 text-accent">
            {node.name}
          </ul>
        </div>
      );
    });
    return result;
  };
  return (
    <div className="w-fit h-fit border flex flex-row">
      {generateTreeGraph()}
    </div>
  );
};
export default GraphTree;
