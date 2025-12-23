import React from 'react';
import Link from 'next/link';

const M365DevelopmentBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/M365-Development-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>M365 Development</h3>
          <p>
            Transform your business with custom Microsoft 365 solutions that enhance collaboration, 
            streamline workflows, and boost productivity across your organization.
          </p>
          <Link href="/contact-us" className="first-tag">
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default M365DevelopmentBanner;