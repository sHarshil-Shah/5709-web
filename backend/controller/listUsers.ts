import express, { Request, Response } from 'express';
import UserService from '../service/user.service';

export const listUsersRouter = express.Router();

const userService = new UserService();
// Login endpoint
listUsersRouter.post('/', async (req: Request, res: Response) => {
    // Extract username and password from the request body
    console.log(req.body);

    try {
        const users = await userService.listUsersWithusertypeFilter();

        if (users) {
            // User found, return success response
            res.json({ message: 'Users fetched successful', users: users });
        } else {
            // User not found or invalid credentials, return error response
            res.status(401).json({ message: 'Error occured' });
        }
    } catch (error) {
        console.log(error);
        // Error occurred during MongoDB operation, return error response
        res.status(500).json({ message: error });
    }
});