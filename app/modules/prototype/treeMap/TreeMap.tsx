"use client";
import { treenode } from "@/app/shared/types/node";
import { Tree, TreeNode } from "react-organizational-chart";

type Props = {
  toggleSideBar: () => void;
  showSideBar: boolean;
  tree: treenode;
  setNewTree: (node: treenode) => void;
  selectNode: (node: treenode) => void;
};
const GraphComponent = ({ showSideBar, selectNode, tree }: Props) => {
  const generateTree = (treeNode: treenode) => {
    const { id, name, displayChildren, children } = treeNode;
    return (
      <TreeNode
        className="overflow-hidden w-fit"
        key={id}
        label={
          <div className="flex flex-col w-fit mx-auto ">
            <div
              className="node-circle"
              onClick={() => {
                selectNode(treeNode);
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
              {generateTree(child)}
            </TreeNode>
          ))}
      </TreeNode>
    );
  };
  let res = showSideBar ? "-translate-x-1/4" : "translate-x-0";
  return (
    <div
      className={` h-fit ${res} transition-all duration-300 w-fit mx-auto rotate-180 block`}
    >
      <Tree
        lineWidth={"2px"}
        lineColor={"white"}
        lineHeight={"15px"}
        nodePadding="50px"
        lineStyle="solid"
        lineBorderRadius={"20px"}
        label={""}
      >
        {generateTree(tree)}
      </Tree>
    </div>
  );
};

export default GraphComponent;
