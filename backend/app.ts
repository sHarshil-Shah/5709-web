import express, { Request, Response } from 'express';
import { loginRouter } from './controller/login';
import { registerRouter } from './controller/register';
import cors from 'cors';
import { listUsersRouter } from './controller/listUsers';
import { deleteUserRouter } from './controller/deleteUser';


// Create an Express app
const app = express();

// Enable CORS
app.use(cors());


// Middleware to parse JSON in request body
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('Hello from express typescript');
});

// Redirect requests to /login to loginRouter
app.use('/login', loginRouter);

app.use('/register', registerRouter);
app.use('/listUsers', listUsersRouter);
app.use('/deleteUser', deleteUserRouter);


app.listen(3000, () => {
  console.log('Server started on port 3000');
});

