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
          <h3>Plans & Pricing</h3>
          <p>
            Transparent pricing for scalable solutions. Choose the plan that fits your business needs 
            and start your journey towards digital transformation today.
          </p>
          <Link href="/contact-us" className="first-tag">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;
