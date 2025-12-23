import React from 'react';
import Link from 'next/link';

const bannerData = {
  title: 'Tour & Travel System',
  description:
    "Elevate your agency with our all-in-one software. From managing complex itineraries to automating bookings and payments, our solutions streamline your operations and help you create unforgettable journeys.",
  buttonText: 'Start Growing Today',
  buttonLink: '/contact-us', // Make sure this route exists in your project
  backgroundImage: '/img/Tour-Travel-bg.png', // Place this inside /public/img/
};

const TourTravelBanner = () => {
  const { title, description, buttonText, buttonLink, backgroundImage } = bannerData;

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

export default TourTravelBanner;
