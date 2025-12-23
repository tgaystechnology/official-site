import React from 'react';
import Image from 'next/image';

const WhyUsBanner = () => {
  return (
    <section 
      className="testomonial-banner bg-cover hero-section" 
      style={{ 
        backgroundImage: "url(/img/why-us-bg.png)",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>
            Why <i>TGAYS</i> <br />
            Technology?
          </h3>
        </div>
      </div>
    </section>
  );
};

export default WhyUsBanner;