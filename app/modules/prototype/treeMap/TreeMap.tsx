"use client";
import { treenode } from "@/app/shared/types/node";
import { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";

const roadmap: treenode = {
  id: "become",
  name: "become a programmer",
  displayChildren: true,
  children: [
    {
      id: "languages",
      name: "Languages",
      displayChildren: true,
      children: [
        {
          id: "ts",
          name: "TypeScript",
          displayChildren: true,
          children: [
            {
              id: "syntax",
              name: "Syntax",
              displayChildren: true,
              children: [],
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
                  children: [],
                },
                {
                  id: "vue",
                  name: "Vue",
                  displayChildren: true,
                  children: [],
                },
                {
                  id: "angular",
                  name: "Angular",
                  displayChildren: true,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          id: "js",
          name: "JavaScript",
          displayChildren: true,
          children: [
            {
              id: "nodejs",
              name: "NodeJs",
              displayChildren: true,
              children: [],
            },
            {
              id: "syntax",
              name: "Syntax",
              displayChildren: true,
              children: [
                {
                  id: "ifelse",
                  name: "if/else",
                  displayChildren: true,
                  children: [],
                },
                {
                  id: "let",
                  name: "Let",
                  displayChildren: true,
                  children: [],
                },
              ],
            },
            {
              id: "dom",
              name: "DOM",
              displayChildren: true,
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: "tools",
      name: "Tools",
      displayChildren: true,
      children: [
        {
          id: "git",
          name: "Git",
          displayChildren: true,
          children: [],
        },
        {
          id: "vscode",
          name: "VSCode",
          displayChildren: true,
          children: [],
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
          children: [],
        },
        {
          id: "www",
          name: "WWW",
          displayChildren: true,
          children: [],
        },
        {
          id: "development",
          name: "Development process",
          displayChildren: true,
          children: [],
        },
      ],
    },
  ],
};
type Props = {
  toggleSideBar: () => void;
  showSideBar: boolean;
};
const GraphComponent = ({ toggleSideBar, showSideBar }: Props) => {
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
  const toggleChildren = (id: string, children: Array<treenode>) => {
    if (children) {
      const newTree = toggleNode(id, tree);
      setTree(newTree);
    }
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
                toggleSideBar();
                children && toggleChildren(id, children);
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
  return (
    <div
      className={` h-fit border ${
        showSideBar ? "-translate-x-1/4" : "translate-x-0"
      } transition-all duration-300 w-fit mx-auto rotate-180 block`}
    >
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
