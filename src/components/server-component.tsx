import { getServerContext } from "~/contexts/getServerContext";

export const ServerComponent = () => {
  const ServerContext = getServerContext({ name: "override title" });

  console.log("server component:", ServerContext);

  return <div>server: {JSON.stringify(ServerContext)}</div>;
};
