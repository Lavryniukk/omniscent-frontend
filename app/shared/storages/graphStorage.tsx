import { create } from "zustand";
import { graphNode } from "../types/node";
let test: Array<graphNode> = [
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
type SelectedNodeType = graphNode | null;
interface GraphState {
  graph: Array<graphNode>;
  selectedNode: graphNode | null;
  showSidebar: boolean;
  graphCoordinates: { x: number; y: number };
  isDragging: boolean;
  initialMouseCoords: { x: number; y: number };
}
interface GraphAction {
  setGraph: (newValue: Array<graphNode>) => void;
  selectNode: (value: graphNode | null) => void;
  setShowSidebar: (value: boolean) => void;
  setIsDragging: (value: boolean) => void;
  updateInitalMouseCoords: (x: number, y: number) => void;
  drag: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  closeSidebar: (event: MouseEvent) => void;
}
const useGraphStore = create<GraphAction & GraphState>((set, get) => ({
  graph: test,
  setGraph: (value) => set({ graph: value }),
  selectedNode: null,
  selectNode: (newNode) => set({ selectedNode: newNode }),
  showSidebar: false,
  setShowSidebar: (value) => set({ showSidebar: value }),
  graphCoordinates: { x: 100, y: 100 },

  isDragging: false,
  setIsDragging: (value) => set({ isDragging: value }),
  initialMouseCoords: { x: 0, y: 0 },
  updateInitalMouseCoords: (x, y) =>
    set({ initialMouseCoords: { x: x, y: y } }),
  drag: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (get().isDragging) {
      const deltaX = event.clientX - get().initialMouseCoords.x;
      const deltaY = event.clientY - get().initialMouseCoords.y;
      set((state) => ({
        graphCoordinates: {
          x: state.graphCoordinates.x + deltaX,
          y: state.graphCoordinates.y + deltaY,
        },
        initialMouseCoords: { x: event.clientX, y: event.clientY },
      }));
    }
  },
  closeSidebar: (event) => {
    const target = event.target as HTMLElement | null;
    if (
      (get().showSidebar && target && !target.closest(".sidebar")) ||
      target?.closest(".closer")
    ) {
      set({ selectedNode: null, showSidebar: false });
    }
  },
}));

export default useGraphStore;
