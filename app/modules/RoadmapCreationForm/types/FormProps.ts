import { RoadmapSize } from "@/app/shared/types/roadmap-size";

export interface HandleFunctionProps {
  inputHandleFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectHandleFunction: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export interface HandleFunctionProps {
  inputHandleFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectHandleFunction: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface FormState {
  inputData: string;
  selectData: RoadmapSize;
}
export { RoadmapSize };

