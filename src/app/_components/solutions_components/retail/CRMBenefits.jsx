'use client'
import React from 'react';

const CRMBenefits = () => {
  const benefits = [
    {
      title: "Increase Sales Productivity",
      desc: "Automate repetitive tasks and allow sales teams to focus on closing deals.",
      icon: "trending-up-outline",
      bgColor: "rgba(0, 131, 255, 0.08)",
      iconColor: "#0083FF"
    },
    {
      title: "Improve Customer Experience",
      desc: "Deliver personalized interactions based on customer data and behavior.",
      icon: "happy-outline",
      bgColor: "rgba(255, 94, 58, 0.08)",
      iconColor: "#ff5e3a"
    },
    {
      title: "Better Decision-Making",
      desc: "Access real-time business intelligence and actionable reports.",
      icon: "pie-chart-outline",
      bgColor: "rgba(56, 178, 172, 0.08)",
      iconColor: "#38b2ac"
    },
    {
      title: "Higher Customer Retention",
      desc: "Build stronger relationships through improved communication and engagement.",
      icon: "heart-outline",
      bgColor: "rgba(156, 39, 176, 0.08)",
      iconColor: "#9c27b0"
    },
    {
      title: "Operational Efficiency",
      desc: "Reduce manual effort and eliminate duplicate processes.",
      icon: "cog-outline",
      bgColor: "rgba(255, 152, 0, 0.08)",
      iconColor: "#ff9800"
    },
    {
      title: "Scalable Growth",
      desc: "Expand your CRM capabilities seamlessly as your business evolves.",
      icon: "expand-outline",
      bgColor: "rgba(76, 175, 80, 0.08)",
      iconColor: "#4caf50"
    }
  ];

  return (
    <section className="benefits-section pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800", textTransform: "uppercase" }}>
            BENEFITS OF CUSTOM <span className="c-primary">CRM DEVELOPMENT</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px" }}>
            A custom CRM is more than just a contact database; it's a growth engine that transforms how your entire organization operates.
          </p>
        </div>

        <div className="row mt-5 justify-content-center">
          {benefits.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="benefit-card p-4 rounded-4 h-100" style={{ background: item.bgColor, transition: "transform 0.3s ease", border: `1px solid ${item.bgColor.replace("0.08", "0.2")}` }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-wrap me-3" style={{ width: "50px", height: "50px", background: "#fff", color: item.iconColor, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", fontSize: "1.5rem", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>
                    <ion-icon name={item.icon}></ion-icon>
                  </div>
                  <h3 className="h6 fw-bold mb-0 text-dark" style={{ lineHeight: "1.4" }}>{item.title}</h3>
                </div>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMBenefits;
