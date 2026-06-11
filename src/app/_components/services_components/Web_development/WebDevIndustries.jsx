'use client'
import React from 'react';

const WebDevIndustries = () => {
  const industries = [
    {
      icon: "heart-outline",
      title: "Healthcare",
      desc: "Patient portals, telemedicine platforms, healthcare management systems, and HIPAA-compliant applications."
    },
    {
      icon: "home-outline",
      title: "Real Estate",
      desc: "Property portals, CRM systems, listing platforms, and lead generation websites."
    },
    {
      icon: "cart-outline",
      title: "E-commerce",
      desc: "Online stores, marketplaces, product management systems, and customer engagement platforms."
    },
    {
      icon: "cash-outline",
      title: "Finance",
      desc: "Secure financial applications, customer portals, and payment integration systems."
    },
    {
      icon: "settings-outline",
      title: "Manufacturing",
      desc: "ERP platforms, inventory management systems, and process automation solutions."
    },
    {
      icon: "book-outline",
      title: "Education",
      desc: "Learning management systems, student portals, and online education platforms."
    },
    {
      icon: "bus-outline",
      title: "Logistics & Transportation",
      desc: "Fleet management systems, tracking solutions, and logistics automation platforms."
    },
    {
      icon: "rocket-outline",
      title: "Startups & SaaS Companies",
      desc: "MVP development, SaaS platforms, customer portals, and product engineering services."
    }
  ];

  return (
    <section className="web-industries pt100 pb70" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            INDUSTRIES <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text">Deploying customized web solutions across specialized industry verticals</p>
        </div>

        <div className="row mt-5">
          {industries.map((ind, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 mb-4">
              <div className="industry-card p-4 h-100 rounded-4 shadow-sm"
                style={{
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease",
                  boxShadow: "rgba(0, 0, 0, 0.02) 0px 8px 24px"
                }}>
                <div className="icon-box mb-3 d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    background: "rgba(0, 131, 255, 0.1)",
                    color: "#0083FF"
                  }}>
                  <ion-icon name={ind.icon} style={{ fontSize: "1.4rem" }}></ion-icon>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2" style={{ fontSize: "1.05rem" }}>{ind.title}</h3>
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

export default WebDevIndustries;
