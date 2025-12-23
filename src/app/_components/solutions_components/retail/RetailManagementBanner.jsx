import React from 'react';
import Link from 'next/link';

const RetailManagementBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/Retail-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Retail Management System</h3>
          <p>
            Unify your entire operation with an all-in-one platform. Our system streamlines everything from sales and inventory to customer management, giving you the control to make smarter decisions and drive growth. 
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RetailManagementBanner;