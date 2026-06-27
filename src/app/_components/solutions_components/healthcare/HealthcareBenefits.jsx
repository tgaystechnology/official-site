'use client'
import React from 'react';

const HealthcareBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Improve Patient Care",
      description: "Deliver personalized and efficient healthcare experiences through unified digital platforms.",
      icon: "heart-outline"
    },
    {
      id: 2,
      title: "Enhance Operational Efficiency",
      description: "Automate repetitive administrative tasks and workflows so staff can focus on care delivery.",
      icon: "flash-outline"
    },
    {
      id: 3,
      title: "Reduce Costs",
      description: "Minimize manual processes, prevent billing errors, and heavily optimize resource utilization.",
      icon: "trending-down-outline"
    },
    {
      id: 4,
      title: "Increase Revenue",
      description: "Improve appointment management, increase billing accuracy, and boost overall patient retention.",
      icon: "cash-outline"
    },
    {
      id: 5,
      title: "Data-Driven Decisions",
      description: "Leverage advanced analytics and real-time reporting to significantly improve healthcare outcomes.",
      icon: "bar-chart-outline"
    },
    {
      id: 6,
      title: "Future-Proof Operations",
      description: "Adopt highly scalable, cloud-based technologies that support continuous innovation and growth.",
      icon: "rocket-outline"
    }
  ];

  return (
    <>
      <section className="staff-key-benefits" role="region" aria-labelledby="healthcare-benefits-heading">
        <div className="crumina-module crumina-heading hm-easy_title text-center">
          <h2 id="healthcare-benefits-heading" className="heading-title">
            BENEFITS OF HEALTHCARE <span className="c-primary">SOFTWARE DEVELOPMENT</span>
          </h2>
          <p>Discover how custom healthcare technology solutions can transform your operational efficiency and patient outcomes.</p>
        </div>
      </section>

      <section className="key-list" role="region" aria-labelledby="healthcare-advantages-heading">
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
            <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0083FF", marginBottom: "8px" }}>Quick Answer: Why Upgrade Your Healthcare Tech?</h4>
            <p className="mb-0" style={{ fontSize: "1rem", color: "#444", fontStyle: "italic", lineHeight: "1.6" }}>
              A modern Healthcare System eliminates manual errors, drastically improves data security and compliance, and provides your patients with the rapid, self-service digital experience they expect.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthcareBenefits;
