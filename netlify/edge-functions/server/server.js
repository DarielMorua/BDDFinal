import { ApolloServer } from 'apollo-server';

import typeDefs from '../../../src/graphql/typeDefs';
import resolvers from '../../../src/graphql/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Servidor listo en ${url}`);
});

export { server as handler };