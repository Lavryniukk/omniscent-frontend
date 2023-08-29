"use client";

import { Tree, TreeNode } from "react-organizational-chart";
const GraphComponent = () => {
  return (
    <Tree
      lineWidth={"1px"}
      lineColor={"white"}
      lineBorderRadius={"20px"}
      label={
        <div className=" text-text mt-60 w-20 border rounded-full mx-auto">
          Root
        </div>
      }
    >
      <TreeNode
        label={
          <div className="text-text border rounded-full w-16 h-16 mx-auto p-2">
            Child 1
          </div>
        }
      >
        <TreeNode
          label={
            <div className="text-text border rounded-full w-16 h-16 mx-auto p-2">
              Grand Child
            </div>
          }
        />
      </TreeNode>
      <TreeNode
        label={
          <div className="text-text border rounded-full w-16 h-16 mx-auto p-2">
            Child 2
          </div>
        }
      >
        <TreeNode
          label={
            <div className="text-text border rounded-full w-16 h-16 mx-auto p-2">
              Grand Child
            </div>
          }
        >
          <TreeNode
            label={
              <div className="text-text border rounded-full w-16 h-16 mx-auto p-2">
                Great Grand Child 1
              </div>
            }
          />
          <TreeNode
            label={
              <div className="text-text border rounded-full w-16 h-16 mx-auto p-2">
                Great Grand Child 2
              </div>
            }
          />
        </TreeNode>
      </TreeNode>
      <TreeNode
        label={
          <div className="text-text border rounded-full w-16 h-16 mx-auto p-2">
            Child 3
          </div>
        }
      >
        <TreeNode
          label={
            <div className="text-text border rounded-full w-16 h-16 mx-auto p-2">
              Grand Child 1
            </div>
          }
        />
        <TreeNode
          label={
            <div className="text-text border rounded-full w-16 h-16 mx-auto p-2">
              Grand Child 2
            </div>
          }
        />
      </TreeNode>
    </Tree>
  );
};

export default GraphComponent;
