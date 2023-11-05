import { create } from "zustand";

interface ProjectFormState {
  ProjectFormInput: string;
  ProjectFormSelect: string;
}

interface ProjectFormAction {
  setProjectFormInput: (newInputData: string) => void;
  setProjectFormSelect: (newSelectData: string) => void;
  sendData: () => void;
}
const useProjectFormStorage = create<ProjectFormState & ProjectFormAction>(
  (set, get) => ({
    ProjectFormInput: "",
    ProjectFormSelect: "",

    setProjectFormInput: (newInputData) =>
      set({ ProjectFormInput: newInputData }),

    setProjectFormSelect: (newSelectData) =>
      set({ ProjectFormSelect: newSelectData }),

    sendData: async () => {
      const ProjectFormInput = get().ProjectFormInput;
      const ProjectFormSelect = get().ProjectFormSelect;

      //   try {
      //     const res = await fetch("/create", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         inputValue: ProjectFormInput,
      //         selectValue: ProjectFormSelect,
      //       }),
      //     });

      //     if (res.ok) {
      //       console.log("Yahoo");
      //     } else console.log("(");
      //   } catch (err) {
      //     console.log(err);
      //   }

      console.log("fetching", ProjectFormInput, ProjectFormSelect);
    },
  })
);

export default useProjectFormStorage;
