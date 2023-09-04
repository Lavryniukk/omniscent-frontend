import { treenode } from "../types/node";

type Props = {
  showSideBar: boolean;
  toggleSideBar: () => void;
  selectedNode?: treenode;
};
let SideBar = ({ showSideBar, toggleSideBar, selectedNode }: Props) => {
  let res = showSideBar ? "right-0" : "-right-1/4";
  return (
    <div
      className={`border-l-2 fixed top-0 transition-all duration-300  ${res} text-text h-screen w-1/4 `}
    >
      <div className="border h-20 w-8 "></div>
      <div className="w-fit flex items-center justify-center px-4 py-2 hover:border-text rounded-lg m-2 border border-accent h-fit">
        {/* {selectedNode?.displayChildren ? 'Hide children' ? 'Show children'} */}
      </div>
    </div>
  );
};
export default SideBar;
