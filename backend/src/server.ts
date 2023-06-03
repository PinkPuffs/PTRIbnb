import path from 'path';
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/typeSchema';
import  root from './schema/roots';
import http from 'http';
import env from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';



env.config();
// Create a new Express app
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
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

app.listen(PORT, () => console.log(`Server is running on Port:${PORT}`))

export default app;
