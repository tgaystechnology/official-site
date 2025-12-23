import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const IndustryBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section" 
      style={{ 
        backgroundImage: "url(/img/IndustryWeServe.png)",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Industry We Serve</h3>
          <p>
            We empower industries with smart, scalable digital solutions—from AI automation to advanced software systems—designed to drive real growth, innovation, and efficiency across sectors
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustryBanner;