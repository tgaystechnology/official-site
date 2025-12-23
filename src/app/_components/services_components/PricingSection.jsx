import React from 'react';
import Link from 'next/link';

const PricingSection = ({
  subtitle = 'Innovating for a better tomorrow',
  title = 'Pricing Chart',
  backgroundImage = '/img/ai-shape-img.png',
  plans = [],
}) => {
  return (
    <section
      className="service-pricing bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="crumina-module crumina-heading align-center">
          <h6>{subtitle}</h6>
          <h2 className="heading-title">{title}</h2>
        </div>

        <div className="row">
          {plans.map((plan, index) => (
            <div className="col-12" key={index}>
              <div className={`pricing-box ${plan.highlight ? 'pricing-box-third' : ''}`}>
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-3">
                    <div className="princing-text">
                      <h3>{plan.name}</h3>
                      <p>{plan.description}</p>
                    </div>
                  </div>

                  <div className="col-12 col-md-12 col-lg-9">
                    <div className="princing-detail">
                      <div className="princing-detail-list">
                        <ul>
                          {plan.features.map((feature, i) => (
                            <li key={i}>
                              <span>
                                <ion-icon name={feature.icon || 'layers-outline'}></ion-icon>
                              </span>
                              {feature.label}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pricing-text">
                        <p>
                          {plan.price} <span>/month</span>
                        </p>
                      </div>

                      <div className="princing-button">
                        <Link href={plan.ctaLink || '/contact-us'} className="btn top_header_btn">
                          {plan.ctaText || 'Contact Us'}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;