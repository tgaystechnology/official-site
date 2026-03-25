import React from 'react';
import Link from 'next/link';

const PricingBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/pricing-component-banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Our Products</h3>
          <p>
            Explore Our Powerful Ready-To-Use Products Built To Streamline Your Operations and Automate them.
          </p>
          <Link href="/contact-us" className="first-tag">
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;
