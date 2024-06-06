const { ApolloServer, gql } = require('apollo-server-lambda');
const db = require('./database/db');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // activa la introspección en producción si es necesario
  playground: true, // activa Playground en producción si es necesario
});

exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
});