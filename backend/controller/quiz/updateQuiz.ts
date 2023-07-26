import express, { Request, Response } from 'express';
import { Quiz } from '../../model/quiz.model';
import QuizService from '../../service/quiz.service'

export const updateQuizRouter = express.Router();

const quizService = new QuizService();

updateQuizRouter.patch('/', async (req: Request, res: Response) => {
    const current_quiz = req.body;
    const quiz_id: string = req.body._id;
    delete current_quiz._id;
    const new_quiz = await quizService.updateQuiz(quiz_id, current_quiz as Quiz);
    if (new_quiz)
        res.json({ message: 'Quiz Created successful' });
    else
        res.json({ message: 'Quiz Already Exists' });
});