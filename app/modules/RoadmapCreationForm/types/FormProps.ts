export interface HandleFunctionProps {
  inputHandleFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectHandleFunction: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export interface HandleFunctionProps {
  inputHandleFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectHandleFunction: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export enum RoadmapSize {
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
}
export interface FormState {
  inputData: string;
  selectData: RoadmapSize;
}
