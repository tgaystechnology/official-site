import React from 'react';
import Link from 'next/link';

const CrmDevelopmentBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/customized-banner_img.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Customized CRM Development Services</h3>
          <p>
            Stop forcing your business into a generic CRM. We build custom solutions that adapt to your workflow, automate processes, and unlock real growth.
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CrmDevelopmentBanner;