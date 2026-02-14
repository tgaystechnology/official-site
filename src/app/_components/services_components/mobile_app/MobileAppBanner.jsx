import React from 'react';
import Link from 'next/link';

const MobileAppBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      role="banner"
      aria-labelledby="mobile-app-development-heading"
      style={{ 
        backgroundImage: 'url(/img/mobile-app-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h1 id="mobile-app-development-heading">Mobile App Development</h1>
          <p>
            From idea to launch, we build powerful, user-centric mobile apps that drive business growth, enhance customer engagement, and set you apart from the competition. Let's build the future of your business, together.
          </p>
          <Link href="/contact-us" className="first-tag" aria-label="Get a free consultation for Mobile App Development services">
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileAppBanner;