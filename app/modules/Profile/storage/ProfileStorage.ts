import { create } from "zustand";
import fetchUserData from "../api/fetchUserData";
import sendUserData from "../api/sendUserData";
interface profilePageStates {
  isEditMode: boolean;

  userDataName: string | null;
  userDataNickname: string | null;
  userDataBio: string | null;

  nameInputData: string | null;
  nicknameInputData: string | null;
  bioInputData: string | null;
}

interface profilePageActions {
  setIsEditMode: (newValue: profilePageStates["isEditMode"]) => void;

  setUserData: (
    newValue: string,
    subject: "userDataName" | "userDataNickname" | "userDataBio"
  ) => void;

  setInputData: (
    newValue: string,
    subject: "nameInputData" | "nicknameInputData" | "bioInputData"
  ) => void;

  fetchData: (userId: string) => Promise<boolean>;
  sendData: () => void;
}

const useProfileStorage = create<profilePageStates & profilePageActions>(
  (set, get) => ({
    isEditMode: false,

    userDataName: null,
    userDataNickname: null,
    userDataBio: null,

    nameInputData: null,
    nicknameInputData: null,
    bioInputData: null,

    setUserData: (newValue, subject) => set({ [subject]: newValue }),

    setInputData: (newValue, subject) => set({ [subject]: newValue }),

    setIsEditMode: (newValue) => set({ isEditMode: newValue }),

    fetchData: async (userId: string) => {
      const setUserData = get().setUserData;

      const data = await fetchUserData(userId);

      setUserData(data.name, "userDataName");
      setUserData(data.nickname, "userDataNickname");
      setUserData(data.user_metadata.bio.bio, "userDataBio");

      return data ? true : false;
    },

    sendData: async () => {
      const userDataName = get().userDataName;
      const userDataNickname = get().userDataNickname;
      const userDataBio = get().userDataBio;

      const nameInputData = get().nameInputData;
      const nicknameInputData = get().nicknameInputData;
      const bioInputData = get().bioInputData;

      let body = {};

      if (userDataName !== nameInputData) {
        body = { ...body, name: nameInputData };
      } else body = { ...body, name: userDataName };

      if (userDataNickname !== nicknameInputData) {
        body = { ...body, nickname: nicknameInputData };
      } else body = { ...body, nickname: userDataNickname };

      if (userDataBio !== bioInputData) {
        body = { ...body, user_metadata: { bio: { bio: bioInputData } } };
      } else body = { ...body, user_metadata: { bio: { bio: userDataBio } } };

      const res = await sendUserData(body);
    },
  })
);

export default useProfileStorage;
