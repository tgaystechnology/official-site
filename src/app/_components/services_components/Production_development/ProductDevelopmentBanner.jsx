import React from 'react';
import Link from 'next/link';

const ProductDevelopmentBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section"
      style={{ 
        backgroundImage: 'url(/img/product-dev-banner.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>Product Development</h3>
          <p>
            Building a competitive advantage for your projects, ensuring they are 
            laser-focused on delivering exceptional results.
          </p>
          <Link href="/contact-us" className="first-tag">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDevelopmentBanner;