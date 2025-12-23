import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AchievementBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/achievment-banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Our Achievement</h3>
          <p>We believe in turning ideas into impactful realities. Here are some of the milestones and success stories from our journey.</p>
        <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AchievementBanner;