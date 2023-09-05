"use client";

import { getServerContext } from "~/contexts/getServerContext";

export const ClientComponent = () => {
  const ServerContext = getServerContext();

  console.log("client component:", ServerContext);

  return <div>client: {JSON.stringify(ServerContext)}</div>;
};
