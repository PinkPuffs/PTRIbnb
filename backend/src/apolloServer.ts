import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema/type-defs.js';
import  resolvers from './schema/resolvers.js';
import { readFileSync } from 'fs';

// const typeDefs = readFileSync('./schema/type-defs', { encoding: 'utf-8' });
// const resolvers = readFileSync('./schema.graphql', { encoding: 'utf-8' });


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(apolloServer, {
  listen: { port: 4000 }
})

console.log(`🚀  Server ready at: ${url}`);