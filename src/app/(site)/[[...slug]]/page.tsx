import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { Hero, type HeroProps } from "@/components/Hero";
import {
  FeaturesNumbers,
  type FeaturesNumbersProps,
} from "@/components/FeaturesNumbers";
import { FAQ, type FAQProps } from "@/components/FAQ";
import {
  IllustrationWithContent,
  type IllustrationWithContentProps,
} from "@/components/IllustrationWithContent";
import { Services, type ServicesProps } from "@/components/Services";
import {
  Testimonials,
  type TestimonialsProps,
} from "@/components/Testimonials";

type Props = { params: { slug?: string[] } };

type SanityComponentsName = [
  (
    | "hero"
    | "featuresNumbers"
    | "frequentlyAskedQuestions"
    | "illustrationWithContent"
    | "servicesSection"
  ),
  "testimonials",
];

// Record need to be section type name from sanity and value need to be representive component
// TODO: add type for all sanity section types name and make it more generic
const SECTION_COMPONENTS: Record<
  SanityComponentsName[number],
  React.ComponentType<any>
> = {
  hero: (props: HeroProps) => <Hero data={props} />,
  featuresNumbers: (props: FeaturesNumbersProps) => (
    <FeaturesNumbers data={props} />
  ),
  frequentlyAskedQuestions: (props: FAQProps) => <FAQ data={props} />,
  illustrationWithContent: (props: IllustrationWithContentProps) => (
    <IllustrationWithContent data={props} />
  ),
  servicesSection: (props: ServicesProps) => <Services data={props} />,
  testimonials: (props: TestimonialsProps) => <Testimonials data={props} />,
};

const getAllPagesSlugs = groq`
   *[_type == "page"]{
    "slug": slug.current
  }[].slug
`;

const getPageBySlug = groq`
  *[_type == "page" && slug.current == $slug][0]{
    ...,
    body[]{...,
      _type == "image" => {..., asset->}
    }
  }
`;

const getPageMetadata = groq`
  *[_type == "page" && slug.current == $slug]{
    seo
  }[0].seo
`;

const getPageBody = groq`
  *[_type == "page" && slug.current == $slug]{
    body
  }[0].body
`;

const fetchAllPagesSlugs = async () => {
  return await client.fetch(getAllPagesSlugs, {}, { cache: "no-cache" });
};

const fetchPageBody = async (slug: string) => {
  return await client.fetch(getPageBody, { slug }, { cache: "no-cache" });
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug ? `${params.slug.join("/")}` : "/";
  const metadata = await client.fetch(
    getPageMetadata,
    { slug },
    { cache: "no-cache" },
  );

  if (!metadata) return {};

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      images: metadata.ogImage?.asset.url,
    },
    authors: {
      name: metadata.author,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = params;

  const pageSlug = slug ? slug.join("/") : "/";
  const page = await client.fetch(getPageBySlug, { slug: pageSlug });

  if (!page) return notFound();

  const body = await fetchPageBody(pageSlug);

  if (!body) return <div>{params.slug}</div>;

  return (
    <div className="">
      {body.map((item: any, index: number) => {
        const SectionComponent =
          SECTION_COMPONENTS[item._type as keyof typeof SECTION_COMPONENTS];
        return SectionComponent ? (
          <SectionComponent key={`${item._type}-${index}`} {...item} />
        ) : null;
      })}
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await fetchAllPagesSlugs();
  return slugs.map((slug: string) => ({
    slug: slug ? slug.split("/") : ["/"],
  }));
}
