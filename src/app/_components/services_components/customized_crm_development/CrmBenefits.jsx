'use client'
import React from 'react';

const CrmBenefits = () => {
  const benefits = [
    {
      title: "Increased Sales Performance",
      desc: "Automate lead nurturing and sales processes to improve conversion rates and pipeline speed.",
      icon: "trending-up-outline"
    },
    {
      title: "Better Customer Relationships",
      desc: "Deliver personalized customer experiences through centralized data management and historical logs.",
      icon: "people-outline"
    },
    {
      title: "Higher Team Productivity",
      desc: "Reduce repetitive administrative tasks through automation and streamlined team workflows.",
      icon: "checkmark-circle-outline"
    },
    {
      title: "Improved Decision-Making",
      desc: "Gain actionable business insights through real-time dashboards and business intelligence tools.",
      icon: "stats-chart-outline"
    },
    {
      title: "Reduced Operational Costs",
      desc: "Eliminate inefficiencies and reduce dependency on multiple disconnected software platforms.",
      icon: "cash-outline"
    },
    {
      title: "Greater Scalability",
      desc: "Adapt the CRM as your business evolves without costly platform migrations or user license shocks.",
      icon: "expand-outline"
    },
    {
      title: "Enhanced Data Security",
      desc: "Protect customer information with enterprise-grade security measures and compliance access controls.",
      icon: "shield-checkmark-outline"
    }
  ];

  return (
    <>
      <section className="staff-key-benefits" role="region" aria-labelledby="crm-benefits-heading">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 id="crm-benefits-heading" className="heading-title text-uppercase" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BENEFITS OF CUSTOM <span className="c-primary">CRM DEVELOPMENT SERVICES</span>
          </h2>
          <p>Empower your organization with software that mirrors your business model and scales on your terms.</p>
        </div>
      </section>

      <section className="key-list" role="region" aria-labelledby="crm-advantages-heading">
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
            <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0083FF", marginBottom: "8px" }}>Quick Answer: What Is Custom CRM Development?</h4>
            <p className="mb-0 text-muted" style={{ fontSize: "1rem", color: "#444", fontStyle: "italic", lineHeight: "1.6" }}>
              Custom CRM development involves building a customer relationship management system specifically designed around a company's unique processes, workflows, customer interactions, and business objectives. Unlike generic CRM software, a custom CRM provides greater flexibility, automation, scalability, and integration capabilities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CrmBenefits;
