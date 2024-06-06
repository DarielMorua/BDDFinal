import { ApolloServer } from 'apollo-server';

import typeDefs from '../../../src/graphql/typeDefs/index';
import resolvers from '../../../src/graphql/resolvers/index';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Servidor listo en ${url}`);
});

export { server as handler };