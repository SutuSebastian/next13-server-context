import { Init } from "~/lib/theme/init";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Init theme={{ name: "override title" }} />
        {children}
      </body>
    </html>
  );
}
