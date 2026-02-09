import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CompanyBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section" aria-labelledby="hero-heading"
      style={{ 
        backgroundImage: "url(/img/about-us-bg.png)",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h1 id="hero-heading">Your Vision, Engineered for Success.</h1>
          <p>
            We transform your ideas into high-performance web and mobile applications <br /> 
            that deliver tangible results and drive your business forward.(ROI).
          </p>
          <Link 
          href="/contact-us" 
          className="first-tag"
          aria-label="Contact TGAYS Technology for IT solutions"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CompanyBanner;