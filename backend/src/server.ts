import path from 'path';
import express from 'express';
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
import { read } from 'fs';

// import * as routes from './routes/api';

interface MyContext {
  auth?: String;
}

const contextFunc: object = ({ req, res }) => {
  return { req, res }
};

env.config();
// Create a new Express app
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use((req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ ApolloServerPluginDrainHttpServer({ httpServer })]
})

await server.start();

app.use(
  '/',
  cors(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async () => ({
       contextFun: contextFunc
      })
  })
  );

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

await new Promise<void>((resolve) => httpServer.listen({ port: PORT }, resolve));
console.log(`🚀 Server ready at http://localhost:${PORT}/`);


export default server;
