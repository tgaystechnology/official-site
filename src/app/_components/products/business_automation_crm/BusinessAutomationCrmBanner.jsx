import React from 'react';
import Link from 'next/link';

const BusinessAutomationCrmBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/business-crm-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Automate Your Business. Accelerate Your Growth.</h3>
          <p>
            Our all-in-one Business Automation CRM handles your repetitive tasks—from lead management to invoicing—so you can focus on what truly matters: closing deals and delighting customers.
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BusinessAutomationCrmBanner;