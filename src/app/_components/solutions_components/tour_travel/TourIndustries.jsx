'use client'
import React from 'react';

const TourIndustries = () => {
  const industries = [
    { title: "Travel Agencies", desc: "Comprehensive management solutions for retail and online agencies.", icon: "airplane-outline" },
    { title: "Tour Operators", desc: "Package management, itinerary creation, and customer engagement.", icon: "map-outline" },
    { title: "DMCs", desc: "Destination Management Company supplier coordination and operational control.", icon: "location-outline" },
    { title: "Corporate Travel", desc: "Business travel booking and expense management workflows.", icon: "briefcase-outline" },
    { title: "Online Travel Agencies", desc: "Scalable platforms supporting large booking volumes (OTAs).", icon: "globe-outline" },
    { title: "Hospitality Businesses", desc: "Hotel booking and reservation integration.", icon: "bed-outline" },
    { title: "Transportation Providers", desc: "Vehicle booking and fleet management solutions.", icon: "car-sport-outline" },
    { title: "Travel Aggregators", desc: "API integrations combining multiple supplier feeds.", icon: "git-network-outline" }
  ];

  return (
    <section className="industries-serve-section pt100 pb70" style={{ background: "#fff" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            INDUSTRIES <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text">Delivering specialized travel technology and engineering solutions across key sectors.</p>
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

export default TourIndustries;
