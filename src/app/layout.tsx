import type { Metadata } from "next";
import { exo, robotoCondensed } from "@/fonts";
import { HOME_PAGE_SEO } from "./config";
import "@/app/globals.css";

export const metadata: Metadata = HOME_PAGE_SEO;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoCondensed.variable} ${exo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
