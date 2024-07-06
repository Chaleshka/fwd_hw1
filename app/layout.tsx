import type { Metadata } from "next";
import "./styles/index.css";

export const metadata: Metadata = {
  title: "My Personal Page",
  description: "My Personal Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
