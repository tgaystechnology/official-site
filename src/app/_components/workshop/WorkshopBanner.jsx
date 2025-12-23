import React from 'react';

const WorkshopBanner = () => {
  return (
    <section className="workshop-banner-section">
      <div className="container">
        <div className="workshop-title">
          <h1>Our Workshop</h1>
          <p>
            Shaping the next generation of tech leaders. Discover how our
            hands-on workshops empower young innovators with real-world
            skills in development and technology.
          </p>
        </div>

        <div className="workshop-banner-img">
          <img src="/img/workshop-bg.png" alt="Workshop Banner" />
        </div>
      </div>
    </section>
  );
};

export default WorkshopBanner;
