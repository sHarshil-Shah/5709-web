import express, { Request, Response } from 'express';
import { loginRouter } from './controller/users/login';
import { registerRouter } from './controller/users/register';
import cors from 'cors';
import { listUsersRouter } from './controller/users/listUsers';
import { deleteUserRouter } from './controller/users/deleteUser';
import { getUserByIdRouter } from "./controller/users/getUserByEmail";
import { forgetPasswordRouter } from "./controller/users/forgetPassword";
import { getAnnouncementsRouter } from './controller/announcement/getAnnouncements';
import { createAnnouncementRouter } from './controller/announcement/createAnnouncements';
import { createContentRouter } from './controller/content/createContent';
import { updateContentRouter } from './controller/content/updateContent';
import { readContentRouter } from './controller/content/getContent';
import { deleteContentRouter } from './controller/content/deleteContent';
import EmailRouter from './controller/users/forgetPasswordEmail';
import { readCoursesRouter } from './controller/courses/getCourseList';
import { updateUserRouter } from "./controller/users/updateUser";
import { createCourseRouter } from './controller/courses/addCourse';
import { deleteCourseRouter } from './controller/courses/deleteCourse';
import { updateCourseRouter } from './controller/courses/updateCourse';

// Assignment Management
import { createAssignmentRouter } from './controller/profassignments/createAssignment';
import { listAssignmentsRouter } from './controller/profassignments/listAssignments';
import { deleteAssignmentRouter } from './controller/profassignments/deleteAssignment';
import { updateAssignmentRouter } from './controller/profassignments/updateAssignment';

// Quiz Management
import { createQuizRouter } from './controller/quiz/createQuiz';
import { listQuizzesRouter } from './controller/quiz/listQuiz';
import { updateQuizRouter } from './controller/quiz/updateQuiz';
import { deleteQuizRouter } from './controller/quiz/deleteQuiz';
import { getStudentQuizRouter } from './controller/quiz/getStudentQuiz';
import { submitQuizRouter } from './controller/quiz/submitQuiz';

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
app.use('/announcements', getAnnouncementsRouter)
app.use('/announcements', createAnnouncementRouter)
app.use('/create-content', createContentRouter)
app.use('/update-content', updateContentRouter)
app.use('/get-content', readContentRouter)
app.use('/delete-content', deleteContentRouter)
app.use('/send-email', EmailRouter);
app.use('/updateUser', updateUserRouter);
//course
app.use('/get-courses', readCoursesRouter)
app.use('/add-course', createCourseRouter)
app.use('/delete-course', deleteCourseRouter)
app.use('/update-course', updateCourseRouter)

// Quiz routers

app.use('/createQuiz', createQuizRouter);
app.use('/listQuiz', listQuizzesRouter);
app.use('/updateQuiz', updateQuizRouter);
app.use('/deleteQuiz', deleteQuizRouter);
app.use('/getStudentQuiz', getStudentQuizRouter);
app.use('/submitQuiz', submitQuizRouter);

// Assignment routers
app.use('/createAssignment', createAssignmentRouter);
app.use('/getAssignments', listAssignmentsRouter);
app.use('/deleteAssignment', deleteAssignmentRouter);
app.use('/updateAssignment', updateAssignmentRouter);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

