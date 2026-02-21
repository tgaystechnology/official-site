import React from 'react';
import Link from 'next/link';

const AppSupportBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      role="banner"
      aria-labelledby="application-support-hero-heading"
      style={{ 
        backgroundImage: 'url(/img/application-support-banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h1 id="application-support-hero-heading">Application Support & Maintenance</h1>
          <p>
            Optimizing performance, minimizing downtime, and enhancing user 
            experience across your digital ecosystem.
          </p>
          <Link href="/contact-us" className="first-tag" aria-label="Schedule a consultation for application support and maintenance services">
            Schedule a Support Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppSupportBanner;