import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CompanyBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section" 
      style={{ 
        backgroundImage: "url(/img/about-us-bg.png)",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Your Vision, Engineered for Success.</h3>
          <p>
            We transform your ideas into high-performance web and mobile applications <br /> 
            that deliver tangible results and drive your business forward.(ROI).
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanyBanner;