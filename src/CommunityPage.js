import React from 'react';
import './CommunityPage.css';

const CommunityPage = () => {
  return (
    <div className="community-page">
      <header className="community-header">
        <h1>Community</h1>
        <p>Connect with like-minded individuals.</p>
      </header>
      <section className="community-content">
        <div className="member">
          <h2>Member One</h2>
          <p> First member.</p>
        </div>
        <div className="member">
          <h2>Member Two</h2>
          <p> Second member.</p>
        </div>
        <div className="member">
          <h2>Member Three</h2>
          <p>Third member.</p>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
