'use client'
import React from 'react';

const IndustriesWeServe = () => {
  const industries = [
    {
      title: "Healthcare",
      desc: "Healthcare software, telemedicine platforms, patient management systems, and compliance-focused solutions.",
      icon: "heart-outline"
    },
    {
      title: "Real Estate",
      desc: "Property management platforms, CRM solutions, listing portals, and real estate marketplaces.",
      icon: "business-outline"
    },
    {
      title: "E-commerce",
      desc: "Custom eCommerce platforms, marketplace development, payment integrations, and customer experience optimization.",
      icon: "cart-outline"
    },
    {
      title: "Financial Services",
      desc: "FinTech platforms, payment systems, compliance applications, and secure transaction solutions.",
      icon: "cash-outline"
    },
    {
      title: "Manufacturing",
      desc: "ERP systems, automation platforms, supply chain solutions, and production management applications.",
      icon: "construct-outline"
    },
    {
      title: "Logistics & Transportation",
      desc: "Fleet management, route optimization, shipment tracking, and logistics automation solutions.",
      icon: "boat-outline"
    },
    {
      title: "Education",
      desc: "Learning management systems, EdTech applications, and digital learning platforms.",
      icon: "book-outline"
    },
    {
      title: "SaaS & Technology",
      desc: "Cloud-native applications, enterprise software, and product engineering services.",
      icon: "cloud-upload-outline"
    }
  ];

  return (
    <section className="industries-serve-section pt100 pb70" style={{ background: "#fff" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            INDUSTRIES <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text">Delivering specialized engineering and development talent across key sectors.</p>
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
                <h3 className="h5 fw-bold text-dark mb-3">{ind.title}</h3>
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

export default IndustriesWeServe;
