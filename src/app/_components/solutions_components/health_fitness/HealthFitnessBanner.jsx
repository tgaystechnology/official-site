'use client';
import React from 'react';
import Link from 'next/link';

const healthFitnessBannerData = {
  title: 'Health & Fitness',
  description:
    'Power your fitness business with our all-in-one digital solutions. From managing memberships to engaging your community with custom workout apps, we provide the technology you need to grow your brand and motivate your members.',
  buttonText: 'Contact Us',
  buttonLink: '/contact-us', // Ensure this page exists in your routes
  backgroundImage: '/img/Health-Fitness-bg.png', // Store this in /public/img/
};

const HealthFitnessBanner = () => {
  const { title, description, buttonText, buttonLink, backgroundImage } = healthFitnessBannerData;

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

export default HealthFitnessBanner;
