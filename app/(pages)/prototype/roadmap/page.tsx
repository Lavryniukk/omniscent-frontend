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

let test: Array<treenode> = [
  {
    id: "Finance & Economics",
    name: "Finance & Economics",
    displayChildren: true,
    children: [
      {
        id: "Corporate Finance",
        name: "Corporate Finance",
        displayChildren: true,
        children: [],
      },
      {
        id: "Valuation Methods",
        name: "Valuation Methods",
        displayChildren: true,
        children: [],
      },
      {
        id: "Economic Indicators",
        name: "Economic Indicators",
        displayChildren: true,
        children: [
          {
            id: "Interest Rate",
            name: "Interest Rate",
            displayChildren: true,
            children: [],
          },
          {
            id: "GDP",
            name: "GDP",
            displayChildren: true,
            children: [],
          },
          {
            id: "Inflation",
            name: "Inflation",
            displayChildren: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "Investment Basics",
    name: "Investment Basics",
    displayChildren: true,
    children: [
      {
        id: "Asset Classes",
        name: "Asset Classes",
        displayChildren: true,
        children: [],
      },
      {
        id: "Investment Strategies",
        name: "Investment Strategies",
        displayChildren: true,
        children: [],
      },
      {
        id: "Risk Management",
        name: "Risk Management",
        displayChildren: true,
        children: [],
      },
    ],
  },
  {
    id: "Legal Framework",
    name: "Legal Framework",
    displayChildren: true,
    children: [
      {
        id: "Intellectual Property",
        name: "Intellectual Property",
        displayChildren: true,
        children: [],
      },
      {
        id: "Term Sheets",
        name: "Term Sheets",
        displayChildren: true,
        children: [],
      },
      {
        id: "Due Diligence",
        name: "Due Diligence",
        displayChildren: true,
        children: [],
      },
      {
        id: "Investment Structures",
        name: "Investment Structures",
        displayChildren: true,
        children: [
          {
            id: "Priced Rounds",
            name: "Priced Rounds",
            displayChildren: true,
            children: [],
          },
          {
            id: "Convertible Notes",
            name: "Convertible Notes",
            displayChildren: true,
            children: [],
          },
          {
            id: "SAFEs",
            name: "SAFEs",
            displayChildren: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "Venture Capital & Angel Investing",
    name: "Venture Capital & Angel Investing",
    displayChildren: true,
    children: [
      {
        id: "VC vs Angel Investors",
        name: "VC vs Angel Investors",
        displayChildren: true,
        children: [],
      },
      {
        id: "Investment Rounds",
        name: "Investment Rounds",
        displayChildren: true,
        children: [
          {
            id: "Pre-Seed",
            name: "Pre-Seed",
            displayChildren: true,
            children: [],
          },
          {
            id: "Seed",
            name: "Seed",
            displayChildren: true,
            children: [],
          },
          {
            id: "Series A",
            name: "Series A",
            displayChildren: true,
            children: [],
          },
          {
            id: "Series B",
            name: "Series B",
            displayChildren: true,
            children: [],
          },
          {
            id: "Series C+",
            name: "Series C+",
            displayChildren: true,
            children: [],
          },
        ],
      },
      {
        id: "Role of an Investor",
        name: "Role of an Investor",
        displayChildren: true,
        children: [],
      },
    ],
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
  let [tree, setTree] = useState<Array<treenode>>(test); // State for the roadmap tree
  let [showSideBar, setShowSideBar] = useState<boolean>(false); // State for showing/hiding the sidebar
  let [selectedNode, setSelectedNode] = useState<treenode>({
    id: "fake",
    name: "fake",
    displayChildren: true,
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
    console.log(selectedNode);
  };

  // Recursive function to toggle the displayChildren property for a given node ID
  function toggleDisplayChildren(tree: Array<treenode>): Array<treenode> {
    let nodeId = selectedNode.id;
    return tree.map((node) => {
      if (node.id === nodeId) {
        let copy = node;
        console.log("found node before:", copy.displayChildren);
        node.displayChildren = !node.displayChildren;
        console.log("found node after:", copy.displayChildren);

        return copy;
      } else if (node.children && node.children.length > 0) {
        // Recursively call the function on child nodes
        return {
          ...node,
          children: toggleDisplayChildren(node.children),
        };
      }
      return node;
    });
  }

  // Function to toggle the displayChildren property for the selected node
  const toggleChildren = () => {
    console.log(
      "toggle children pressed. status before change:",
      selectedNode.displayChildren ? "Show" : "hidden"
    );
    let copy = selectedNode;
    copy.displayChildren = !copy.displayChildren;
    setSelectedNode(copy);
    setTree(toggleDisplayChildren(tree));
    console.log(
      "toggle children pressed. status after change:",
      selectedNode.displayChildren ? "Show" : "hidden"
    );
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
