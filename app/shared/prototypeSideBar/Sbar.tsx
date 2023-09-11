import { treenode } from "../types/node";
import { MdOutlineClose } from "react-icons/md";
type Props = {
  showSideBar: boolean;
  toggleChildren: (id: string) => void;
  closeSideBar: () => void;
  selectedNode: treenode;
};
let SideBar = ({
  showSideBar,
  closeSideBar,
  toggleChildren,
  selectedNode,
}: Props) => {
  let res = showSideBar ? "right-0" : "-right-full";
  return (
    <div>
      <div
        className={`w-3/4 bg-background opacity-60 h-screen fixed top-0 ${
          showSideBar ? "left-0" : "-left-full"
        }`}
      />
      <div
        className={`sidebar border-l-2 fixed top-0  ${res} text-text h-screen w-1/4 `}
      >
        <div
          className=" w-fit ml-auto m-1 cursor-pointer"
          onClick={closeSideBar}
        >
          <MdOutlineClose size={"30px"} color={"white"} />
        </div>
        <div className="flex flex-row justify-between w-full px-2 my-4">
          <div
            onClick={() => {
              selectedNode.children && toggleChildren(selectedNode.id);
              console.log("selected node: ", selectedNode);
            }}
            className="w-fit flex items-center justify-center px-4 py-2 hover:border-text rounded-lg  border border-accent h-fit"
          >
            {selectedNode.displayChildren ? "Hide children" : "Show children"}
          </div>
        </div>
        <h1 className="text-2xl text-center">{selectedNode.name}</h1>
      </div>
    </div>
  );
};
export default SideBar;
