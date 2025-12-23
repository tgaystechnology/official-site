import React from 'react';
import Link from 'next/link';

const AIPoweredBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/ai-power-banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>AI Powered Services</h3>
          <p>
            Leverage the power of Artificial Intelligence to transform your business. 
            From automation to smart decision-making — we build solutions that deliver real results.
          </p>
          <Link href="/contact-us" className="first-tag">
            Talk to Our AI Experts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIPoweredBanner;