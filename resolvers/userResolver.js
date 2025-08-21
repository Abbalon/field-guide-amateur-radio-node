import User from '../models/User.js';

export const userResolvers = {
  Query: {
    allUsers: async () => {
      // Usamos populate para obtener la información completa de los artículos
      return User.find({}).populate('articles');
    },
    findUser: async (root, args) => {
      return User.findById(args.id).populate('articles');
    },
  },
  Mutation: {
    createUser: async (root, args) => {
      const user = new User({ ...args });
      // La validación de 'unique' en el modelo se encargará de
      // evitar usuarios con el mismo username o email.
      await user.save();
      return user;
    },
  },
};