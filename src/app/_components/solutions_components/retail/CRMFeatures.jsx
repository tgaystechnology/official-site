'use client'
import React from 'react';

const CRMFeatures = () => {
  const features = [
    {
      title: "Sales Management",
      icon: "bar-chart-outline",
      items: [
        "Lead tracking",
        "Opportunity management",
        "Pipeline visualization",
        "Sales forecasting"
      ]
    },
    {
      title: "Customer Management",
      icon: "people-outline",
      items: [
        "Contact database",
        "Customer history",
        "Activity tracking",
        "Relationship management"
      ]
    },
    {
      title: "Marketing Automation",
      icon: "megaphone-outline",
      items: [
        "Campaign management",
        "Email automation",
        "Lead nurturing",
        "Customer segmentation"
      ]
    },
    {
      title: "Reporting & Analytics",
      icon: "stats-chart-outline",
      items: [
        "KPI dashboards",
        "Revenue reports",
        "Sales performance metrics",
        "Customer insights"
      ]
    },
    {
      title: "Mobile CRM",
      icon: "phone-portrait-outline",
      items: [
        "Access CRM anywhere",
        "Mobile notifications",
        "Real-time updates",
        "Remote team collaboration"
      ]
    }
  ];

  return (
    <section className="features-section pt100 pb70 bg-light">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800", textTransform: "uppercase" }}>
            CRM SOFTWARE DEVELOPMENT <span className="c-primary">KEY FEATURES</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px" }}>
            Our custom CRM systems come packed with enterprise-grade features designed to accelerate your sales and marketing operations.
          </p>
        </div>

        <div className="row mt-5 justify-content-center">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="feature-card p-4 rounded-4 bg-white h-100 position-relative overflow-hidden" 
                style={{ 
                  border: "1px solid #eee", 
                  transition: "all 0.3s ease",
                  cursor: "default"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "rgba(0, 131, 255, 0.1) 0px 15px 30px";
                  e.currentTarget.querySelector('.icon-bg').style.transform = "scale(1.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.querySelector('.icon-bg').style.transform = "scale(1)";
                }}
              >
                {/* Decorative background icon */}
                <div className="icon-bg position-absolute" style={{ right: "-20px", bottom: "-20px", fontSize: "10rem", color: "rgba(0,131,255,0.03)", transition: "transform 0.5s ease", zIndex: 0 }}>
                  <ion-icon name={feature.icon}></ion-icon>
                </div>

                <div className="position-relative" style={{ zIndex: 1 }}>
                  <div className="d-flex align-items-center mb-4">
                    <div className="icon-wrap me-3" style={{ width: "50px", height: "50px", background: "rgba(0,131,255,0.1)", color: "#0083FF", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", fontSize: "1.5rem" }}>
                      <ion-icon name={feature.icon}></ion-icon>
                    </div>
                    <h3 className="h5 fw-bold mb-0 text-dark">{feature.title}</h3>
                  </div>
                  <ul className="list-unstyled mb-0">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="mb-2 d-flex align-items-center text-muted" style={{ fontSize: "0.95rem" }}>
                        <ion-icon name="checkmark-outline" style={{ color: "#0083FF", marginRight: "10px", fontWeight: "bold" }}></ion-icon>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMFeatures;
