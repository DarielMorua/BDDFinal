const { ApolloServer } = require('apollo-server');
const db = require('../../src/database/db');

const typeDefs = require('../../src/graphql/typeDefs');
const resolvers = require('../../src/graphql/resolvers');


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Servidor listo en ${url}`);
});
exports.handler = server.createHandler();