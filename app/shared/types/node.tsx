export type treenode = {
  id: string;
  name: string;
  displayChildren: boolean;
  children?: Array<treenode>;
};
