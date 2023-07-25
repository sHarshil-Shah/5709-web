import express, {Request, Response} from 'express';
import {loginRouter} from './controller/users/login';
import {registerRouter} from './controller/users/register';
import cors from 'cors';
import {listUsersRouter} from './controller/users/listUsers';
import {deleteUserRouter} from './controller/users/deleteUser';
import {getUserByIdRouter} from "./controller/users/getUserByEmail";
import {forgetPasswordRouter} from "./controller/users/forgetPassword";
import EmailRouter from "./controller/users/forgetPasswordEmail";


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
app.use('/getUserById', getUserByIdRouter);
app.use('/forgetPassword', forgetPasswordRouter);
app.use('/send-email', EmailRouter);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

