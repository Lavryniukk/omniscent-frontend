"use client";
import { treenode } from "@/app/shared/types/node";
import { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";

const roadmap: treenode = {
  id: "html",
  name: "HTML",
  displayChildren: true,
  children: [
    {
      id: "tailwind",
      name: "Tailwind",
      displayChildren: true,
      children: [],
    },
    {
      id: "css",
      name: "CSS",
      displayChildren: true,
      children: [
        {
          id: "js",
          name: "JavaScript",
          displayChildren: true,
          children: [
            {
              id: "npm",
              name: "npm",
              displayChildren: true,
              children: [
                {
                  id: "git",
                  name: "Git",
                  displayChildren: true,
                  children: [
                    {
                      id: "angular",
                      name: "Angular",
                      displayChildren: true,
                      children: [],
                    },
                    {
                      id: "react",
                      name: "React",
                      displayChildren: true,
                      children: [],
                    },
                    {
                      id: "vue",
                      name: "Vue",
                      displayChildren: true,
                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "ts",
          name: "TypeScript",
          displayChildren: true,
          children: [],
        },
      ],
    },
    {
      id: "scss",
      name: "SCSS",
      displayChildren: true,
      children: [],
    },
  ],
};

const GraphComponent = () => {
  let [tree, setTree] = useState<treenode>(roadmap);
  const toggleNode = (id: string, node: treenode): treenode => {
    if (node.id === id && node.children) {
      return { ...node, displayChildren: !node.displayChildren };
    }

    if (node.children) {
      return {
        ...node,
        children: node.children.map((child) => toggleNode(id, child)),
      };
    }

    return node;
  };
  const toggleChildren = (id: string) => {
    const newTree = toggleNode(id, tree);
    setTree(newTree);
  };

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
                toggleChildren(id);
              }}
            />
            <div className="node">{name}</div>
          </div>
        }
      >
        {children &&
          displayChildren &&
          children.map((child: treenode) => (
            <TreeNode key={child.id} className=" mx-auto" label="">
              {generateTree(child)}
            </TreeNode>
          ))}
      </TreeNode>
    );
  };
  return (
    <div className="rotate-180 overflow-hidden w-fit h-screen bir flex justify-center  items-center mx-auto">
      <Tree
        lineWidth={"2px"}
        lineColor={"white"}
        lineHeight={"15px"}
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
