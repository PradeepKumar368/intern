// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.css'; // Update the path accordingly
import LandingPage from './LandingPage';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div className="header">
        <div className="header-left">
          <div className="welcome-message">Welcome to EgyanamTech!</div>
        </div>
        <div className="header-right">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
