import React from 'react';
import Link from 'next/link';

const ContactBanner = () => {
  return (
    <section
      className="testomonial-banner bg-cover hero-section"
      style={{
        backgroundImage: 'url(/img/contact-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Let's Talk Solutions</h3>
          <p>
            Let’s collaborate and create something extraordinary.
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
