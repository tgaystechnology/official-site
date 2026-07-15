'use client'
import React from 'react';

const MvpTrust = () => {
  const trustFactors = [
    {
      title: "Product Strategy Expertise",
      desc: "We don't just write code; we combine deep business thinking with technical excellence to build MVPs that achieve product-market fit."
    },
    {
      title: "Modern Technology Stack",
      desc: "We utilize cutting-edge frontend, backend, mobile, and cloud infrastructure technologies (like React, Node.js, AWS) for maximum scalability and performance."
    },
    {
      title: "Dedicated Product Teams",
      desc: "Gain access to our elite roster of experienced developers, UI/UX designers, QA engineers, business analysts, and seasoned project managers."
    },
    {
      title: "Flexible Engagement Models",
      desc: "Whether you need a dedicated development team for long-term growth, a fixed-cost model for a defined scope, or an agile team for rapid iterations, we adapt to you."
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
          <p className="text-white-50">Proven strategies, cutting-edge technology, and unparalleled execution.</p>
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

export default MvpTrust;
