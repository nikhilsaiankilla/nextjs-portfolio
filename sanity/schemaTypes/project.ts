import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (Rule) => Rule.max(100),
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "demo_url",
      title: "Demo URL",
      type: "url",
      validation: (Rule) => Rule.uri({ allowRelative: false }),
    }),
    defineField({
      name: "source_url",
      title: "Source Code URL",
      type: "url",
      validation: (Rule) => Rule.uri({ allowRelative: false }),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tech_stack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }], // Reference to the `skill` schema
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
  ],
});
