export interface HandleFunctionProps {
  inputHandleFunction: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectHandleFunction: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface FormState {
  inputData: string;
  selectData: string | null;
}
