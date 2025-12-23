import React from 'react';
import Link from 'next/link';

const TestimonialBanner = () => {
  return (
    <section
      className="testomonial-banner bg-cover hero-section"
      style={{
        backgroundImage: 'url(/img/testimonial-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>The Partnerships We've Built</h3>
          <p>
            Trust is earned. Read the honest feedback from the clients and partners who make our work possible.
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialBanner;
