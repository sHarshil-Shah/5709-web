import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TitleBar from './TitleBar';
import React, { Suspense } from 'react';
import Loader from './loading';

const Contact = React.lazy(() => import('./components/contact/Contact'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const AssignmentBase = React.lazy(() => import('./components/Assignment/AssignmentBase'));
const LandingPage = React.lazy(() => import('./components/Landing/LandingPage'));

const Login = React.lazy(() => import('./components/UserManagement/login'));
const CreateUser = React.lazy(() => import('./components/UserManagement/createUser'));
const ListUsers = React.lazy(() => import('./components/UserManagement/listUsers'));

const AdminDashboard = React.lazy(() => import('./components/Admin/adminDashboard'));
const ProfessorMapping = React.lazy(() => import('./components/Admin/professorMapping'));
const CourseManagement = React.lazy(() => import('./components/Admin/courseManagement'));
const PendingApproval = React.lazy(() => import('./components/Admin/pendingApproval'));
const UserInformationPage = React.lazy(() => import('./components/Admin/userInformationPage'));

const App = () => {
  return (<>
    <Router>
        <TitleBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/assignment" element={<AssignmentBase />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createUser" element={<CreateUser />} />
            <Route path="/listUsers" element={<ListUsers />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/mapping" element={<ProfessorMapping />} /> 
            <Route path="/admin/course-management" element={<CourseManagement />} /> 
            <Route path="/admin/pending-requests" element={<PendingApproval />} /> 
            <Route path="/admin/users" element={<UserInformationPage />} /> 
            
          </Routes>
        </Suspense>
    </Router>
  </>
  );
};

export default App;
