// src/CommunityPage.js

import React from 'react';
import './CommunityPage.css';

const CommunityPage = () => {
  return (
    <div className="community-page">
      <header className="community-header">
        <h1>Community</h1>
        <p>Connect with us.</p>
      </header>
      <section className="community-content">
        <div className="member">
          <h2>Member 1</h2>
        </div>
        <div className="member">
          <h2>Member 2</h2>
        </div>
        <div className="member">
          <h2>Member 3</h2>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
