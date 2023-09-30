import { create } from "zustand";
import { graphNode } from "../types/node";

type SelectedNodeType = graphNode | null;
interface GraphState {
  graph: graphNode;
  selectedNode: graphNode | null;
  showSidebar: boolean;
  graphCoordinates: { x: number; y: number };
  isDragging: boolean;
  initialMouseCoords: { x: number; y: number };
}
interface GraphAction {
  setGraph: (newValue: graphNode) => void;
  selectNode: (value: graphNode | null) => void;
  setShowSidebar: (value: boolean) => void;
  setIsDragging: (value: boolean) => void;
  updateInitalMouseCoords: (x: number, y: number) => void;
  drag: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  closeSidebar: (event: MouseEvent) => void;
  getGraph: (prompt: string | undefined) => void;
}
const useGraphStore = create<GraphAction & GraphState>((set, get) => ({
  graph: {},
  setGraph: (value) => set({ graph: value }),
  selectedNode: null,
  selectNode: (newNode) => set({ selectedNode: newNode }),
  showSidebar: false,
  setShowSidebar: (value) => set({ showSidebar: value }),
  graphCoordinates: { x: 100, y: 100 },
  getGraph: async (userPrompt) => {
    try {
      let response = await fetch(
        "https://omniscient-backend.onrender.com/graph/generate",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            temperature: 0,
            user_context: userPrompt,
            json_syllabus: {
              title: "",
              curriculum:
                "This is a first introductory lesson, where overview is given.",
              subtopics: [],
            },
            instruction: 'Generate subtopics for "root node".',
          }),
        }
      );
      let parsedResponse = await response.json();
      set({ graph: parsedResponse });
    } catch (e) {
      console.log("An error occured at fetch:", e);
    }
  },
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
