import React from 'react';
import './../styles/comic.css';
export const metadata = {};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
