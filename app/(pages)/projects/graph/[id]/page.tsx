import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
let Graph = () => {
  return <div className="flex h-screen border-accent items-center"></div>;
};

export default withPageAuthRequired(Graph);
