import express, { Request, Response } from 'express';
import assignment from '../../model/profAssignment.model';
import ProfAssignmentService from '../../service/professorAssignment.service'

export const createAssignmentRouter = express.Router();

const profAssignmentService = new ProfAssignmentService();

createAssignmentRouter.post('/', async (req: Request, res: Response) => {
    console.log(req.body);
    const curren_assignment: assignment = req.body;
    // const { user_email, password } = req.body;

    const new_assignment = await profAssignmentService.createAssignment(curren_assignment);
    console.log(new_assignment);
    if (new_assignment)
        res.json({ message: 'New Assignment Created successful', assignment: new_assignment });
    else
        res.json({ message: 'New Assignment Already Exists' });

});