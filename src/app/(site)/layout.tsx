import { exo, robotoCondensed } from "@/fonts";
import "./globals.css";
import { Header } from "@/components/Header";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Navigation } from "@/components/Navigation";

const getNavigation = async () => {
  return await client.fetch(
    groq`*[_type == "navigation"][0]{
      main[]-> {
        slug
      }
    }.main[].slug.current`,
  );
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoCondensed.variable} ${exo.variable} antialiased`}
      >
        <Header>
          <Navigation />
        </Header>
        <main className="mx-auto max-w-7xl">{children}</main>
      </body>
      <TailwindIndicator />
    </html>
  );
}
