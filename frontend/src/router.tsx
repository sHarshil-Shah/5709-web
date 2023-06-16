import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TitleBar from './TitleBar';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import AssignmentBase from './components/AssignmentBase';

const App = () => {
  return (
    <Router>
      <TitleBar />
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/assignment" element={<AssignmentBase />} />
      </Routes>
    </Router>
  );
};

export default App;
