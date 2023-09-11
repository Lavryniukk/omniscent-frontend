"use client";
import SideBar from "@/app/shared/prototypeSideBar/Sbar";
import { treenode } from "@/app/shared/types/node";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
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
let rdmap: Array<treenode> = [
  {
    id: "advcss",
    name: "Advanced CSS",
    displayChildren: true,
    children: [
      {
        id: "tailwind",
        name: "TailwindCSS",
        displayChildren: true,
        children: [],
      },
      {
        id: "bootstrap",
        name: "bootstrap",
        displayChildren: true,
        children: [],
      },
    ],
  },
  {
    id: "language",
    name: "Language",
    displayChildren: true,
    children: [
      {
        id: "js",
        name: "JavaScript",
        displayChildren: true,
        children: [
          {
            id: "ts",
            name: "TypeScript",
            displayChildren: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "layout",
    name: "layout",
    displayChildren: true,
    children: [
      {
        id: "html",
        name: "HTML",
        displayChildren: true,
        children: [],
      },
      {
        id: "css",
        name: "CSS",
        displayChildren: true,
        children: [],
      },
    ],
  },
  {
    id: "start",
    name: "tech name",
    displayChildren: true,
    children: [],
  },
];
const DynamicComponentTree = dynamic(
  () => import("@/app/modules/prototype/treeMap/TreeMap"),
  { ssr: false }
);
const RoadmapPage = () => {
  let [tree, setTree] = useState<Array<treenode>>(rdmap);
  let [showSideBar, setShowSideBar] = useState<boolean>(false);
  let [selectedNode, setSelectedNode] = useState<treenode>({
    id: "fake",
    name: "fake",
    displayChildren: false,
  });
  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      console.log(target);
      if (showSideBar && target && !target.closest(".sidebar")) {
        closeSidebar();
      }
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [showSideBar]);

  let setNewTree = (node: Array<treenode>) => {
    setTree(node);
  };
  let closeSidebar = () => {
    setShowSideBar(false);
  };
  let selectNode = (node: treenode) => {
    setShowSideBar(true);
    setSelectedNode(node);
  };

  function toggleDisplayChildren(
    nodeId: string,
    tree: Array<treenode>
  ): Array<treenode> {
    return tree.map((node) => {
      if (node.id === nodeId) {
        // Toggle the displayChildren property for the matching node
        return {
          ...node,
          displayChildren: !node.displayChildren,
        };
      } else if (node.children && node.children.length > 0) {
        // Recursively call the function on child nodes
        return {
          ...node,
          children: toggleDisplayChildren(nodeId, node.children),
        };
      }
      return node;
    });
  }

  const toggleChildren = (id: string) => {
    let copy = selectedNode;
    if (copy) {
      copy.displayChildren = !copy.displayChildren;
      setSelectedNode(copy);
      const copyTree = toggleDisplayChildren(id, tree);
      setTree(copyTree);
    }
  };
  return (
    <div className="w-full h-screen select-none">
      <DynamicComponentTree
        showSideBar={showSideBar}
        tree={tree}
        setNewTree={setNewTree}
        selectNode={selectNode}
      />
      <SideBar
        showSideBar={showSideBar}
        toggleChildren={toggleChildren}
        selectedNode={selectedNode}
        closeSideBar={closeSidebar}
      />
    </div>
  );
};
export default RoadmapPage;
