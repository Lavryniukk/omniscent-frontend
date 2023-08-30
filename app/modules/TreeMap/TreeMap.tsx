"use client";
import { treenode } from "@/app/shared/types/node";
import { Tree, TreeNode } from "react-organizational-chart";
("text commit");
'commit got'
const GraphComponent = () => {
  let nodes: Array<treenode> = [
    {
      id: "1",
      name: "John",
      children: [
        {
          id: "1.1",
          name: "Alice",
          children: [
            {
              id: "1.1.1",
              name: "Emma",
              children: [],
            },
            {
              id: "1.1.2",
              name: "Ben",
              children: [],
            },
          ],
        },
        {
          id: "1.2",
          name: "Bob",
          children: [],
        },
      ],
    },
    {
      id: "2",
      name: "Mary",
      children: [
        {
          id: "2.1",
          name: "Eve",
          children: [],
        },
      ],
    },
  ];

  // You can continue adding more nodes as needed
  let createNode = (node: treenode) => {};
  let result = nodes.map((elem) => {
    let resultList = '<Tree label={<div className="node">Root</div>}>';
  });
  return (
    <Tree
      lineWidth={"1px"}
      lineColor={"white"}
      lineHeight={"25px"}
      lineBorderRadius={"20px"}
      label={<div className="node">Root</div>}
    >
      <TreeNode label={<div className="node">Child 1</div>}>
        <TreeNode label={<div className="node">Grand Child</div>} />
      </TreeNode>
      <TreeNode label={<div className="node">Child 2</div>}>
        <TreeNode label={<div className="node">Grand Child</div>}>
          <TreeNode label={<div className="node">Great Grand Child 1</div>} />
          <TreeNode label={<div className="node">Great Grand Child 2</div>} />
        </TreeNode>
      </TreeNode>
      <TreeNode label={<div className="node">Child 3</div>}>
        <TreeNode label={<div className="node">Grand Child 1</div>} />
        <TreeNode label={<div className="node">Grand Child 2</div>} />
      </TreeNode>
    </Tree>
  );
};

export default GraphComponent;
