import * as path from 'path';
import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { Request, Response, NextFunction } from 'express';
import * as env from 'dotenv';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
// import * as routes from './routes/api';


const schema = buildSchema(`
type Query {
  
}
`)

const root = {
  // plaxe holder
}

env.config();
// Create a new Express app
const app = express();
const PORT = 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }))

// Routes
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use((req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

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


app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}/ ✅`);
  });
export default app;
