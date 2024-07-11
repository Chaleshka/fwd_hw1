import React from 'react';

export const metadata = {};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
