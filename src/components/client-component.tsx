"use client";

import { getTheme } from "~/lib/theme";

export function ClientComponent() {
  const theme = getTheme();

  console.log("client component:", theme);

  return <div>client: {JSON.stringify(theme)}</div>;
}
