import useGraphStore from "../../shared/storages/graphStorage";
// import { graphNode } from "../../shared/types/node";
import { MdOutlineClose } from "react-icons/md";
// Define the Props type for the SideBar component

// type Props = {
//   showSideBar: boolean; // Boolean prop to show/hide the sidebar
//   closeSideBar: (v: boolean) => void; // Function to close the sidebar
//   selectedNode: graphNode | null; // The currently selected node in the tree
//   setSelectedNode: (v: graphNode | null) => void;
// };

// Define the SideBar functional component
let SideBar = () => {
  const { showSidebar, setShowSidebar, selectNode, selectedNode } =
    useGraphStore();
  let res = showSidebar ? "right-0" : "-right-full";

  return (
    <div>
      {/* Background overlay when the sidebar is open */}
      <div
        className={`w-3/4 bg-background opacity-60 h-screen fixed top-0 ${
          showSidebar ? "left-0" : "-left-full"
        }`}
      />
      {/* Sidebar container */}
      <div
        className={`sidebar border-l-2 bg-background fixed top-0 ${res} text-text h-screen w-1/4 `}
      >
        {/* Close button */}
        <div
          className="w-fit ml-auto closer m-1 cursor-pointer"
          onClick={() => {
            setShowSidebar(false);
            selectNode(null);
          }}
        >
          <MdOutlineClose size={"30px"} color={"white"} /> {/* Close icon */}
        </div>
        {/* Node name */}
        <h1 className="text-2xl text-center">
          {selectedNode && selectedNode.title}
        </h1>
      </div>
    </div>
  );
};

export default SideBar; // Export the SideBar component as the default export
