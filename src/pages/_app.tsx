import type { AppProps } from "next/app";
import { Init } from "~/lib/theme/init";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Init theme={{ name: "override title" }} />
      <Component {...pageProps} />
    </>
  );
}
