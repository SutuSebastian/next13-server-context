import Link from "next/link";
import { ClientComponent } from "~/components/client-component";
import { ServerComponent } from "~/components/server-component";
import { Theme, createTheme } from "~/lib/theme";
import { ClientTheme } from "~/lib/theme/client";

const customTheme: Theme = { name: "override title" };

createTheme(customTheme);

export default function Home() {
  return (
    <>
      <ClientTheme theme={customTheme} />
      <Link href="/">back</Link>
      <ServerComponent />
      <ClientComponent />
    </>
  );
}
