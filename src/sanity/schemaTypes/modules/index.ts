import { defineArrayMember, defineType } from "sanity";
import services from "./services";
import illustrationWithContent from "./illustrationWithContent";
import frequentlyAskedQuestions from "./frequentlyAskedQuestions";
import featuresNumbers from "./featuresNumbers";
import hero from "./hero";
import testimonials from "./testimonials";

export default defineType({
  name: "components",
  title: "Components",
  type: "array",
  of: [
    // @ts-ignore
    hero,
    // @ts-ignore
    featuresNumbers,
    // @ts-ignore
    illustrationWithContent,
    // @ts-ignore
    services,
    // @ts-ignore
    frequentlyAskedQuestions,
    // @ts-ignore
    testimonials,
  ],
  options: {
    layout: "list",
    insertMenu: {
      filter: true,
      showIcons: true,
      groups: [
        {
          name: "landing",
          title: "Landing",
          of: [
            "hero",
            "featuresNumbers",
            "illustrationWithContent",
            "services",
            "frequentlyAskedQuestions",
            "testimonials",
          ],
        },
      ],
      views: [
        { name: "list" },
        {
          name: "grid",
          previewImageUrl: (schemaTypeName) => `/static/${schemaTypeName}.png`,
        },
      ],
    },
  },
});
