'use client';
import React from 'react';
import Link from 'next/link';

const gymErpBannerData = {
  title: 'Gym ERP',
  description:
    'Effortlessly manage members, automate payments, and gain powerful business insights with our all-in-one Gym ERP solution. Stop juggling spreadsheets and start growing your fitness business.',
  buttonText: 'Contact Us',
  buttonLink: '/contact-us', // Ensure this route exists
  backgroundImage: '/img/gym-erp-bg.png', // Image must be placed in /public/img/
};

const GymErpBanner = () => {
  const { title, description, buttonText, buttonLink, backgroundImage } = gymErpBannerData;

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

export default GymErpBanner;
