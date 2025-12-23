import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CareerBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/career-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Join Our Mission to Innovate</h3>
          <p>
            At TGAYS Technology, we believe our team is our greatest asset. We are always open to connecting with talented professionals who are passionate about building the future of tech. Explore our current opportunities or reach out to us for what's next.
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerBanner;