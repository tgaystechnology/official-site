'use client'
import React from 'react';

const HealthFitnessBenefits = () => {
  const benefits = [
    {
      title: "Improve User Engagement",
      desc: "Deliver personalized, interactive experiences that keep users active and motivated to reach their goals.",
      icon: "heart-outline",
      bgColor: "#ffecec",
      textColor: "#ff4d4d"
    },
    {
      title: "Increase Revenue",
      desc: "Generate recurring income through subscription models, premium memberships, and in-app purchases.",
      icon: "cash-outline",
      bgColor: "#e6f9ec",
      textColor: "#28a745"
    },
    {
      title: "Strengthen Brand Loyalty",
      desc: "Build long-term relationships and community through continuous digital engagement and rewards.",
      icon: "ribbon-outline",
      bgColor: "#fff4e6",
      textColor: "#fd7e14"
    },
    {
      title: "Optimize Operations",
      desc: "Automate daily workflows, reduce administrative overhead, and empower staff with intelligent tools.",
      icon: "cog-outline",
      bgColor: "#e6f2ff",
      textColor: "#0083FF"
    },
    {
      title: "Expand Market Reach",
      desc: "Break geographical barriers and serve fitness enthusiasts globally through scalable digital platforms.",
      icon: "globe-outline",
      bgColor: "#f3e6ff",
      textColor: "#6f42c1"
    },
    {
      title: "Gain Competitive Advantage",
      desc: "Differentiate your fitness business from competitors through cutting-edge technology and AI innovation.",
      icon: "trophy-outline",
      bgColor: "#fff9e6",
      textColor: "#ffc107"
    }
  ];

  return (
    <section className="benefits-section pt100 pb100 bg-white" style={{ borderTop: "1px solid #f5f5f5" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BENEFITS OF HEALTH & FITNESS <span className="c-primary">SOFTWARE</span>
          </h2>
          <p className="slider-content-text">Transform your business model and deliver exceptional value to your members.</p>
        </div>

        <div className="row mt-5">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="benefit-card p-4 rounded-4 text-center h-100" style={{ background: "#fff", border: "1px solid #eee", boxShadow: "0 4px 15px rgba(0,0,0,0.03)", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.03)";
                }}
              >
                <div className="icon-wrap mx-auto mb-4" style={{ width: "70px", height: "70px", background: benefit.bgColor, color: benefit.textColor, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "20px", fontSize: "2rem" }}>
                  <ion-icon name={benefit.icon}></ion-icon>
                </div>
                <h3 className="h5 fw-bold mb-3 text-dark">{benefit.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthFitnessBenefits;
