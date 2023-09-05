import type { AppProps } from "next/app";
import { createTheme } from "~/lib/theme";

export default function App({ Component, pageProps }: AppProps) {
  createTheme({ name: "override title" });

  return <Component {...pageProps} />;
}
