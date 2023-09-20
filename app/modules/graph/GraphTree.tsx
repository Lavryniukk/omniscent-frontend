import { treenode } from "@/app/shared/types/node";
let getAfter = (node: treenode, nodeArray: Array<treenode>, height: string) => {
  let firstEl: treenode = nodeArray[0];
  let lastEl: treenode = nodeArray[nodeArray.length - 1];
  let rounded = "";
  let after: string = "";
  if (node == firstEl) {
    rounded = " after:rounded-bl-2xl";
  }
  if (lastEl !== node) {
    after = `after:absolute after:right-0 ${rounded} after:border-l-2 after:h-10 after:border-b-2 after:border-accent after:w-1/2 after:bottom-0 `;
  }

  return after;
};
let getBefore = (
  node: treenode,
  nodeArray: Array<treenode>,
  height: string
) => {
  let firstEl: treenode = nodeArray[0];
  let lastEl: treenode = nodeArray[nodeArray.length - 1];
  let rounded = "";
  let before: string = "";
  if (node == lastEl) {
    rounded = " before:rounded-br-2xl before:border-r-2";
  }
  if (firstEl !== node) {
    before = `before:absolute before:left-0 ${rounded} before:border-b-2 before:h-10 before:border-accent before:w-1/2 before:bottom-0 `;
  }

  return before;
};
let GraphTree = ({ treeObjectArray }: { treeObjectArray: Array<treenode> }) => {
  let heightOfSpacing = "12";
  let generateTreeGraph = (tree: Array<treenode>) => {
    let result = tree.map((node) => {
      let arrowTopAfter =
        "after:absolute after:right-1/2 after:-top-4  after:bg-accent after:h-5 after:w-0.5";
      let after = getAfter(node, tree, heightOfSpacing);
      let before = getBefore(node, tree, heightOfSpacing);
      return node.children ? (
        <ul
          key={node.id}
          className={`w-fit  ${after} ${before} p-1 flex-col-reverse pb-10 flex relative text-center text-accent`}
        >
          <div
            className={` w-full mx-auto mt-5 relative text-center ${arrowTopAfter}`}
          >
            {node.name}
          </div>
          <div className="flex flex-row h-fit w-fit">
            {generateTreeGraph(node.children)}
          </div>
        </ul>
      ) : (
        <li
          key={node.id}
          className={`h-32 w-fit ${after} ${before} relative text-center text-accent`}
        ></li>
      );
    });
    return result;
  };
  return (
    <div className="w-fit h-fit flex flex-row">
      {generateTreeGraph(treeObjectArray)}
    </div>
  );
};
export default GraphTree;
