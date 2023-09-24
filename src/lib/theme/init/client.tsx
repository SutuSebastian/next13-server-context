"use client";

import { Theme, createTheme } from "~/lib/theme";

interface Props {
  theme?: Theme;
}

export function ClientInit({ theme }: Props) {
  createTheme(theme);

  return null;
}
