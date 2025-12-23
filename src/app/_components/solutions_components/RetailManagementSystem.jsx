import React from 'react';

const RetailManagementSystem = ({ title, subtitle, features }) => {
  return (
    <section className="retail-section">
      <div className="container">
        <div className="crumina-module crumina-heading align-center">
          <h2 className="heading-title">
            <span className="c-primary">{title.primary}</span> {title.secondary}
          </h2>
          <p>{subtitle}</p>
        </div>

        <div className="retail-page">
          {features.map((feature) => (
            <div key={feature.id} className="retail-box">
              <div className="icon">
                <ion-icon name={feature.icon}></ion-icon>
              </div>
              <div className="card-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RetailManagementSystem;
