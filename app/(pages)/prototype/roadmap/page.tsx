"use client";
import SideBar from "@/app/shared/prototypeSideBar/Sbar";
import { treenode } from "@/app/shared/types/node";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import GraphTree from "@/app/modules/graph/GraphTree";
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
const DynamicGraphTree = dynamic(
  () => import("@/app/modules/graph/GraphTree"), // Import path
  { ssr: false } // Disable server-side rendering for this component
);

// Define the RoadmapPage functional component
const RoadmapPage = () => {
  // Define state variables using React hooks
  let [tree, setTree] = useState<Array<treenode>>(test); // State for the roadmap tree
  let [showSideBar, setShowSideBar] = useState<boolean>(false); // State for showing/hiding the sidebar
  let [selectedNode, setSelectedNode] = useState<treenode>(tree[0]); // State for the currently selected node in the tree
  let [coordinates, setCoordinates] = useState<{ x: number; y: number }>({
    x: 100,
    y: 200,
  });
  let [isDragging, setIsDragging] = useState<boolean>(false);
  const [initialMousePos, setInitialMousePos] = useState({ x: 0, y: 0 });

  let handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (isDragging) {
      const deltaX = event.clientX - initialMousePos.x;
      const deltaY = event.clientY - initialMousePos.y;
      setCoordinates((prevCoordinates) => ({
        x: prevCoordinates.x + deltaX,
        y: prevCoordinates.y + deltaY,
      }));
      setInitialMousePos({ x: event.clientX, y: event.clientY });
    }
  };

  // Add a click event listener to the document to close the sidebar when clicking outside of it
  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (showSideBar && target && !target.closest(".sidebar")) {
        setShowSideBar(false);
      }
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [showSideBar]);

  return (
    <div
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
      className="w-full h-screen overflow-hidden select-none"
    >
      <DynamicGraphTree
        setShowSideBar={setShowSideBar}
        treeObjectArray={tree}
        setSelectedNode={setSelectedNode}
        setIsDragging={setIsDragging}
        isDragging={isDragging}
        coordinates={coordinates}
        setCoordinates={setCoordinates}
        initialMousePos={initialMousePos}
        setInitialMousePos={setInitialMousePos}
      />
      <SideBar
        showSideBar={showSideBar}
        selectedNode={selectedNode}
        closeSideBar={setShowSideBar}
      />
    </div>
  );
};

export default RoadmapPage;
