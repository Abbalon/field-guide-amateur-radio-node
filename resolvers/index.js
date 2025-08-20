import { merge } from 'lodash-es';
import { userResolvers } from './userResolver.js';
import { articleResolvers } from './articleResolver.js';
import { commentResolvers } from './commentResolver.js';

// Usamos lodash-es para combinar los resolvers de forma segura.
// Asegúrate de instalarlo: npm install lodash-es
const resolvers = merge(userResolvers, articleResolvers, commentResolvers);

export default resolvers;