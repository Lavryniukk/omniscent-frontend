import GraphTree from "@/app/modules/graph/GraphTree";
import { treenode } from "@/app/shared/types/node";
let test: Array<treenode> = [
  {
    id: "Finance & Economics",
    name: "Finance & Economics",
    displayChildren: true,
    children: [
      {
        id: "Corporate Finance",
        name: "Corporate Finance",
        displayChildren: true,
        children: [],
      },
      {
        id: "Valuation Methods",
        name: "Valuation Methods",
        displayChildren: true,
        children: [],
      },
      {
        id: "Economic Indicators",
        name: "Economic Indicators",
        displayChildren: true,
        children: [
          {
            id: "Interest Rate",
            name: "Interest Rate",
            displayChildren: true,
            children: [],
          },
          {
            id: "GDP",
            name: "GDP",
            displayChildren: true,
            children: [],
          },
          {
            id: "Inflation",
            name: "Inflation",
            displayChildren: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "Investment Basics",
    name: "Investment Basics",
    displayChildren: true,
    children: [
      {
        id: "Asset Classes",
        name: "Asset Classes",
        displayChildren: true,
        children: [],
      },
      {
        id: "Investment Strategies",
        name: "Investment Strategies",
        displayChildren: true,
        children: [],
      },
      {
        id: "Risk Management",
        name: "Risk Management",
        displayChildren: true,
        children: [],
      },
    ],
  },
  {
    id: "Legal Framework",
    name: "Legal Framework",
    displayChildren: true,
    children: [
      {
        id: "Intellectual Property",
        name: "Intellectual Property",
        displayChildren: true,
        children: [],
      },
      {
        id: "Term Sheets",
        name: "Term Sheets",
        displayChildren: true,
        children: [],
      },
      {
        id: "Due Diligence",
        name: "Due Diligence",
        displayChildren: true,
        children: [],
      },
      {
        id: "Investment Structures",
        name: "Investment Structures",
        displayChildren: true,
        children: [
          {
            id: "Priced Rounds",
            name: "Priced Rounds",
            displayChildren: true,
            children: [],
          },
          {
            id: "Convertible Notes",
            name: "Convertible Notes",
            displayChildren: true,
            children: [],
          },
          {
            id: "SAFEs",
            name: "SAFEs",
            displayChildren: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "Venture Capital & Angel Investing",
    name: "Venture Capital & Angel Investing",
    displayChildren: true,
    children: [
      {
        id: "VC vs Angel Investors",
        name: "VC vs Angel Investors",
        displayChildren: true,
        children: [],
      },
      {
        id: "Investment Rounds",
        name: "Investment Rounds",
        displayChildren: true,
        children: [
          {
            id: "Pre-Seed",
            name: "Pre-Seed",
            displayChildren: true,
            children: [],
          },
          {
            id: "Seed",
            name: "Seed",
            displayChildren: true,
            children: [],
          },
          {
            id: "Series A",
            name: "Series A",
            displayChildren: true,
            children: [],
          },
          {
            id: "Series B",
            name: "Series B",
            displayChildren: true,
            children: [],
          },
          {
            id: "Series C+",
            name: "Series C+",
            displayChildren: true,
            children: [],
          },
        ],
      },
      {
        id: "Role of an Investor",
        name: "Role of an Investor",
        displayChildren: true,
        children: [],
      },
    ],
  },
];
let Page = () => {
  return (
    <div className="m-32">
      <GraphTree treeObjectArray={test} />
    </div>
  );
};

export default Page;
