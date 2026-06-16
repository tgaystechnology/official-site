'use client'
import React from 'react';

const ProductBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Faster Time-to-Market",
      description: "Launch products up to 40% faster through agile delivery practices and structured timelines.",
      icon: "time-outline"
    },
    {
      id: 2,
      title: "Lower Development Risk",
      description: "Validate ideas before investing heavily in full-scale development, saving budget and timing.",
      icon: "git-branch-outline"
    },
    {
      id: 3,
      title: "Higher User Adoption",
      description: "User-centric design focus ensures high customer engagement, satisfaction, and long-term retention.",
      icon: "people-outline"
    },
    {
      id: 4,
      title: "Improved ROI",
      description: "Strategic product decisions and validated MVP loops maximize direct long-term business value.",
      icon: "trending-up-outline"
    },
    {
      id: 5,
      title: "Scalable Architecture",
      description: "Build cloud-native, future-ready platforms designed to handle traffic spikes and enterprise growth.",
      icon: "expand-outline"
    },
    {
      id: 6,
      title: "Competitive Advantage",
      description: "Leverage AI models, customized process automations, and modern frameworks to outpace competitors.",
      icon: "shield-checkmark-outline"
    }
  ];

  return (
    <>
      <section className="staff-key-benefits" role="region" aria-labelledby="product-benefits-heading">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 id="product-benefits-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BENEFITS OF CHOOSING OUR <span className="c-primary">PRODUCT DEVELOPMENT</span> COMPANY
          </h2>
          <p>Deliver digital solutions that drive user adoption, maximize ROI, and grow with your target market.</p>
        </div>
      </section>

      <section className="key-list" role="region" aria-labelledby="product-advantages-heading">
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
            <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0083FF", marginBottom: "8px" }}>Quick Answer: What is a Product Development Company?</h4>
            <p className="mb-0 text-muted" style={{ fontSize: "1rem", color: "#444", fontStyle: "italic", lineHeight: "1.6" }}>
              A product development company helps businesses transform ideas into market-ready products through research, user-centered design, prototyping, robust engineering, and continuous deployment optimizations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductBenefits;
