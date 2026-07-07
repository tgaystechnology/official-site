import React from 'react';
import Link from 'next/link';

const AIPoweredBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      role="banner"
      aria-labelledby="ai-services-heading"
      aria-label="Best AI Development Company"
      title="Best AI Development Company"
      style={{ 
        backgroundImage: 'url(/img/best-ai-development-company.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h1 id="ai-services-heading">AI Powered Services</h1>
          <p>
            Leverage the power of Artificial Intelligence to transform your business. 
            From automation to smart decision-making — we build solutions that deliver real results.
          </p>
          <Link href="/contact-us" className="first-tag" aria-label="Consult with TGAYS Technology AI Experts">
            Talk to Our AI Experts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIPoweredBanner;