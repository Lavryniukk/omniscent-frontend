"use client";
import SideBar from "@/app/shared/prototypeSideBar/Sbar";
import { treenode } from "@/app/shared/types/node";
import dynamic from "next/dynamic";
import { useState } from "react";
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
const DynamicComponentTree = dynamic(
  () => import("@/app/modules/prototype/treeMap/TreeMap"),
  { ssr: false }
);
const ChatPage = () => {
  let [tree, setTree] = useState<treenode>(roadmap);
  let [showSideBar, setShowSideBar] = useState<boolean>(false);
  let [selectedNode, setSelectedNode] = useState<treenode>({
    name: "fake",
    id: "fake",
    displayChildren: true,
  });
  let setNewTree = (node: treenode) => {
    setTree(node);
  };
  let selectNode = (node: treenode) => {
    setShowSideBar(true);
    setSelectedNode(node);
  };
  let toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  const findNode = (id: string, node: treenode): treenode => {
    if (node.id === id && node.children) {
      return node;
    }

    if (node.children) {
      return {
        ...node,
        children: node.children.map((child) => toggleNode(id, child)),
      };
    }

    return node;
  };
  const toggleNode = (id: string, node: treenode): treenode => {
    if (node.id === id && node.children) {
      console.log("this is node from tree", node);
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
    let copy = selectedNode;
    copy.displayChildren = !copy.displayChildren;
    setSelectedNode(copy);
    const copyTree = toggleNode(id, tree);
    setNewTree(copyTree);
  };
  return (
    <div className="w-full h-screen select-none">
      <DynamicComponentTree
        showSideBar={showSideBar}
        toggleSideBar={toggleSideBar}
        tree={tree}
        setNewTree={setNewTree}
        selectNode={selectNode}
      />
      <SideBar
        tree={tree}
        showSideBar={showSideBar}
        toggleChildren={toggleChildren}
        selectedNode={selectedNode}
        toggleSideBar={toggleSideBar}
      />
    </div>
  );
};
export default ChatPage;
