import * as path from 'path';
import express from 'express';
// import { graphqlHTTP } from 'express-graphql';
// import { buildSchema } from 'graphql';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { Request, Response, NextFunction } from 'express';
import typeDefs from './schema/type-defs.js';
import  resolvers from './schema/resolvers.js';
import http from 'http';
import env from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

// import * as routes from './routes/api';

interface MyContext {
  token?: string;
}

env.config();
// Create a new Express app
const app = express();
const PORT = 3000;

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ ApolloServerPluginDrainHttpServer({ httpServer })]
})

// app.use(cors());
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('public'));

await server.start();

app.use(
  '/',
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context:async ({ req }) =>({ token: req.headers.token }) 
  })
  );

  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
  
  app.use((req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
  });
// Routes

//Error Handling
type ErrorObject = {
  log: string;
  status: number;
  message: { error: string };
};

app.use((err: ErrorObject, req: Request, res: Response, next: NextFunction) => {
  const defaultErr: ErrorObject = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { error: 'An error occured' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/`);

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}/ ✅`);
  });
export default app;
