import React from 'react';
import Link from 'next/link';

const ItStaffAugmentationBanner = () => {
  return (
    <section
      className="testomonial-banner bg-cover hero-section"
      style={{ backgroundImage: "url('/img/it-staff-banner.png')" }}
    >
      <div className="container">
        <div className="banner-text">
          <h3>IT Staff Augmentation</h3>
          <p>
            Empower your business with on-demand, top-tier IT talent. Fast,
            flexible, and fully aligned with your project goals.
          </p>
          <Link href="/contact-us" className="first-tag">
            Get Started Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ItStaffAugmentationBanner;
