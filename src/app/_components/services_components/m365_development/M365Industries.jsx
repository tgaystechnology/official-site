'use client'
import React from 'react';

const M365Industries = () => {
  const industries = [
    {
      title: "Healthcare",
      items: ["Patient Management Systems", "Compliance Solutions", "Healthcare Analytics"],
      icon: "heart-outline"
    },
    {
      title: "Real Estate",
      items: ["Property Management Applications", "Lead Management Systems", "Reporting Dashboards"],
      icon: "business-outline"
    },
    {
      title: "E-commerce",
      items: ["Inventory Automation", "Sales Analytics", "Customer Management"],
      icon: "cart-outline"
    },
    {
      title: "Financial Services",
      items: ["Approval Workflows", "Compliance Monitoring", "Financial Reporting"],
      icon: "cash-outline"
    },
    {
      title: "Manufacturing",
      items: ["Production Tracking", "Supply Chain Automation", "Quality Management"],
      icon: "construct-outline"
    },
    {
      title: "Education",
      items: ["Student Portals", "Learning Workflows", "Administration Automation"],
      icon: "book-outline"
    },
    {
      title: "Professional Services",
      items: ["Project Management", "Resource Planning", "Knowledge Management"],
      icon: "briefcase-outline"
    }
  ];

  return (
    <section className="industries-serve-section pt100 pb70" style={{ background: "#fff" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            INDUSTRIES <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text">Deploying specialized Microsoft Cloud technologies customized to distinct business environments.</p>
        </div>

        <div className="row justify-content-center">
          {industries.map((ind, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mb-4 d-flex">
              <div className="industry-card p-4 h-100 rounded-4 shadow-sm w-100" 
                style={{ 
                  borderRadius: "16px",
                  background: "#fafafa",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column"
                }}>
                <div className="d-flex align-items-center mb-3">
                  <div className="industry-icon d-inline-flex align-items-center justify-content-center me-3" 
                    style={{ 
                      width: "50px", 
                      height: "50px", 
                      borderRadius: "50%", 
                      background: "rgba(0, 131, 255, 0.1)",
                      color: "#0083FF",
                      flexShrink: 0
                    }}>
                    <ion-icon name={ind.icon} style={{ fontSize: "1.5rem" }}></ion-icon>
                  </div>
                  <h3 className="h5 fw-bold text-dark mb-0">{ind.title}</h3>
                </div>
                <ul className="list-unstyled p-0 m-0" style={{ flexGrow: 1 }}>
                  {ind.items.map((item, index) => (
                    <li key={index} className="mb-2 text-muted" style={{ fontSize: "0.9rem" }}>
                      <span style={{ color: "#0083FF", marginRight: "8px" }}>•</span> {item}
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

export default M365Industries;
