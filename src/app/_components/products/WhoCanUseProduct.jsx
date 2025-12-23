'use client';
import React from 'react';

const WhoCanUseProduct = ({ title, description, items }) => {
  return (
    <div className="education-choose-us bussiness-crm-industri gym-erp-wrap">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 pl-60 md-pl-15">
            <div className="crumina-module crumina-heading text-center">
              <h2 className="heading-title">
                {title} {/* Accept full JSX */}
              </h2>
              <p>{description}</p>
            </div>
          </div>

          {items.map((item, index) => (
            <div key={index} className="col-lg-6 pl-60 md-pl-15">
              <div className="services-part mb-20">
                <div className="services-icon">
                  <ion-icon name={item.icon}></ion-icon>
                </div>
                <div className="services-text">
                  <h2 className="title">{item.title}</h2>
                  <p className="services-txt">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoCanUseProduct;
