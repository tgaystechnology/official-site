import React from 'react';
import Link from 'next/link';

const DigitalMarketingBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      role="banner"
      aria-labelledby="digital-marketing-hero-heading"
      aria-label="digital marketing company in India"
      title="digital marketing company in India"
      style={{ 
        backgroundImage: 'url(/img/digital-marketing-company-in-india.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h1 id="digital-marketing-hero-heading">Digital Marketing (SEO, SEM, PPC) Services</h1>
          <p>
            Go beyond off-the-shelf. Unlock smarter customer relationships with 
            CRM solutions built just for your business needs.
          </p>
          <Link href="/contact-us" className="first-tag" aria-label="Schedule a consultation for digital marketing services including SEO, SEM, and PPC">
            Schedule a Marketing Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingBanner;