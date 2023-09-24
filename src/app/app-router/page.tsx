import Link from "next/link";
import { ClientComponent } from "~/components/client-component";
import { ServerComponent } from "~/components/server-component";

export default function Home() {
  return (
    <>
      <Link href="/">back</Link>
      <ServerComponent />
      <ClientComponent />
    </>
  );
}
