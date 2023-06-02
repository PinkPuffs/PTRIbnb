import * as path from 'path';
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import env from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const passport = require('passport')
const session = require('express-session')
const authenticate = require('./controllers/authController')



// import * as routes from './routes/api';
env.config();
// Create a new Express app
const app = express();
const PORT = 3000;

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: '1',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

// Routes

app.get('/google', passport.authenticate('google'))

app.get('/authenticate', passport.authenticate('google', {
    successRedirect: '/success',
    failureRedirect: '/'
}))

app.get('/success', (req, res, next) => {
  res.send('success')
})

app.use(express.static(__dirname + 'public'));

app.get('/', (req, res, next) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'))
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
