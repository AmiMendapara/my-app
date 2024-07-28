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
        <h1>Landing Page...</h1>
        <p>Join us and be part of something great!</p>
        <button className="join-button" onClick={handleJoinNow}>Join Now</button>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Feature (1)</h2>
        </div>
        <div className="feature">
          <h2>Feature (2)</h2>
        </div>
        <div className="feature">
          <h2>Feature (3)</h2>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
