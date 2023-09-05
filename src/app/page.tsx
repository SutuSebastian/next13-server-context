import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/app-router">app-router</Link>
      </li>
      <li>
        <Link href="/pages-router">pages-router</Link>
      </li>
    </ul>
  );
}
