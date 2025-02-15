export const FETCH_ARTICLES = `*[_type == "article"]{
  _id,
  title,
  content,
  image,
  slug
}`;

export const FETCH_PROJRCTS = `*[_type == "project"]{
  _id,
  title,
  tagline,
  image,
  slug
}`

export const FETCH_ARTICLES_LIMITED = `*[_type == "article"] | order(_createdAt desc) [0..3] {
  _id,
  title,
  content,
  image,
  slug
}`;

export const FETCH_PROJECTS_LIMITED = `*[_type == "project"] | order(_createdAt desc) [0..3] {
  _id,
  title,
  tagline,
  image,
  slug
}`;


export const FETCH_ALL_SKILLS = `*[_type == "skill"]{
  _id,
  name,
  icon
}`

export const FETCH_PROJECT_WITH_ID = `*[_type == "project" && _id == $id][0]{
  _id,
  title,
  tagline,
  "image": image.asset->url,
  demo_url,
  source_url,
  description,
  views,
  "tech_stack": tech_stack[]-> { _id, name, "icon": icon.asset->url }
}`;

export const FETCH_ARTICLE_WITH_ID = `*[_type == "article" && _id == $id][0]{
  _id,
  title,
  "image": image.asset->url,
  publishedDate,
  content,
  views
}`;

export const FETCH_LATEST_RESUME = `*[_type == "resume"] | order(uploadedAt desc) [0] {
  "resumeUrl": resumePdf.asset->url,
  uploadedAt
}`;
