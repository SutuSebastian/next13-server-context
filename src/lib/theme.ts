import { cache } from "react";

interface Theme {
  name: string;
}

const defaultData: Theme = {
  name: "theme title",
};

const _theme = { current: { ...defaultData } };

export function createTheme(data?: Theme) {
  _theme.current = { ...defaultData, ...data };
}

export function getTheme() {
  if (typeof window === "undefined") {
    return { ..._theme.current };

    return getServerTheme();
  }

  return { ..._theme.current };
}

export const getServerTheme = () => cache(() => ({ ..._theme.current }))();
