'use client'
import React from 'react';

const AIIndustriesWeServe = () => {
  const industries = [
    {
      title: "Healthcare",
      desc: "AI-powered patient engagement, diagnostics support, and workflow automation.",
      icon: "heart-outline"
    },
    {
      title: "Real Estate",
      desc: "Property recommendations, lead management, and predictive market analysis.",
      icon: "business-outline"
    },
    {
      title: "E-commerce",
      desc: "Personalized recommendations, customer analytics, and intelligent support.",
      icon: "cart-outline"
    },
    {
      title: "Finance",
      desc: "Fraud detection, risk assessment, and automated financial workflows.",
      icon: "cash-outline"
    },
    {
      title: "Manufacturing",
      desc: "Predictive maintenance, quality control, and production optimization.",
      icon: "construct-outline"
    },
    {
      title: "Education",
      desc: "AI learning platforms and intelligent student engagement solutions.",
      icon: "book-outline"
    },
    {
      title: "Logistics & Transportation",
      desc: "Route optimization, forecasting, and supply chain intelligence.",
      icon: "boat-outline"
    },
    {
      title: "Retail",
      desc: "Inventory forecasting, customer behavior analysis, and automation.",
      icon: "pricetag-outline"
    }
  ];

  return (
    <section className="industries-serve-section pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            INDUSTRIES <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text">Delivering specialized AI-powered solutions across key business sectors.</p>
        </div>

        <div className="row">
          {industries.map((ind, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 mb-4">
              <div className="industry-card p-4 h-100 rounded-4 shadow-sm text-center"
                style={{
                  borderRadius: "16px",
                  background: "#fafafa",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease"
                }}>
                <div className="industry-icon mb-3 d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(0, 131, 255, 0.1)",
                    color: "#0083FF"
                  }}>
                  <ion-icon name={ind.icon} style={{ fontSize: "1.8rem" }}></ion-icon>
                </div>
                <h3 className="h5 fw-bold text-dark mb-3" style={{ fontSize: "1.1rem" }}>{ind.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.6" }}>
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIIndustriesWeServe;
