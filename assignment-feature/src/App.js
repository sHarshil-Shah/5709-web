import './App.css';
import React from 'react';
import LandingComponent from './components/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingComponent />} />
        </Routes>
      </Router>
  );
}

export default App;