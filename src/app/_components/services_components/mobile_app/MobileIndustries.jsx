'use client'
import React from 'react';

const MobileIndustries = () => {
  const industries = [
    { title: "Startups", desc: "MVP development and rapid scaling solutions.", icon: "rocket-outline" },
    { title: "Healthcare", desc: "Patient engagement and digital healthcare platforms.", icon: "heart-outline" },
    { title: "Fintech", desc: "Secure and compliant financial applications.", icon: "shield-checkmark-outline" },
    { title: "Real Estate", desc: "Property management and customer acquisition solutions.", icon: "business-outline" },
    { title: "Ecommerce", desc: "Mobile shopping experiences and omnichannel commerce.", icon: "cart-outline" },
    { title: "Education", desc: "Learning management and e-learning platforms.", icon: "book-outline" },
    { title: "Logistics", desc: "Fleet management and tracking applications.", icon: "bus-outline" },
    { title: "Manufacturing", desc: "Industrial mobility and process automation solutions.", icon: "build-outline" },
    { title: "Travel & Hospitality", desc: "Booking systems and customer engagement platforms.", icon: "airplane-outline" }
  ];

  return (
    <section className="mobile-industries-section pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            INDUSTRIES <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text">Customized mobile software engineering for diverse business verticals</p>
        </div>

        <div className="row mt-5">
          {industries.map((ind, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mb-4">
              <div className="industry-card p-4 h-100 rounded-4 shadow-sm"
                style={{
                  borderRadius: "16px",
                  background: "#fafafa",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease",
                  boxShadow: "rgba(0, 0, 0, 0.02) 0px 8px 20px"
                }}>
                <div className="icon-box mb-3 d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(0, 131, 255, 0.08)",
                    color: "#0083FF"
                  }}>
                  <ion-icon name={ind.icon} style={{ fontSize: "1.4rem" }}></ion-icon>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2" style={{ fontSize: "1.1rem" }}>{ind.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
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

export default MobileIndustries;
