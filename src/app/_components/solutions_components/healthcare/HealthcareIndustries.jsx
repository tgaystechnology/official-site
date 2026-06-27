'use client'
import React from 'react';

const HealthcareIndustries = () => {
  const industries = [
    { title: "Hospitals & Networks", desc: "Integrated digital solutions for large-scale healthcare operations.", icon: "business-outline" },
    { title: "Clinics & Practices", desc: "Patient management and workflow automation solutions.", icon: "medkit-outline" },
    { title: "Telemedicine Providers", desc: "Virtual care platforms that connect providers and patients.", icon: "videocam-outline" },
    { title: "Healthcare Startups", desc: "Scalable software products designed for innovation and growth.", icon: "rocket-outline" },
    { title: "Diagnostic Laboratories", desc: "Laboratory management and test reporting systems.", icon: "flask-outline" },
    { title: "Pharmacies", desc: "Inventory management and prescription processing solutions.", icon: "medical-outline" },
    { title: "Health Insurance", desc: "Claims management and customer engagement platforms.", icon: "shield-checkmark-outline" },
    { title: "Wellness & Fitness", desc: "Health tracking, wearables, and engagement applications.", icon: "fitness-outline" }
  ];

  return (
    <section className="industries-section pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800" }}>
            INDUSTRIES <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px" }}>
            Delivering specialized healthcare technology and engineering solutions across key medical sectors.
          </p>
        </div>

        <div className="row mt-5 justify-content-center">
          {industries.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6 mb-4">
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
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareIndustries;
