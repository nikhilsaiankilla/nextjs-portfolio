import { defineType, defineField } from "sanity";

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Skill Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Skill Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
