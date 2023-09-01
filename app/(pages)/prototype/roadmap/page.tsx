"use client";
import dynamic from "next/dynamic";
const DynamicComponentTree = dynamic(
  () => import("@/app/modules/TreeMap/TreeMap"),
  { ssr: false }
);
const ChatPage = () => {
  return (
    <div className="w-fit select-none">
      <DynamicComponentTree />
    </div>
  );
};
export default ChatPage;
