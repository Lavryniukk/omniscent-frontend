import { createContext } from "react";

const RoadmapContext = createContext<{ id: string } | undefined>(undefined);

export default RoadmapContext;
