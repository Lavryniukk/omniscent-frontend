export type graphNode = {
  id: string;
  name: string;
  displayChildren: boolean;
  children?: Array<graphNode>;
};
