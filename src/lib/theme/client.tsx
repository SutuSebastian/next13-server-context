"use client";

import { Theme, createTheme } from "~/lib/theme";

interface Props {
  theme?: Theme;
}

export function ClientTheme({ theme }: Props) {
  createTheme(theme);

  return null;
}
