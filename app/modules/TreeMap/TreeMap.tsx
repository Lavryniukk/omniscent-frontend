"use client";
import { treenode } from "@/app/shared/types/node";
import { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
const roadmap: treenode = {
  id: "programming",
  name: "Programming",
  displayChildren: true,
  children: [
    {
      id: "tools",
      name: "Tools",
      displayChildren: true,
      children: [
        {
          id: "git",
          name: "Git",
          displayChildren: true,
        },
        {
          id: "vscode",
          name: "VSCode",
          displayChildren: true,
        },
      ],
    },
    {
      id: "concepts",
      name: "Concepts",
      displayChildren: true,
      children: [
        {
          id: "http",
          name: "HTTP",
          displayChildren: true,
        },
        {
          id: "www",
          name: "WWW",
          displayChildren: true,
        },
        {
          id: "development",
          name: "Development",
          displayChildren: true,
        },
      ],
    },
    {
      id: "languages",
      name: "Languages",
      displayChildren: true,
      children: [
        {
          id: "javascript",
          name: "JavaScript",
          displayChildren: true,
          children: [
            {
              id: "DOM",
              name: "DOM",
              displayChildren: true,
            },
            {
              id: "NodeJS",
              name: "NodeJS",
              displayChildren: true,
            },
            {
              id: "syntax",
              name: "Syntax",
              displayChildren: true,
              children: [
                {
                  id: "if/else",
                  name: "if/else",
                  displayChildren: true,
                },
                {
                  id: "let",
                  name: "let",
                  displayChildren: true,
                },
              ],
            },
          ],
        },
        {
          id: "typescript",
          name: "TypeScript",
          displayChildren: true,
          children: [
            {
              id: "syntax",
              name: "Syntax",
              displayChildren: true,
            },
            {
              id: "frameworks",
              name: "Frameworks",
              displayChildren: true,
              children: [
                {
                  id: "react",
                  name: "React",
                  displayChildren: true,
                },
                {
                  id: "angular",
                  name: "Angular",
                  displayChildren: true,
                },
                {
                  id: "vueJs",
                  name: "VueJs",
                  displayChildren: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const GraphComponent = () => {
  let [tree, setTree] = useState<treenode>(roadmap);
  const toggleChildren = (id: string) => {
    const newTree = toggleNode(id, tree);
    setTree(newTree);
  };

  const toggleNode = (id: string, node: treenode): treenode => {
    if (node.id === id) {
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
  const generateTree = (treeNode: treenode) => {
    const { id, name, displayChildren, children } = treeNode;
    return (
      <TreeNode
        key={id}
        label={
          <div className="flex flex-col mx-auto">
            <div
              className="node-circle"
              onClick={() => {
                toggleChildren(id);
              }}
            />
            <div className="node">{name || "Unnamed Node"}</div>
          </div>
        }
      >
        {children &&
          displayChildren &&
          children.map((child: treenode) => (
            <TreeNode key={child.id} label="">
              {generateTree(child)}
            </TreeNode>
          ))}
      </TreeNode>
    );
  };

  return (
    <div className="rotate-180 w-1/2 flex justify-center h-screen items-center mx-auto">
      <Tree
        lineWidth={"2px"}
        lineColor={"white"}
        lineHeight={"15px"}
        lineStyle="solid"
        lineBorderRadius={"10px"}
        label={""}
      >
        {generateTree(tree)}
      </Tree>
    </div>
  );
};

export default GraphComponent;
