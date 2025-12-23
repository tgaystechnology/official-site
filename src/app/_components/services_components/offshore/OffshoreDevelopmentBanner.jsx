import React from 'react';
import Link from 'next/link';

const OffshoreDevelopmentBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/offshope-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Offshore Development</h3>
          <p>
            Empowering your business with cost-effective, expert-driven software solutions from across the globe. 
            Scale faster, innovate smarter.
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OffshoreDevelopmentBanner;