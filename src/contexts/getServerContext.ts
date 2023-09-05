import { cache } from "react";

interface Data {
  name: string;
}

export const getServerContext = cache((payload?: Data) => ({
  name: "theme title",
  ...payload,
}));
