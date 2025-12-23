import React from 'react';
import Link from 'next/link';

const CallToAction = ({ heading, description, buttonText }) => {
  return (
    <section id="call-action" className="bg-cover free-call-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="call-action-text text-center">
              <h1 className="section-title">{heading}</h1>
              <p className="call-cta-contact">{description}</p>
              <Link href="/contact-us" className="btn btn-main">
                {buttonText || 'Consult Our Experts'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
