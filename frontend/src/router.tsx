import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TitleBar from './TitleBar';
import React, { Suspense } from 'react';
import Loader from './loading';

const Contact = React.lazy(() => import('./components/contact/Contact'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const AssignmentBase = React.lazy(() => import('./components/AssignmentBase'));
const LandingPage = React.lazy(() => import('./components/Landing/LandingPage'));

const App = () => {
  return (
    <Router>
      <TitleBar />
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/assignment" element={<AssignmentBase />} />
        </Routes>
      </Suspense>

    </Router>
  );
};

export default App;
