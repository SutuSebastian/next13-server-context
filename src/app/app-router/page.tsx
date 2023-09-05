import Link from "next/link";
import { ClientComponent } from "~/components/client-component";
import { ServerComponent } from "~/components/server-component";
import { createTheme } from "~/lib/theme";

createTheme({ name: "override title" });

export default function Home() {
  return (
    <>
      <Link href="/">back</Link>
      <ServerComponent />
      <ClientComponent />
    </>
  );
}
