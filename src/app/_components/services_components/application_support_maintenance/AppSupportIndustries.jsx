'use client'
import React from 'react';

const AppSupportIndustries = () => {
  const industries = [
    {
      title: "Healthcare",
      icon: "medical-outline",
      desc: "Secure and HIPAA-compliant healthcare application support and monitoring."
    },
    {
      title: "E-Commerce",
      icon: "cart-outline",
      desc: "Maintain 100% uptime, secure transactions, and seamless customer experiences."
    },
    {
      title: "Real Estate",
      icon: "business-outline",
      desc: "Support property management systems, listing portals, and CRM platforms."
    },
    {
      title: "Banking & Finance",
      icon: "wallet-outline",
      desc: "Reliable, highly secure, and compliant financial application operations."
    },
    {
      title: "Education",
      icon: "school-outline",
      desc: "Support learning management systems (LMS) and student educational portals."
    },
    {
      title: "Manufacturing",
      icon: "construct-outline",
      desc: "Maintain complex ERP systems, supply chain, and operational software."
    },
    {
      title: "Logistics",
      icon: "airplane-outline",
      desc: "Ensure seamless workflow automation, fleet management, and tracking systems."
    },
    {
      title: "Retail",
      icon: "storefront-outline",
      desc: "Support omnichannel commerce platforms and customer engagement systems."
    },
    {
      title: "SaaS Companies",
      icon: "cloud-outline",
      desc: "Continuous multi-tenant platform optimization and API support."
    },
    {
      title: "Startups & SMEs",
      icon: "rocket-outline",
      desc: "Affordable maintenance solutions that easily scale with your business growth."
    }
  ];

  return (
    <section className="industries-section pt100 pb70 bg-white" role="region" aria-labelledby="appsupport-industries-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="appsupport-industries-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            INDUSTRIES <span className="c-primary">WE SERVE</span>
          </h2>
          <p className="slider-content-text">Providing targeted application support and maintenance solutions across major business verticals.</p>
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
                <p className="text-muted mb-0" style={{ fontSize: "0.88rem", lineHeight: "1.5" }}>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppSupportIndustries;
