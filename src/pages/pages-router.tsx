import Link from "next/link";
import { ClientComponent } from "~/components/client-component";
import { ServerComponent } from "~/components/server-component";

export default function PagesRouter() {
  return (
    <>
      <Link href="/">back</Link>
      <ServerComponent />
      <ClientComponent />
    </>
  );
}
