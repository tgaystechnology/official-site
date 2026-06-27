'use client'
import React from 'react';

const HealthcareTrust = () => {
  const trustReasons = [
    { title: "Experienced Healthcare Dev Team", desc: "Specialized expertise in healthcare software architecture and clinical implementation.", icon: "people-outline" },
    { title: "Agile Development Methodology", desc: "Transparent collaboration and significantly faster project delivery.", icon: "infinite-outline" },
    { title: "Enterprise Security Standards", desc: "Advanced data protection, HIPAA compliance, and secure cloud infrastructure.", icon: "shield-checkmark-outline" },
    { title: "Dedicated Support", desc: "Long-term technical assistance, maintenance, and continuous platform improvement.", icon: "headset-outline" },
    { title: "Proven Delivery Model", desc: "Consistent project success guaranteed through rigorous strategic planning and execution.", icon: "trophy-outline" }
  ];

  const techStack = [
    { category: "Frontend", items: ["React.js", "Angular", "Next.js"] },
    { category: "Backend", items: ["Node.js", "Laravel", "Python", ".NET"] },
    { category: "Cloud Infrastructure", items: ["AWS", "Microsoft Azure", "Google Cloud"] }
  ];

  return (
    <section className="trust-tech-section pt100 pb100 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Why Trust Us */}
          <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
            <div className="crumina-module crumina-heading mb-4">
              <h2 className="heading-title">
                WHY BUSINESSES TRUST <span className="c-primary">TGAYS TECHNOLOGY</span>
              </h2>
              <p className="slider-content-text">
                Partner with an experienced healthcare technology company that understands your clinical demands and delivers secure, compliant platforms.
              </p>
            </div>

            <div className="mt-4">
              {trustReasons.map((reason, idx) => (
                <div key={idx} className="mb-4">
                  <div className="d-flex align-items-start">
                    <div className="icon-wrap me-3 mt-1" style={{ color: "#0083FF", fontSize: "2rem" }}>
                      <ion-icon name={reason.icon}></ion-icon>
                    </div>
                    <div>
                      <h4 className="h5 fw-bold mb-2 text-dark">{reason.title}</h4>
                      <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{reason.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Tech Stack */}
          <div className="col-lg-5 offset-lg-1">
            <div className="p-5 rounded-4 shadow-lg position-relative overflow-hidden h-100" 
              style={{ 
                background: "linear-gradient(135deg, #091020 0%, #0c1527 100%)", 
                border: "1px solid rgba(255, 255, 255, 0.05)" 
              }}>
              <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "250px", height: "250px", background: "radial-gradient(circle, rgba(0, 131, 255, 0.2) 0%, transparent 70%)", pointerEvents: "none" }}></div>
              <div style={{ position: "absolute", bottom: "-100px", left: "-100px", width: "250px", height: "250px", background: "radial-gradient(circle, rgba(0, 131, 255, 0.15) 0%, transparent 70%)", pointerEvents: "none" }}></div>

              <div className="d-flex align-items-center mb-2" style={{ position: "relative", zIndex: 1 }}>
                <ion-icon name="hardware-chip-outline" style={{ color: "#0083FF", fontSize: "2rem", marginRight: "10px" }}></ion-icon>
                <h3 className="text-white mb-0" style={{ fontWeight: "800" }}>Technology Stack</h3>
              </div>
              
              <p className="text-white-50 mb-4 pb-3 border-bottom border-secondary" style={{ fontSize: "0.95rem", position: "relative", zIndex: 1 }}>
                We build robust healthcare platforms using enterprise-grade technologies to ensure data security, speed, and HIPAA compliance.
              </p>
              
              <div style={{ position: "relative", zIndex: 1 }}>
                {techStack.map((tech, idx) => (
                  <div key={idx} className="mb-4">
                    <h5 className="mb-3" style={{ fontSize: "0.95rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#0083FF" }}>
                      {tech.category}
                    </h5>
                    <div className="d-flex flex-wrap gap-2">
                      {tech.items.map((item, itemIdx) => (
                        <span key={itemIdx} className="badge" 
                          style={{ 
                            background: "rgba(255, 255, 255, 0.1)", 
                            color: "#fff", 
                            padding: "8px 12px", 
                            fontSize: "0.85rem", 
                            fontWeight: "600", 
                            borderRadius: "8px", 
                            border: "1px solid rgba(255, 255, 255, 0.1)" 
                          }}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareTrust;
