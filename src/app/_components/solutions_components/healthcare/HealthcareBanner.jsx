'use client';
import React from 'react';
import Link from 'next/link';

const healthcareBannerData = {
  title: 'Healthcare',
  description:
    'Transform patient care and streamline your operations with our secure, compliant, and user-friendly healthcare solutions. We build custom software that connects providers with patients and modernizes the healthcare experience.',
  buttonText: 'Contact Us',
  buttonLink: '/contact-us', // make sure this route exists
  backgroundImage: '/img/HealthHub-bg.png', // store in /public/img/
};

const HealthcareBanner = () => {
  const { title, description, buttonText, buttonLink, backgroundImage } = healthcareBannerData;

  return (
    <section
      className="testomonial-banner bg-cover hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <Link href={buttonLink} className="first-tag">
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HealthcareBanner;
