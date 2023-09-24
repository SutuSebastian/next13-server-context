import { Theme, createTheme } from "~/lib/theme";

interface Props {
  theme?: Theme;
}

export function ServerInit({ theme }: Props) {
  createTheme(theme);

  return null;
}
