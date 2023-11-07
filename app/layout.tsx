import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue bell",
  description: "A simple chat application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full">{children}</body>
    </html>
  );
}
