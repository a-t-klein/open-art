import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

const inter = IBM_Plex_Mono({ subsets: ["cyrillic"], weight: ["300"] });

export const metadata: Metadata = {
  title: "open art",
  description:
    "an open source tool for artists, galleries, and collectors to keep track of their art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
