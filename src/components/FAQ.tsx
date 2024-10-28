import type { SanityComponent } from "./Hero";
import type { PortableTextBlock } from "sanity";
import { PortableText } from "next-sanity";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQProps extends SanityComponent {
  questions: { question: string; answer: string }[];
  heading: string;
  body: PortableTextBlock[];
}

export const FAQ: React.FC<{ data: FAQProps }> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <div className="prose prose-h2:text-4xl prose-headings:text-white prose-p:text-[#BEBEBE]">
        <PortableText value={data.body} />
      </div>
      <Accordion type="single" collapsible className="w-full max-w-5xl">
        {data.questions.map((question) => (
          <AccordionItem
            key={question.question}
            value={question.question}
            className="relative border-b-2 border-[#C59D5F]/20 py-2 transition-colors duration-300 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-[#C59D5F] after:transition-all after:duration-500 [&[data-state=open]]:after:w-full"
          >
            <AccordionTrigger className="font-robotoCondensed text-3xl font-medium hover:no-underline">
              {question.question}
            </AccordionTrigger>
            <AccordionContent className="font-robotoCondensed text-2xl text-[#BEBEBE]">
              {question.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
