import { create } from "zustand";
import { graphNode } from "../types/node";
let fakeG = {
  title: "Become a Full-Stack Web Developer",
  curriculum: "This is a first introductory lesson, where overview is given.",
  subtopics: [
    {
      title: "Introduction to Web Development",
      curriculum:
        "In this lesson, you will learn the basics of web development and its different components.",
      subtopics: [],
    },
    {
      title: "Frontend Development",
      curriculum:
        "In this lesson, you will focus on frontend development and learn the necessary skills and technologies.",
      subtopics: [
        {
          title: "HTML",
          curriculum:
            "In this lesson, you will learn the fundamentals of HTML and how to structure web pages.",
          subtopics: [],
        },
        {
          title: "CSS",
          curriculum:
            "In this lesson, you will learn how to style web pages using CSS.",
          subtopics: [],
        },
        {
          title: "JavaScript",
          curriculum:
            "In this lesson, you will learn the basics of JavaScript and how to add interactivity to web pages.",
          subtopics: [],
        },
        {
          title: "Frontend Frameworks",
          curriculum:
            "In this lesson, you will explore different frontend frameworks and their benefits.",
          subtopics: [],
        },
      ],
    },
    {
      title: "Backend Development",
      curriculum:
        "In this lesson, you will focus on backend development and learn the necessary skills and technologies.",
      subtopics: [],
    },
    {
      title: "Databases",
      curriculum:
        "In this lesson, you will learn about databases and how to work with them in web development.",
      subtopics: [],
    },
    {
      title: "Deployment and DevOps",
      curriculum:
        "In this lesson, you will learn about deployment and DevOps practices to deploy and maintain web applications.",
      subtopics: [],
    },
  ],
};
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
  graph: fakeG,
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
