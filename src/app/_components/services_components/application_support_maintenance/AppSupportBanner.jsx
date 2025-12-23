import React from 'react';
import Link from 'next/link';

const AppSupportBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/application-support-banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Application Support & Maintenance</h3>
          <p>
            Optimizing performance, minimizing downtime, and enhancing user 
            experience across your digital ecosystem.
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AppSupportBanner;