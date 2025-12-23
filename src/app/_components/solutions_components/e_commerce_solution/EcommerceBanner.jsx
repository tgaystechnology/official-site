'use client';
import React from 'react';
import Link from 'next/link';

const ecommerceBannerData = {
  title: 'E-Commerce System',
  description:
    "Launch and scale a powerful online store with our end-to-end e-commerce solutions. We build beautiful, high-performing websites and mobile apps designed to attract customers, streamline operations, and drive sales.",
  buttonText: 'Contact Us',
  buttonLink: '/contact-us', // Update this if your route differs
  backgroundImage: '/img/E-Commerce-solution-bg.png', // Make sure this file is in /public/img/
};

const EcommerceBanner = () => {
  const { title, description, buttonText, buttonLink, backgroundImage } = ecommerceBannerData;

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

export default EcommerceBanner;
