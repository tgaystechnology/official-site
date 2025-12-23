import React from 'react';
import Image from 'next/image';

const ServicePartners = () => {
  const partners = [
    { id: 1, logo: "/img/godaddy.png", alt: "GoDaddy" },
    { id: 2, logo: "/img/Milesweb.png", alt: "Milesweb" },
    { id: 3, logo: "/img/AWS.png", alt: "AWS" },
    { id: 4, logo: "/img/GSuite.png", alt: "GSuite" },
    { id: 5, logo: "/img/Google.png", alt: "Google" },
    { id: 6, logo: "/img/facebook_logo.png", alt: "Facebook" },
    { id: 7, logo: "/img/hostinger-logo.png", alt: "Hostinger" }
  ];

  return (
    <section className="service-partner-box">
      <div className="container">
        <div className="our-brand-logo">
          <div className="crumina-module crumina-heading">
            <h2 className="heading-title">
              Our Service <span className="c-primary">Partners</span>
            </h2>
          </div>
          
          <div className="service-partner-logo">
            <div className="row">
              {partners.map((partner) => (
                <div key={partner.id} className="col-lg-2 col-md-4 col-12 col-sm-6 col-xs-2">
                  <figure>
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      width={150}  // Set appropriate width
                      height={60} // Set appropriate height
                      className="partner-logo"
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePartners;