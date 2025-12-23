import React from 'react';
import Link from 'next/link';

const EducationBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/Education-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Education Management System</h3>
          <p>
            Empower your institution with our integrated solutions. We build digital learning environments that enhance student engagement, streamline administration, and deliver a world-class educational experience.
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EducationBanner;