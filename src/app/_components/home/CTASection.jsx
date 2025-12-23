// CTA.jsx
import React from 'react';
import Link from 'next/link';

const CTASection = ({ title, description }) => {
  return (
    <section className="background-cover align-center medium-padding120 need-web hm-need-wab">
      <div className="bg-96">
        <div className="crumina-module crumina-heading">
          <h2 className="heading-title home-title need-website-web-app-sec">
            {title}
          </h2>
          {description && <p>{description}</p>}
        </div>
        <Link href="/contact-us" className="btn btn-primary let-talk-btn home-talk-btn">
          LET'S TALK
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
