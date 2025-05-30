import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../styles/globals.css";
import CursorFollower from "@/components/basic/cursor-follower";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apoorva",
  description: "Apoorva's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}
