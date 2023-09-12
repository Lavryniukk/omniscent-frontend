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
    id: "frontendframework",
    name: "Front-end framework",
    displayChildren: true,
    children: [
      { id: "vue", name: "Vue", displayChildren: true },
      { id: "react", name: "React", displayChildren: true },
      { id: "angular", name: "Angular", displayChildren: true },
    ],
  },
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
    name: "Front-end",
    displayChildren: true,
    children: [],
  },
];
// Dynamically import the TreeMap component using Next.js dynamic import
const DynamicComponentTree = dynamic(
  () => import("@/app/modules/prototype/treeMap/TreeMap"), // Import path
  { ssr: false } // Disable server-side rendering for this component
);

// Define the RoadmapPage functional component
const RoadmapPage = () => {
  // Define state variables using React hooks
  let [tree, setTree] = useState<Array<treenode>>(rdmap); // State for the roadmap tree
  let [showSideBar, setShowSideBar] = useState<boolean>(false); // State for showing/hiding the sidebar
  let [selectedNode, setSelectedNode] = useState<treenode>({
    id: "fake",
    name: "fake",
    displayChildren: false,
  }); // State for the currently selected node in the tree

  // Add a click event listener to the document to close the sidebar when clicking outside of it
  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (showSideBar && target && !target.closest(".sidebar")) {
        closeSidebar();
      }
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [showSideBar]);

  // Define a function to set a new tree structure
  let setNewTree = (node: Array<treenode>) => {
    setTree(node);
  };

  // Define a function to close the sidebar
  let closeSidebar = () => {
    setShowSideBar(false);
  };

  // Define a function to select a node in the tree
  let selectNode = (node: treenode) => {
    setShowSideBar(true);
    setSelectedNode(node);
  };

  // Recursive function to toggle the displayChildren property for a given node ID
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

  // Function to toggle the displayChildren property for the selected node
  const toggleChildren = (id: string) => {
    let copy = selectedNode;
    if (copy) {
      copy.displayChildren = !copy.displayChildren;
      setSelectedNode(copy);
      const copyTree = toggleDisplayChildren(id, tree);
      setTree(copyTree);
    }
  };

  // Render the RoadmapPage component
  return (
    <div className="w-full h-screen overflow-hidden select-none">
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
