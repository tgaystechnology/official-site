import React from 'react';
import Link from 'next/link';

const MobileAppBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/mobile-app-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Mobile App Development</h3>
          <p>
            From idea to launch, we build powerful, user-centric mobile apps that drive business growth, enhance customer engagement, and set you apart from the competition. Let's build the future of your business, together.
          </p>
          <Link href="/contact-us" className="first-tag">
            Schedule a Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileAppBanner;