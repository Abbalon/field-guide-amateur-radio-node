import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import 'dotenv/config';

// Importar schemas y resolvers combinados
import typeDefs from './schemas/index.js';
import resolvers from './resolvers/index.js';

// Conexión a MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('🚀 Conectado a MongoDB');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err.message);
  });

// Crear el servidor de Apollo
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Iniciar el servidor
const { url } = await startStandaloneServer(server, {
  listen: { port: process.env.PORT || 4000 },
});

console.log(`🚀 Servidor listo en ${url}`);