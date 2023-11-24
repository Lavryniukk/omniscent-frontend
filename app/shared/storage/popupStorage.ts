import { create } from "zustand";

type yes = {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
};
export const usePopupStore = create<yes>((set) => ({
  isPopupOpen: false,
  openPopup: () => set({ isPopupOpen: true }),
  closePopup: () => set({ isPopupOpen: false }),
}));
