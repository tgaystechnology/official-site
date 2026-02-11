import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const IndustryBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      role="banner"
      aria-labelledby="industry-hero-heading" 
      style={{ 
        backgroundImage: "url(/img/IndustryWeServe.png)",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h1 id="industry-hero-heading">Industry We Serve</h1>
          <p>
            We empower industries with smart, scalable digital solutions—from AI automation to advanced software systems—designed to drive real growth, innovation, and efficiency across sectors
          </p>
          <Link href="/contact-us" className="first-tag" aria-label="Contact TGAYS Technology for industry-specific IT solutions">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustryBanner;