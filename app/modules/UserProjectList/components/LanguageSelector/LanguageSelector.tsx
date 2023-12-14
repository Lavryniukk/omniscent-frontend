"use client";
import Skeleton from "@/app/UI/loading/Skeleton/Skeleton";
import { useUser } from "@clerk/nextjs";

export default function LanguageSelector() {
  const { user, isLoaded } = useUser();
  let language = user?.unsafeMetadata.language as string | undefined;

  return (
    <div className="absolute top-4 right-4 flex gap-1 justify-center items-center">
      <label className="text-sm text-text/60">
        Preferred learning language
      </label>  
      {isLoaded ? (
        <select
          className="outline-none bg-transparent w-fit text-text/60"
          defaultValue={language ?? "english"}
          onChange={async (e) => {
            await user?.update({
              unsafeMetadata: { language: e.target.value },
            });
          }}
        >
          <option value="english" className="bg-background text-text/60">
            EN
          </option>
          <option value="russian" className="bg-background text-text/60">
            RU
          </option>
        </select>
      ) : (
        <Skeleton width="42px" height="20px" rounded="5px" />
      )}
    </div>
  );
}
