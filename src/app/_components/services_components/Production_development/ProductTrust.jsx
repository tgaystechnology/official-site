'use client'
import React from 'react';

const ProductTrust = () => {
  const trustFactors = [
    {
      title: "Proven Technical Expertise",
      desc: "Specialized engineering teams delivering modern SaaS, Web, Mobile, and Cloud solutions using React, Node.js, Python, Flutter, AWS, Azure, and OpenAI API integrations."
    },
    {
      title: "Global Delivery Capability",
      desc: "Proudly supporting clients and partners across the USA, UK, India, and Australia. Designed for onshore coordination and high-efficiency offshore engineering."
    },
    {
      title: "Transparent Communication",
      desc: "Stay fully in the loop with dedicated Project Managers, weekly sprint reviews, live staging links, Slack updates, and collaborative Jira boards."
    },
    {
      title: "Flexible Engagement Models",
      desc: "Adapt engagement models to your budget. Choose from Dedicated Teams, Fixed Cost projects, Time & Material, or joint Product Partnership Models."
    }
  ];

  return (
    <section className="product-trust-section pt100 pb70" style={{ background: "#060913", color: "#fff" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.15)", color: "#0083FF", fontWeight: "bold", padding: "8px 16px", fontSize: "0.8rem", borderRadius: "30px", letterSpacing: "1px" }}>
            TGAYS Trust Standards
          </span>
          <h2 className="heading-title text-white" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHY BUSINESSES TRUST <span style={{ color: "#0083FF" }}>TGAYS TECHNOLOGY</span>
          </h2>
          <p className="text-white-50">High-performance engineering standards, scalable delivery frameworks, and full intellectual property protection.</p>
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

export default ProductTrust;
