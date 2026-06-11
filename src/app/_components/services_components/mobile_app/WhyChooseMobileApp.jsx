'use client'
import React from 'react';

const WhyChooseMobileApp = () => {
  const differentiators = [
    {
      icon: "people-outline",
      title: "Experienced Mobile App Developers",
      desc: "Our development team has extensive experience building mobile applications across multiple industries and business models."
    },
    {
      icon: "layers-outline",
      title: "End-to-End Development Services",
      desc: "From ideation and UI/UX design to deployment and maintenance, we handle the complete mobile app lifecycle."
    },
    {
      icon: "reload-outline",
      title: "Agile Development Methodology",
      desc: "We follow agile frameworks to ensure faster delivery, transparent communication, and continuous improvements."
    },
    {
      icon: "git-network-outline",
      title: "Scalable Architecture",
      desc: "Our applications are built to support future growth, user expansion, and evolving business requirements."
    },
    {
      icon: "sparkles-outline",
      title: "AI-Ready Mobile Solutions",
      desc: "We integrate Artificial Intelligence, Machine Learning, chatbots, predictive analytics, and automation capabilities into modern mobile applications."
    },
    {
      icon: "globe-outline",
      title: "Global Delivery Model",
      desc: "We serve clients across India, USA, and UK with flexible engagement models and dedicated support."
    }
  ];

  return (
    <section className="why-choose-mobile-section pt100 pb70" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHY CHOOSE <span className="c-primary">TGAYS TECHNOLOGY</span> AS YOUR MOBILE APP DEVELOPMENT COMPANY?
          </h2>
          <p className="slider-content-text" style={{ maxWidth: "800px", margin: "15px auto 0 auto" }}>
            Businesses across India, USA, and the UK choose TGAYS Technology because we combine innovation, technical excellence, and business-focused development strategies.
          </p>
        </div>

        <div className="row mt-5">
          {differentiators.map((diff, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mb-4">
              <div className="diff-card p-4 h-100 rounded-4 shadow-sm"
                style={{
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease",
                  boxShadow: "rgba(0, 0, 0, 0.03) 0px 10px 30px"
                }}>
                <div className="icon-box mb-3 d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "12px",
                    background: "rgba(0, 131, 255, 0.1)",
                    color: "#0083FF"
                  }}>
                  <ion-icon name={diff.icon} style={{ fontSize: "1.6rem" }}></ion-icon>
                </div>
                <h3 className="h5 fw-bold text-dark mb-3" style={{ fontSize: "1.15rem" }}>{diff.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                  {diff.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMobileApp;
