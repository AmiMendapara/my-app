// src/LandingPage.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    navigate('/community');
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Landing Page</h1>
        <p>Join us our community and be part of something great!</p>
        <button className="join-button" onClick={handleJoinNow}>Join Now</button>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Feature One</h2>
          <p>It's a Feature one.</p>
        </div>
        <div className="feature">
          <h2>Feature Two</h2>
          <p>It's a Feature two.</p>
        </div>
        <div className="feature">
          <h2>Feature Three</h2>
          <p>It's a Feature three.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
