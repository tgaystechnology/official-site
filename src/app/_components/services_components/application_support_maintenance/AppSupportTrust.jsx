'use client'
import React from 'react';

const AppSupportTrust = () => {
  const trustFactors = [
    {
      title: "Proven Technical Expertise",
      desc: "Work with experienced software engineers capable of supporting, optimizing, and securing modern enterprise technology ecosystems."
    },
    {
      title: "Dedicated Support Teams",
      desc: "Benefit from a single point of contact and dedicated technical resources who deeply understand your business operations and codebase."
    },
    {
      title: "Flexible Engagement Models",
      desc: "Choose the model that fits your budget: Dedicated Teams, Shared Support Teams, Monthly Retainers, Project-Based Support, or Enterprise SLA Models."
    },
    {
      title: "Transparent Communication",
      desc: "We provide regular reporting, incident post-mortems, and complete visibility into all ongoing support activities and maintenance tasks."
    },
    {
      title: "Global Support Coverage",
      desc: "Successfully supporting organizations across local and global markets, including India, USA, UK, Australia, and Dubai."
    }
  ];

  return (
    <section className="offshore-trust-section pt100 pb70" style={{ background: "#060913", color: "#fff" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.15)", color: "#0083FF", fontWeight: "bold", padding: "8px 16px", fontSize: "0.8rem", borderRadius: "30px", letterSpacing: "1px" }}>
            TGAYS Trust Standards
          </span>
          <h2 className="heading-title text-white" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHY BUSINESSES TRUST <span style={{ color: "#0083FF" }}>TGAYS TECHNOLOGY</span>
          </h2>
          <p className="text-white-50">High-performance engineering standards, scalable delivery frameworks, and proactive risk mitigation.</p>
        </div>

        <div className="row mt-5 justify-content-center">
          {trustFactors.map((factor, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 rounded-4 h-100" 
                style={{ 
                  background: "rgba(255, 255, 255, 0.02)", 
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px"
                }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{ color: "#0083FF", fontSize: "1.2rem", fontWeight: "bold" }}>0{index + 1}.</div>
                  <h3 className="h5 fw-bold mb-0 text-white" style={{ fontSize: "1.1rem" }}>{factor.title}</h3>
                </div>
                <p className="text-white-50 mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>{factor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppSupportTrust;
