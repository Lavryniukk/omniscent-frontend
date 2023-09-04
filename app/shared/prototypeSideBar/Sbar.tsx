import { treenode } from "../types/node";

type Props = {
  showSideBar: boolean;
  tree: treenode;
  toggleChildren: (id: string) => void;
  toggleSideBar: () => void;
  selectedNode: treenode;
};
let SideBar = ({
  showSideBar,
  toggleSideBar,
  toggleChildren,
  selectedNode,
}: Props) => {
  let res = showSideBar ? "right-0" : "-right-1/4";
  let hideBtnText = selectedNode.displayChildren
    ? "Hide children"
    : "Show children"
    ? "Hide children"
    : "Show children";
  return (
    <div
      className={`border-l-2 fixed top-0 transition-all duration-300 ${res} text-text h-screen w-1/4 `}
    >
      <div className="flex flex-row m-2">
        <div className="border w-20 h-8  top-1/2 left-0"></div>
        <div
          onClick={() => {
            toggleChildren(selectedNode.id);
          }}
          className="w-fit flex items-center justify-center px-4 py-2 hover:border-text rounded-lg  border border-accent h-fit"
        >
          {hideBtnText}
        </div>
      </div>
      <h1 className=" text-2xl text-center">{selectedNode.name}</h1>
    </div>
  );
};
export default SideBar;
