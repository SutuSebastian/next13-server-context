import { getTheme } from "~/lib/theme";

export function ServerComponent() {
  const theme = getTheme();

  console.log("server component:", theme);

  return <div>server: {JSON.stringify(theme)}</div>;
}
