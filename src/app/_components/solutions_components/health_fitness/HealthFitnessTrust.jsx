'use client'
import React from 'react';

const HealthFitnessTrust = () => {
  const reasons = [
    {
      title: "Proven Expertise",
      desc: "Experienced teams delivering reliable, high-performance digital solutions.",
      icon: "ribbon-outline"
    },
    {
      title: "Agile Methodology",
      desc: "Faster delivery with complete transparency and iterative feedback.",
      icon: "infinite-outline"
    },
    {
      title: "Security-First",
      desc: "Protect sensitive user and health data with industry best practices.",
      icon: "shield-checkmark-outline"
    },
    {
      title: "Dedicated Support",
      desc: "Long-term maintenance and optimization services post-launch.",
      icon: "headset-outline"
    },
    {
      title: "Scalable Delivery Model",
      desc: "Designed to support future growth, high traffic, and innovation.",
      icon: "bar-chart-outline"
    }
  ];

  const techStack = [
    "React.js", "Next.js", "Angular", "Node.js", "Laravel", "Python", ".NET", "AWS", "Azure", "Google Cloud"
  ];

  return (
    <section className="trust-section pt100 pb100 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="crumina-module crumina-heading mb-4">
              <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
                WHY BUSINESSES TRUST <span className="c-primary">TGAYS TECHNOLOGY</span>
              </h2>
              <p className="slider-content-text">Partner with a proven software development company that understands the unique demands of the fitness industry.</p>
            </div>

            <div className="row">
              {reasons.map((item, index) => (
                <div key={index} className="col-sm-6 mb-4">
                  <div className="d-flex align-items-start">
                    <div className="icon-wrap me-3" style={{ color: "#0083FF", fontSize: "1.8rem" }}>
                      <ion-icon name={item.icon}></ion-icon>
                    </div>
                    <div>
                      <h4 className="h6 fw-bold mb-1 text-dark">{item.title}</h4>
                      <p className="text-muted mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="p-5 rounded-4 shadow-sm text-center" style={{ background: "#0083FF" }}>
              <h3 className="text-white mb-4" style={{ fontWeight: "700" }}>Modern Technology Stack</h3>
              <p className="text-white-50 mb-4" style={{ fontSize: "0.95rem" }}>We build robust platforms using enterprise-grade technologies to ensure security, speed, and scalability.</p>
              
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {techStack.map((tech, idx) => (
                  <span key={idx} className="badge bg-white text-primary px-3 py-2" style={{ fontSize: "0.9rem", fontWeight: "600", borderRadius: "8px" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthFitnessTrust;
