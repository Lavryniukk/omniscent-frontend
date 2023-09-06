import { treenode } from "../types/node";

type Props = {
  showSideBar: boolean;
  tree: treenode;
  toggleChildren: (id: string) => void;
  toggleSideBar: () => void;
  selectedNode: treenode;
};
let SideBar = ({
  tree,
  showSideBar,
  toggleSideBar,
  toggleChildren,
  selectedNode,
}: Props) => {
  let res = showSideBar ? "right-0" : "-right-1/4";
  return (
    <div
      className={`border-l-2 fixed top-0 transition-all duration-300 ${res} text-text h-screen w-1/4 `}
    >
      <div className="flex flex-row justify-evenly w-full px-2 my-4">
        <div
          className="border py-2 px-4 rounded-lg border-accent"
          onClick={() => {
            toggleSideBar();
          }}
        >
          Close sidebar
        </div>
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
  );
};
export default SideBar;
