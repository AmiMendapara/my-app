// src/App.js

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import CommunityPage from './CommunityPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route  path="/" element={<LandingPage/>} />
          <Route path="/community" element={<CommunityPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
