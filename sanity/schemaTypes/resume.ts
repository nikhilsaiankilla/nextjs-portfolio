import { defineField, defineType } from "sanity";

export default defineType({
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    defineField({
      name: "resumePdf",
      title: "Resume PDF",
      type: "file",
      options: { storeOriginalFilename: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "uploadedAt",
      title: "Uploaded At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
