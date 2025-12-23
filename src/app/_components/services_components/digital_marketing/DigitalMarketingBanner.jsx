import React from 'react';
import Link from 'next/link';

const DigitalMarketingBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/digital-marketing.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Digital Marketing (SEO, SEM, PPC) Services</h3>
          <p>
            Go beyond off-the-shelf. Unlock smarter customer relationships with 
            CRM solutions built just for your business needs.
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingBanner;