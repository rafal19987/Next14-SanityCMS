import type { SanityComponent } from "./Hero";
import type { PortableTextBlock } from "sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export interface IllustrationWithContentProps extends SanityComponent {
  desktopImageDisplayOrder: "right" | "left";
  mobileImageDisplayOrder: "top" | "bottom";
  content: PortableTextBlock[];
  illustration: { asset: { url: string; alt: string } };
}

export const IllustrationWithContent: React.FC<{
  data: IllustrationWithContentProps;
}> = ({ data }) => {
  return (
    <section className="">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div
          className={`flex flex-col items-center justify-center ${data.desktopImageDisplayOrder === "right" ? "order-2" : "order-1"}`}
        >
          <div className="prose font-robotoCondensed prose-headings:font-robotoCondensed prose-headings:text-white prose-h2:my-0 prose-h2:mb-6 prose-h2:text-4xl prose-p:text-lg prose-p:text-[#BEBEBE] prose-a:text-base prose-a:font-normal prose-a:text-[#C59D5F] prose-strong:mb-0 prose-strong:text-base prose-strong:font-normal prose-strong:text-[#C59D5F]">
            <PortableText value={data.content} />
          </div>
        </div>
        <div
          className={`relative flex h-full w-full items-center justify-center ${
            data.desktopImageDisplayOrder === "right" ? "order-1" : "order-2"
          }`}
        >
          <Image
            src={urlFor(data.illustration.asset).url()}
            alt={data.illustration.asset.alt || "Illustration"}
            fill
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
