import React from 'react';
import Link from 'next/link';

const SocialMediaBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/social-media-marketing.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Social Media Marketing</h3>
          <p>
            Stand out where it matters most. We help your brand get noticed, grow followers, 
            and drive results on Instagram, Facebook, LinkedIn, and more—with strategies that actually work.
          </p>
          <Link href="/contact-us" className="first-tag">
            Start Growing Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaBanner;