import { defineArrayMember, defineType } from "sanity";

export default defineType({
  name: "paragraph",
  title: "Paragraph",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
    }),
  ],
});
