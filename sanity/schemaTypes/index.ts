import { type SchemaTypeDefinition } from 'sanity'
import project from './project'
import article from './article'
import skills from './skills'
import resume from './resume'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, article, skills, resume],
}
