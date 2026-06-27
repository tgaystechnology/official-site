'use client'
import React from 'react';

const EcommerceBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Increase Revenue",
      description: "Optimized shopping experiences help increase conversions and average order value.",
      icon: "cash-outline"
    },
    {
      id: 2,
      title: "Improve Operational Efficiency",
      description: "Automate manual tasks and streamline workflows so staff can focus on growth.",
      icon: "flash-outline"
    },
    {
      id: 3,
      title: "Better Customer Retention",
      description: "Personalized experiences encourage repeat purchases and brand loyalty.",
      icon: "heart-outline"
    },
    {
      id: 4,
      title: "Real-Time Business Insights",
      description: "Make smarter decisions with advanced analytics and reporting dashboards.",
      icon: "bar-chart-outline"
    },
    {
      id: 5,
      title: "Expand Globally",
      description: "Support multiple currencies, languages, and international payment gateways.",
      icon: "earth-outline"
    },
    {
      id: 6,
      title: "Future-Proof Your Business",
      description: "Scale confidently with modern cloud-based infrastructure and technology.",
      icon: "rocket-outline"
    }
  ];

  return (
    <>
      <section className="staff-key-benefits" role="region" aria-labelledby="ecommerce-benefits-heading">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 id="ecommerce-benefits-heading" className="heading-title">
            BENEFITS OF OUR <span className="c-primary">E-COMMERCE SYSTEM</span>
          </h2>
          <p>Discover how our custom eCommerce technology solutions can transform your sales and operations.</p>
        </div>
      </section>

      <section className="key-list" role="region" aria-labelledby="ecommerce-advantages-heading">
        <div className="container">
          <div className="row">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div className="key-wrap" style={{ minHeight: "220px" }}>
                  <div className="key-icon" aria-hidden="true">
                    <span><ion-icon name={benefit.icon}></ion-icon></span>
                  </div>
                  <div className="key-text">
                    <h3 className="benefit-title" style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "15px" }}>{benefit.title}</h3>
                    <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="quick-answer-box mt-5 p-4 text-center" style={{ background: "rgba(0, 131, 255, 0.03)", border: "1px solid rgba(0, 131, 255, 0.15)", borderRadius: "16px", marginTop: "45px", boxShadow: "rgba(0, 0, 0, 0.01) 0px 10px 20px" }}>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0083FF", marginBottom: "8px" }}>Quick Answer: Why Do Businesses Need Ecommerce Software?</h4>
            <p className="mb-0" style={{ fontSize: "1rem", color: "#444", fontStyle: "italic", lineHeight: "1.6" }}>
              Ecommerce software helps businesses automate operations, improve customer experiences, increase sales, and scale efficiently across multiple channels and geographies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcommerceBenefits;
