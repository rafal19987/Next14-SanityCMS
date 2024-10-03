import { type Metadata } from "next";

export const HOME_PAGE_SEO: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_HOST_URL!),
  robots: {
    index: true,
    follow: true,
  },
  title: "Next-sanity",
  description: "Next-sanity",
  authors: [{ name: "Rafał Izdebski", url: "https://rafalizdebski.pl/" }],
  creator: "Rafał Izdebski",
  keywords: ["sanity-cms", "nextjs"],
  openGraph: {
    type: "website",
    countryName: "Polska",
    locale: "pl_PL",
    title: "",
    description: "",
    url: new URL(process.env.NEXT_PUBLIC_HOST_URL!),
    images: "",
    siteName: "",
  },
  twitter: {
    title: "",
    description: "",
    card: "summary_large_image",
    images: "",
    creator: "Rafał Izdebski",
  },
  icons: "/favicon.ico",
};
