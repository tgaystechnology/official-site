'use client'
import React from 'react';

const MvpIndustries = () => {
  const industries = [
    {
      title: "Startup MVP Development",
      icon: "rocket-outline",
      desc: "Help entrepreneurs transform ideas into scalable products.",
      items: ["SaaS Platforms", "Marketplaces", "Mobile Apps", "Subscription Businesses"]
    },
    {
      title: "Healthcare MVP Development",
      icon: "medical-outline",
      desc: "Develop healthcare products with compliance, security, and scalability in mind.",
      items: ["Telemedicine Platforms", "Appointment Scheduling Apps", "Healthcare Portals", "Patient Management Systems"]
    },
    {
      title: "Fintech MVP Development",
      icon: "wallet-outline",
      desc: "Build innovative financial products rapidly with top-tier security standards.",
      items: ["Digital Wallets", "Lending Platforms", "Payment Systems", "Personal Finance Apps"]
    },
    {
      title: "E-commerce MVP Development",
      icon: "cart-outline",
      desc: "Launch online marketplaces and commerce platforms quickly to start generating revenue.",
      items: ["B2B Marketplaces", "D2C Stores", "Multi-Vendor Platforms", "Shopping Apps"]
    },
    {
      title: "Real Estate MVP Development",
      icon: "business-outline",
      desc: "Create digital property solutions to streamline the buying, selling, and renting process.",
      items: ["Listing Portals", "Property Management Software", "Agent Platforms", "Virtual Tour Applications"]
    }
  ];

  return (
    <section className="industries-section pt100 pb70 bg-white" role="region" aria-labelledby="mvp-industries-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="mvp-industries-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            INDUSTRIES <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text">Providing targeted MVP development solutions across major business verticals.</p>
        </div>

        <div className="row mt-5 justify-content-center">
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

export default MvpIndustries;
