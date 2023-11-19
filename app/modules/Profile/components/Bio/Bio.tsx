import useProfileStorage from "../../storage/ProfileStorage";

export default function Bio() {
  const { isEditMode, userDataBio, bioInputData, setInputData } =
    useProfileStorage();

  return isEditMode ? (
    <div className="rounded-lg shadow-lg w-full sm:max-w-xl">
      <label htmlFor="bio" className="block text-xl sm:text-lg text-text mb-2">
        Bio
      </label>
      <textarea
        required
        id="bio"
        rows={3}
        onChange={(e) => setInputData(e.target.value, "bioInputData")}
        value={bioInputData ? bioInputData : ""}
        className="p-2 rounded min-h-[50px] border w-3/4 sm:w-full border-secondary text-lg sm:text-base h-fit max-h-[150px] bg-background text-text"
        placeholder="Tell us your story"
      />
    </div>
  ) : (
    <div className="rounded-lg shadow-lg w-full sm:max-w-xl">
      <h3 className="block text-xl sm:text-lg text-text mb-2">Bio</h3>
      <div
        className={`w-full p-2 rounded min-h-[50px] border border-secondary
         text-base sm:text-sm h-fit max-h-[150px] bg-background text-accent`}
      >
        {userDataBio}
      </div>
    </div>
  );
}
