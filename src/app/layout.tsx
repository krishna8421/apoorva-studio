import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import localFont from 'next/font/local'

import "@/styles/globals.css";

const skilletCondensed = localFont({
  src: './skillet-condensed.otf',
  variable: "--font-skillet-condensed",
})

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apoorva",
  description: "Apoorva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${skilletCondensed.variable} antialiased font-nunito text-primary-foreground bg-primary-background`}
      >
        {children}
      </body>
    </html>
  );
}
