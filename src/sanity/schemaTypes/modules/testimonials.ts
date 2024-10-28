import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonials",
  title: "Testimonials",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "content",
      type: "portableText",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "testimonial" }],
    }),
  ],
  preview: {
    select: {
      title: "heading",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Testimonials",
        media: media,
      };
    },
  },
});
