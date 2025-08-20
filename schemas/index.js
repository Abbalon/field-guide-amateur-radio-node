import { userTypeDefs } from './userSchema.js';
import { articleTypeDefs } from './articleSchema.js';
import { commentTypeDefs } from './commentSchema.js';

// Definición base para poder extender en otros ficheros
const baseTypeDefs = `
  type Query
  type Mutation
`;

const typeDefs = [baseTypeDefs, userTypeDefs, articleTypeDefs, commentTypeDefs];

export default typeDefs;