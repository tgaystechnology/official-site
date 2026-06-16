'use client'
import React from 'react';

const ProductIndustries = () => {
  const industries = [
    {
      title: "Healthcare Solutions",
      icon: "medical-outline",
      desc: "Secure, HIPAA-compliant digital healthcare applications.",
      items: ["Telemedicine Apps", "EHR Systems", "Patient Portals", "Healthcare Analytics"]
    },
    {
      title: "Fintech Platforms",
      icon: "wallet-outline",
      desc: "Secure banking, payment processing, and investment platforms.",
      items: ["Digital Banking", "Payment Solutions", "Investment Apps", "Financial Analytics"]
    },
    {
      title: "E-Commerce Marketplaces",
      icon: "cart-outline",
      desc: "Robust shopping, subscription, and custom B2B/B2C systems.",
      items: ["Online Marketplaces", "B2B Commerce", "Subscription Portals", "CX Systems"]
    },
    {
      title: "Real Estate & CRM",
      icon: "business-outline",
      desc: "Modern listing portals and real estate management tools.",
      items: ["Property Management", "Listing Marketplaces", "Custom CRM Systems", "Virtual Viewings"]
    },
    {
      title: "EdTech & E-Learning",
      icon: "book-outline",
      desc: "Engaging learning management software and training environments.",
      items: ["Learning Management (LMS)", "E-learning Apps", "Assessment Portals"]
    },
    {
      title: "Logistics & Supply Chain",
      icon: "git-compare-outline",
      desc: "Intelligent warehousing, dispatching, and tracking software.",
      items: ["Fleet Management", "Warehouse Solutions", "Tracking Systems"]
    }
  ];

  return (
    <section className="industries-section pt100 pb70 bg-white" role="region" aria-labelledby="industries-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="industries-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            INDUSTRIES <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text">Deploying domain-specific technology expertise to launch market-ready software products globally.</p>
        </div>

        <div className="row mt-5">
          {industries.map((ind, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card h-100 p-4 border-0 shadow-sm"
                style={{
                  borderRadius: "16px",
                  background: "#fafafa",
                  border: "1px solid #eee",
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "rgba(0, 131, 255, 0.1) 0px 15px 30px";
                  e.currentTarget.style.borderColor = "#0083FF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "#eee";
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-wrap p-3 rounded-3 me-3" style={{ background: "rgba(0, 131, 255, 0.08)", color: "#0083FF", display: "flex", fontSize: "1.5rem" }}>
                    <ion-icon name={ind.icon}></ion-icon>
                  </div>
                  <h3 className="h5 fw-bold mb-0 text-dark" style={{ fontSize: "1.15rem" }}>{ind.title}</h3>
                </div>
                <p className="text-muted mb-3" style={{ fontSize: "0.88rem", lineHeight: "1.5" }}>{ind.desc}</p>
                <ul className="list-unstyled p-0 m-0 mt-auto">
                  {ind.items.map((item, idx) => (
                    <li key={idx} className="mb-2 text-dark d-flex align-items-center" style={{ fontSize: "0.85rem", fontWeight: "500" }}>
                      <span className="me-2 text-primary" style={{ fontSize: "0.9rem", color: "#0083FF" }}>●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductIndustries;
