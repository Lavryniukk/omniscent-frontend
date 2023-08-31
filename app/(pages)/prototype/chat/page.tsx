"use client";
import dynamic from "next/dynamic";
const DynamicComponentTree = dynamic(
  () => import("@/app/modules/TreeMap/TreeMap"),
  { ssr: false }
);
const ChatPage = () => {
  return (
    <div className="w-full mt-16 select-none">
      <DynamicComponentTree />
    </div>
  );
};
export default ChatPage;
