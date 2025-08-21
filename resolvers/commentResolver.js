import Comment from '../models/Comment.js';
import User from '../models/User.js';
import Article from '../models/Article.js';

export const commentResolvers = {
  Mutation: {
    createComment: async (root, args) => {
      const { content, authorId, articleId } = args;

      // 1. Verificar que el autor y el artículo existen
      const author = await User.findById(authorId);
      if (!author) {
        throw new Error('Author not found.');
      }

      const article = await Article.findById(articleId);
      if (!article) {
        throw new Error('Article not found.');
      }

      // 2. Crear y guardar el nuevo comentario
      const newComment = new Comment({
        content,
        author: authorId,
        article: articleId,
      });
      await newComment.save();

      // 3. Añadir la referencia del comentario al artículo y al autor
      article.comments.push(newComment._id);
      await article.save();

      // 4. Devolver el comentario con la información del autor y el artículo populada
      return newComment.populate(['author', 'article']);
    },
  },
};