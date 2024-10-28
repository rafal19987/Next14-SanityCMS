import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "opinion",
      title: "Opinia",
      type: "portableText",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date (DD.MM.YYYY)",
      type: "date",
      options: {
        dateFormat: "DD.MM.YYYY",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "string",
      options: {
        list: ["1", "2", "3", "4", "5"],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
