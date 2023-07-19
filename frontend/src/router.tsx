import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { Suspense } from 'react';
import Loader from './loading';
import TitleBar from './TitleBar';


const Contact = React.lazy(() => import('./components/contact/Contact'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const LandingPage = React.lazy(() => import('./components/Landing/LandingPage'));

const Login = React.lazy(() => import('./components/UserManagement/login'));
const CreateUser = React.lazy(() => import('./components/UserManagement/createUser'));
const ListUsers = React.lazy(() => import('./components/UserManagement/listUsers'));

const Admin = React.lazy(() => import('./components/otherpages/admin'));
const Prof = React.lazy(() => import('./components/otherpages/prof'));
const Stud = React.lazy(() => import('./components/otherpages/stud'));

const App = () => {
  return (<>
    <Router>
        <TitleBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createUser" element={<CreateUser />} />
            <Route path="/listUsers" element={<ListUsers />} />
            <Route path="/admin" element={<Admin />}/>
            <Route path="/prof" element={<Prof />}/>
            <Route path="/stud" element={<Stud />}/>

          </Routes>
        </Suspense>
    </Router>
  </>
  );
};

export default App;
