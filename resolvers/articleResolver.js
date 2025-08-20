import Article from '../models/Article.js';
import User from '../models/User.js';

export const articleResolvers = {
  Query: {
    allArticles: async () => {
      return Article.find({}).populate('author').populate('comments');
    },
    findArticle: async (root, args) => {
      return Article.findById(args.id).populate('author').populate('comments');
    },
  },
  Mutation: {
    createArticle: async (root, args) => {
      const author = await User.findById(args.authorId);
      if (!author) {
        throw new Error('Author not found.');
      }
      const article = new Article({ ...args, author: args.authorId });
      await article.save();

      // Añadir el artículo a la lista de artículos del autor
      author.articles = author.articles.concat(article._id);
      await author.save();

      return article.populate('author');
    },
  },
  // Opcional: Resolver para campos específicos si no se usa `populate`
  Article: {
    author: async (root) => {
      return User.findById(root.author);
    }
  }
};