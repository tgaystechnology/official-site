import React from 'react';
import Link from 'next/link';

const CaseStudyBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/case-study-banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>See Our Solutions in Action</h3>
          <p>
            We turn complex challenges into real-world success. Dive into our case studies to see the results and impact we deliver for our clients.
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyBanner;