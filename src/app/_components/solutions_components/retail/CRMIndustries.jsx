'use client'
import React from 'react';

const CRMIndustries = () => {
  const industries = [
    {
      title: "Healthcare",
      desc: "Patient relationship management, appointment tracking, and communication workflows.",
      icon: "medkit-outline"
    },
    {
      title: "Real Estate",
      desc: "Property lead management, agent productivity tools, and follow-up automation.",
      icon: "home-outline"
    },
    {
      title: "E-Commerce",
      desc: "Customer lifecycle tracking, loyalty management, and purchase behavior analytics.",
      icon: "cart-outline"
    },
    {
      title: "Education",
      desc: "Student relationship management and admission process automation.",
      icon: "school-outline"
    },
    {
      title: "Financial Services",
      desc: "Client management, compliance tracking, and secure document management.",
      icon: "wallet-outline"
    },
    {
      title: "Manufacturing",
      desc: "Dealer management, customer service workflows, and centralized sales tracking.",
      icon: "construct-outline"
    },
    {
      title: "Logistics",
      desc: "Client communication, service tracking, and operational reporting.",
      icon: "boat-outline"
    },
    {
      title: "Professional Services",
      desc: "Project management, client engagement, and service delivery tracking.",
      icon: "briefcase-outline"
    }
  ];

  return (
    <section className="industries-section pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800", textTransform: "uppercase" }}>
            INDUSTRIES <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px" }}>
            Our team has extensive experience building highly customized CRM systems for a diverse range of industries.
          </p>
        </div>

        <div className="row mt-5 justify-content-center">
          {industries.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="industry-card p-4 text-center h-100" style={{ transition: "all 0.3s ease", borderBottom: "3px solid transparent", cursor: "default", borderRadius: "8px" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottom = "3px solid #0083FF";
                  e.currentTarget.style.background = "#fafafa";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottom = "3px solid transparent";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <div className="icon-wrap mx-auto mb-3" style={{ fontSize: "2.5rem", color: "#0083FF" }}>
                  <ion-icon name={item.icon}></ion-icon>
                </div>
                <h3 className="h6 fw-bold mb-2 text-dark">{item.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMIndustries;
