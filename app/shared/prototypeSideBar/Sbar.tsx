import { treenode } from "../types/node";
import { MdOutlineClose } from "react-icons/md";
// Define the Props type for the SideBar component
type Props = {
  showSideBar: boolean; // Boolean prop to show/hide the sidebar
  closeSideBar: (v: boolean) => void; // Function to close the sidebar
  selectedNode: treenode | null; // The currently selected node in the tree
  setSelectedNode: (v: treenode | null) => void;
};

// Define the SideBar functional component
let SideBar = ({
  showSideBar,
  closeSideBar,
  selectedNode,
  setSelectedNode,
}: Props) => {
  // Calculate the CSS class for the sidebar position
  let res = showSideBar ? "right-0" : "-right-full";

  return (
    <div>
      {/* Background overlay when the sidebar is open */}
      <div
        className={`w-3/4 bg-background opacity-60 h-screen fixed top-0 ${
          showSideBar ? "left-0" : "-left-full"
        }`}
      />
      {/* Sidebar container */}
      <div
        className={`sidebar border-l-2 bg-background fixed top-0  ${res} text-text h-screen w-1/4 `}
      >
        {/* Close button */}
        <div
          className=" w-fit ml-auto m-1 cursor-pointer"
          onClick={() => {
            closeSideBar(false);
            setSelectedNode(null);
          }}
        >
          <MdOutlineClose size={"30px"} color={"white"} /> {/* Close icon */}
        </div>
        {/* Node name */}
        <h1 className="text-2xl text-center">
          {selectedNode && selectedNode.name}
        </h1>
      </div>
    </div>
  );
};

export default SideBar; // Export the SideBar component as the default export
