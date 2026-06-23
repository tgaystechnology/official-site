'use client'
import React from 'react';

const AppSupportWhyChoose = () => {
  const advantages = [
    {
      title: "Experienced Support Engineers",
      desc: "Our certified professionals possess extensive experience supporting enterprise applications, SaaS platforms, cloud environments, web applications, and mobile applications.",
      icon: "people-outline"
    },
    {
      title: "24x7 Support Availability",
      desc: "We provide round-the-clock support to ensure your applications remain available and operational whenever your users need them.",
      icon: "time-outline"
    },
    {
      title: "Proactive Issue Prevention",
      desc: "Instead of waiting for failures, we continuously monitor systems to identify and resolve issues before they impact business operations.",
      icon: "shield-checkmark-outline"
    },
    {
      title: "Global Delivery Model",
      desc: "Serving clients across the USA, India, UK, Australia, and Dubai through a flexible offshore and hybrid support model.",
      icon: "globe-outline"
    },
    {
      title: "SLA-Based Support",
      desc: "Clearly defined service-level agreements ensure predictable response times and issue resolution.",
      icon: "document-text-outline"
    },
    {
      title: "Continuous Improvement Approach",
      desc: "Beyond maintenance, we recommend enhancements that improve performance, security, and user satisfaction.",
      icon: "trending-up-outline"
    }
  ];

  return (
    <section className="why-choose-section pt100 pb70 bg-light">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHY CHOOSE TGAYS FOR <span className="c-primary">APP SUPPORT & MAINTENANCE?</span>
          </h2>
          <p className="slider-content-text">Organizations need more than reactive troubleshooting. They need a technology partner capable of proactively managing application performance, security, availability, and scalability.</p>
        </div>

        <div className="row mt-5">
          {advantages.map((adv, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="p-4 bg-white rounded-4 shadow-sm h-100" style={{ border: "1px solid #eee", transition: "transform 0.3s ease", cursor: "default" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "rgba(0, 131, 255, 0.1) 0px 15px 30px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 4px 6px -1px";
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-wrap p-2 rounded-circle me-3" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083FF", display: "flex", fontSize: "1.5rem" }}>
                    <ion-icon name={adv.icon}></ion-icon>
                  </div>
                  <h3 className="h5 fw-bold mb-0 text-dark">{adv.title}</h3>
                </div>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppSupportWhyChoose;
