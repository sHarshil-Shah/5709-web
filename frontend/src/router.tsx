import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {Suspense} from 'react';
import Loader from './loading';
import TitleBar from './TitleBar';
import {getLoggedInUserType} from "./service/LoginState";

const AdminDashboard = React.lazy(() => import('./components/Admin/adminDashboard'));
const CourseManagement = React.lazy(() => import('./components/Admin/courseManagement'));
const PendingApproval = React.lazy(() => import('./components/Admin/pendingApproval'));
const UserInformationPage = React.lazy(() => import('./components/Admin/userInformationPage'));
const ProfessorMapping = React.lazy(() => import('./components/Admin/professorMapping'));

const Contact = React.lazy(() => import('./components/contact/Contact'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const LandingPage = React.lazy(() => import('./components/Landing/LandingPage'));
const ErrorPage = React.lazy(() => import('./components/error/ErrorPage'));

const Login = React.lazy(() => import('./components/UserManagement/login'));
const CreateUser = React.lazy(() => import('./components/UserManagement/createUser'));
const ListUsers = React.lazy(() => import('./components/UserManagement/listUsers'));

const Prof = React.lazy(() => import('./components/otherpages/prof'));
const Stud = React.lazy(() => import('./components/otherpages/stud'));

// Quiz
const QuizList = React.lazy(() => import('./components/quiz/QuizList'));
const QuizPage = React.lazy(() => import('./components/quiz/QuizPage'));

const AlreadyLoggedInPage = React.lazy(() => import('./components/UserManagement/alreadyLoggedIn'));

const DashBoardRoute = React.lazy(() => import('./DynamicRoute/DashboardRoute'));
const ForgetPassword = React.lazy(() => import('./components/UserManagement/forgetPassword'));

const Announcement = React.lazy(() => import('./components/Announcement/Announcement'));
const Content = React.lazy(() => import('./components/Content/Content'));
const ProfSignUp = React.lazy(() => import('./components/UserManagement/SignUp'));
const Calender = React.lazy(() => import('./components/Calender/calender'));

const FinalAssignmentPage = React.lazy(() => import('./components/ProfAssignments/FinalAssignmentPage'))


const App = () => {
    return (<>
            <Router>
                <TitleBar/>
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/faq" element={<FAQ/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/createUser" element={<CreateUser/>}/>
                        <Route path="/listUsers" element={<ListUsers/>}/>
                        <Route path="/prof" element={<Prof/>}/>
                        {/* <Route path="/stud" element={<Stud/>}/> */}
                        <Route path="/dashboard" element={<DashBoardRoute/>}/>
                        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
                        <Route path="/quiz" element={getLoggedInUserType() === '' ? <QuizList/> : <ErrorPage/>}/>
                        <Route path="/quiz/:quizId" element={<QuizPage/>}/>
                        <Route path="/announcement" element={<Announcement/>}/>
                        <Route path="/content" element={<Content/>}/>
                        <Route path="/signup" element={<ProfSignUp/>}/>
                        <Route path="/calender" element={<Calender/>}/>
                        <Route path="/admin" element={<AdminDashboard/>}/>
                        <Route path="/admin/course-management" element={<CourseManagement/>}/>
                        <Route path="/admin/pending-requests" element={<PendingApproval/>}/>
                        <Route path="/admin/users" element={<UserInformationPage/>}/>
                        <Route path="/admin/mapping" element={<ProfessorMapping/>}/>
                        <Route path="/alreadyLoggedIn" element={<AlreadyLoggedInPage/>}/>
                        <Route path="/profAssignment" element={<FinalAssignmentPage/>}/>
                    </Routes>
                </Suspense>
            </Router>
        </>
    );
};

export default App;
