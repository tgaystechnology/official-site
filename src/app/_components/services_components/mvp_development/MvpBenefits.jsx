'use client'
import React from 'react';

const MvpBenefits = () => {
  const benefits = [
    {
      title: "Faster Market Entry",
      desc: "Launch your product within weeks instead of months to capture early market opportunities.",
      icon: "rocket-outline"
    },
    {
      title: "Reduced Development Costs",
      desc: "Control development expenses by focusing strictly on essential product functionality.",
      icon: "cash-outline"
    },
    {
      title: "Real User Validation",
      desc: "Make informed product decisions based on actual customer feedback and user behavior.",
      icon: "people-outline"
    },
    {
      title: "Better Investor Readiness",
      desc: "Demonstrate early market traction and validate demand before seeking significant funding.",
      icon: "briefcase-outline"
    },
    {
      title: "Lower Business Risk",
      desc: "Avoid investing heavily in unproven concepts by testing the market with minimum required capital.",
      icon: "shield-checkmark-outline"
    },
    {
      title: "Faster Product Iteration",
      desc: "Improve your product continuously and rapidly based on direct user insights and data.",
      icon: "sync-outline"
    },
    {
      title: "Scalable Product Foundation",
      desc: "Build a solid technical architecture designed to support future product growth and scale.",
      icon: "layers-outline"
    }
  ];

  return (
    <>
      <section className="staff-key-benefits" role="region" aria-labelledby="mvp-benefits-heading">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 id="mvp-benefits-heading" className="heading-title text-uppercase" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BENEFITS OF <span className="c-primary">MVP DEVELOPMENT</span>
          </h2>
          <p>Maximize your startup's potential with a strategic, cost-effective product launch.</p>
        </div>
      </section>

      <section className="key-list" role="region" aria-labelledby="mvp-advantages-heading">
        <div className="container">
          <div className="row justify-content-center">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div className="key-wrap" style={{ minHeight: "220px" }}>
                  <div className="key-icon" aria-hidden="true">
                    <span><ion-icon name={benefit.icon}></ion-icon></span>
                  </div>
                  <div className="key-text">
                    <h3 className="benefit-title" style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "15px" }}>{benefit.title}</h3>
                    <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{benefit.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="quick-answer-box p-4 text-center" style={{ background: "rgba(0, 131, 255, 0.03)", border: "1px solid rgba(0, 131, 255, 0.15)", borderRadius: "16px", marginTop: "45px", boxShadow: "rgba(0, 0, 0, 0.01) 0px 10px 20px" }}>
            <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0083FF", marginBottom: "8px" }}>Quick Answer: What Is MVP Development?</h4>
            <p className="mb-0 text-muted" style={{ fontSize: "1rem", color: "#444", fontStyle: "italic", lineHeight: "1.6" }}>
              MVP (Minimum Viable Product) development is the process of building a product with only the core features necessary to validate an idea, attract early users, and gather market feedback before investing in full-scale development. Businesses use MVPs to reduce risk, accelerate product launches, and make data-driven decisions based on actual user behavior.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MvpBenefits;