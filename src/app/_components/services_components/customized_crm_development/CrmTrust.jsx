'use client'
import React from 'react';

const CrmTrust = () => {
  const trustFactors = [
    {
      title: "Experienced CRM Specialists",
      desc: "Our architects and developers bring years of practical experience delivering custom CRM solutions across medical, real estate, and finance fields."
    },
    {
      title: "Enterprise-Grade Security Standards",
      desc: "We enforce strict security procedures: custom NDA protections, secure clean-code guidelines, role-based cloud locks (RBAC), and full database encryption."
    },
    {
      title: "Flexible Engagement Models",
      desc: "Hire dedicated CRM software developers, request milestone fixed-cost quotes, or set up dynamic agile teams to scale as requirements evolve."
    },
    {
      title: "Modern Tech Stack Focus",
      desc: "We build using modern backend and database structures (Node.js, .NET, PostgreSQL, MongoDB) coupled with cloud servers (AWS, Azure, Google Cloud)."
    }
  ];

  return (
    <section className="offshore-trust-section pt100 pb70" style={{ background: "#060913", color: "#fff" }} role="region" aria-labelledby="crm-trust-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.15)", color: "#0083FF", fontWeight: "bold", padding: "8px 16px", fontSize: "0.8rem", borderRadius: "30px", letterSpacing: "1px" }}>
            TGAYS Trust Standards
          </span>
          <h2 id="crm-trust-heading" className="heading-title text-white" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHY BUSINESSES TRUST <span style={{ color: "#0083FF" }}>TGAYS TECHNOLOGY</span>
          </h2>
          <p className="text-white-50">Robust codebase quality, complete IP ownership, and direct communication channels with our CRM engineering team.</p>
        </div>

        <div className="row mt-5">
          {trustFactors.map((factor, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="p-4 rounded-4 h-100" 
                style={{ 
                  background: "rgba(255, 255, 255, 0.02)", 
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  borderRadius: "16px"
                }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3" style={{ color: "#0083FF", fontSize: "1.2rem", fontWeight: "bold" }}>0{index + 1}.</div>
                  <h3 className="h5 fw-bold mb-0 text-white" style={{ fontSize: "1.2rem" }}>{factor.title}</h3>
                </div>
                <p className="text-white-50 mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{factor.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrmTrust;
