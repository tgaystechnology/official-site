'use client'
import React from 'react';

const WebDevBenefits = () => {
  const benefits = [
    {
      title: "Improve Online Visibility",
      desc: "SEO-optimized websites help attract qualified traffic and improve rankings."
    },
    {
      title: "Increase Lead Generation",
      desc: "Conversion-focused design encourages users to take action."
    },
    {
      title: "Deliver Better User Experiences",
      desc: "Fast, responsive, and intuitive interfaces increase customer satisfaction."
    },
    {
      title: "Enhance Brand Credibility",
      desc: "Professional websites build trust and strengthen your online reputation."
    },
    {
      title: "Reduce Operational Inefficiencies",
      desc: "Custom web applications automate workflows and improve productivity."
    },
    {
      title: "Future-Proof Your Business",
      desc: "Scalable technologies ensure long-term growth and adaptability."
    }
  ];

  return (
    <section className="web-benefits pt100 pb100 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BENEFITS OF HIRING THE BEST <span className="c-primary">WEB DEVELOPMENT COMPANY IN INDIA</span>
          </h2>
          <p className="slider-content-text">Unlock long-term business value with customized, performance-driven web engineering.</p>
        </div>

        <div className="row mt-5">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 h-100 rounded-4 shadow-sm"
                style={{
                  borderRadius: "16px",
                  background: "#fafafa",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease",
                  boxShadow: "rgba(0, 0, 0, 0.02) 0px 8px 24px"
                }}>
                <div className="d-flex align-items-center mb-3">
                  <span className="me-2 text-primary" style={{ fontSize: "1.4rem", fontWeight: "bold" }}>✔</span>
                  <h3 className="h6 fw-bold text-dark mb-0" style={{ fontSize: "1.1rem" }}>{benefit.title}</h3>
                </div>
                <p className="text-muted mb-0" style={{ fontSize: "0.92rem", lineHeight: "1.6" }}>
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Answer Callout */}
        <div className="mt-5 p-4 rounded-4 text-start" 
          style={{ 
            background: "rgba(0, 131, 255, 0.04)", 
            borderLeft: "5px solid #0083ff", 
            borderRadius: "12px" 
          }}>
          <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: "1.15rem" }}>
            <span style={{ marginRight: "8px" }}>💡</span> Quick Answer: Why Invest in Professional Web Development?
          </h4>
          <p className="mb-0 text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
            Professional web development helps businesses establish credibility, improve customer experiences, generate qualified leads, increase sales, and create a strong digital foundation for sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDevBenefits;
