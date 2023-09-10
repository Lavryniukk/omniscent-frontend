"use client";
import { treenode } from "@/app/shared/types/node";
import { Tree, TreeNode } from "react-organizational-chart";

type Props = {
  showSideBar: boolean;
  tree: Array<treenode>;
  setNewTree: (node: Array<treenode>) => void;
  selectNode: (node: treenode) => void;
};
const GraphComponent = ({ showSideBar, selectNode, tree }: Props) => {
  let generateTreeBranch = (treeBranch: treenode) => {
    //function that generates one branch of tree
    const { id, name, displayChildren, children } = treeBranch;
    let result = (
      <TreeNode
        className="overflow-hidden w-fit"
        key={id}
        label={
          <div className="flex flex-col w-fit mx-auto">
            <div
              className="node-circle"
              onClick={() => {
                selectNode(treeBranch);
              }}
            />
            <div className="node">{name}</div>
          </div>
        }
      >
        {children &&
          displayChildren &&
          children.map((child: treenode) => (
            <TreeNode key={child.id} className="mx-auto" label="">
              {generateTreeBranch(child)}
            </TreeNode>
          ))}
      </TreeNode>
    );
    return result;
  };
  const generateTree = (tree: Array<treenode>) => {
    //function that generates the whole tree
    return tree.map((nodeTreeBranch) => generateTreeBranch(nodeTreeBranch));
  };
  let res = showSideBar ? "-translate-x-1/4" : "translate-x-0";
  return (
    <div
      className={`h-fit ${res} transition-all relative duration-300 w-fit mx-auto rotate-180 block`}
    >
      <Tree
        lineWidth={"2px"}
        lineColor={"white"}
        lineHeight={"15px"}
        nodePadding="20px"
        lineStyle="solid"
        lineBorderRadius={"0px"}
        label={""}
      >
        {generateTree(tree)}
      </Tree>
      <div className="w-full bg-background absolute bottom-full translate-y-4 z-10 h-4" />
    </div>
  );
};

export default GraphComponent;
