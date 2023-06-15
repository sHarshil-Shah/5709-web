import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';

const Contact = lazy(() => import('./components/Contact'));
const FAQ = lazy(() => import('./components/FAQ'));

const AppRouter = () => {
  return (
    <>
      <Header />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
};

export default AppRouter;
