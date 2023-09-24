import { Theme } from "..";
import { ClientInit } from "./client";
import { ServerInit } from "./server";

interface Props {
  theme?: Theme;
}

export function Init({ theme }: Props) {
  return (
    <>
      <ServerInit theme={theme} />
      <ClientInit theme={theme} />
    </>
  );
}
