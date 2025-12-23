import React from 'react';
import Link from 'next/link';

const MvpDevelopmentBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/mvp-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>MVP Development</h3>
          <p>
            Validate fast, grow smart — we build Minimum Viable Products that prove your idea in record time.
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MvpDevelopmentBanner;