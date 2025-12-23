'use client';
import React from 'react';

const EducationKeyBenefitsSection = ({ title, description, features }) => {
  return (
    <>
      <section className="staff-key-benefits">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 className="heading-title">{title}</h2>
          <p>{description}</p>
        </div>
      </section>

      <section className="key-list">
        <div className="container">
          <div className="row">
            {features.map((feature, index) => (
              <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
                <div className="key-wrap">
                  <div className="key-icon">
                    <span>
                      <ion-icon name={feature.icon}></ion-icon>
                    </span>
                  </div>
                  <div className="key-text">
                    <h5>{feature.title}</h5>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationKeyBenefitsSection;
