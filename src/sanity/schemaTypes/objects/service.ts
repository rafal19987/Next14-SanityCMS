import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "object",
  fields: [
    defineField({
      name: "letter",
      title: "Letter",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "button",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});
