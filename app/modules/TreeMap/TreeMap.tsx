"use client";
import { treenode } from "@/app/shared/types/node";
import { Tree, TreeNode } from "react-organizational-chart";
("text commit");
("commit got");
const roadmap: treenode = {
  id: "front-end-dev",
  name: "Front-End Developer",
  children: [
    {
      id: "html",
      name: "HTML",
      children: [
        {
          id: "css",
          name: "CSS",
          children: [
            {
              id: "css-tailwind",
              name: "Tailwind CSS",
            },
            {
              id: "js",
              name: "JavaScript",
              children: [
                {
                  id: "ts",
                  name: "TypeScript",
                  children: [
                    {
                      id: "git",
                      name: "Git",
                      children: [
                        {
                          id: "vue",
                          name: "Vue",
                          children: [],
                        },
                        {
                          id: "react",
                          name: "React",
                          children: [
                            {
                              id: "redux",
                              name: "Redux",
                              children: [
                                {
                                  id: "testing",
                                  name: "Testing",
                                  children: [
                                    {
                                      id: "api",
                                      name: "API",
                                      children: [
                                        {
                                          id: "deployment",
                                          name: "Deployment",
                                          children: [
                                            {
                                              id: "design",
                                              name: "Design",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        {
                          id: "angular",
                          name: "Angular",
                          children: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "css-scss",
              name: "SCSS",
            },
          ],
        },
      ],
    },
  ],
};

const GraphComponent = () => {
  // You can continue adding more nodes as needed
  const generateTree = (node: treenode) => {
    const { id, name, children } = node;

    return (
      <TreeNode label={<div className="node">{name || "Unnamed Node"}</div>}>
        {children &&
          children.map((child: treenode) => (
            <TreeNode key={child.id} label="">
              {generateTree(child)}
            </TreeNode>
          ))}
      </TreeNode>
    );
  };
  return (
    <div className="rotate-180 w-1/2 mx-auto">
      <Tree
        lineWidth={"1px"}
        lineColor={"white"}
        lineHeight={"15px"}
        lineStyle="solid"
        lineBorderRadius={"10px"}
        label={""}
      >
        {generateTree(roadmap)}
      </Tree>
    </div>
  );
};

export default GraphComponent;
