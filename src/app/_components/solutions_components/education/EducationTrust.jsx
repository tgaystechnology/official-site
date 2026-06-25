'use client'
import React from 'react';

const EducationTrust = () => {
  const reasons = [
    {
      title: "Education Domain Expertise",
      desc: "We understand complex academic workflows, compliance needs, and institutional requirements from the inside out.",
      icon: "school-outline"
    },
    {
      title: "Dedicated Support Team",
      desc: "Our support specialists provide continuous assistance, training, and maintenance after deployment.",
      icon: "headset-outline"
    },
    {
      title: "Flexible Engagement Models",
      desc: "Choose from Fixed Cost Projects, Dedicated Development Teams, Staff Augmentation, or Long-Term Partnerships.",
      icon: "briefcase-outline"
    }
  ];

  const techStack = [
    { category: "Frontend", items: ["React.js", "Angular", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Laravel", "ASP.NET", "Python"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
    { category: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud"] }
  ];

  return (
    <section className="trust-section pt100 pb100 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="crumina-module crumina-heading mb-4">
              <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800" }}>
                WHY INSTITUTIONS TRUST <span className="c-primary">TGAYS TECHNOLOGY</span>
              </h2>
              <p className="slider-content-text">Partner with an education software development company that truly understands your academic and administrative challenges.</p>
            </div>

            <div className="mt-4">
              {reasons.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex align-items-start">
                    <div className="icon-wrap me-3 mt-1" style={{ color: "#0083FF", fontSize: "2rem" }}>
                      <ion-icon name={item.icon}></ion-icon>
                    </div>
                    <div>
                      <h4 className="h5 fw-bold mb-2 text-dark">{item.title}</h4>
                      <p className="text-muted mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="p-5 rounded-4 shadow-lg position-relative overflow-hidden" style={{ background: "linear-gradient(135deg, #091020 0%, #0c1527 100%)", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "250px", height: "250px", background: "radial-gradient(circle, rgba(0, 131, 255, 0.2) 0%, transparent 70%)", pointerEvents: "none" }}></div>
              
              <h3 className="text-white mb-2" style={{ fontWeight: "800", position: "relative", zIndex: 1 }}>Advanced Technology Stack</h3>
              <p className="text-white-50 mb-4 pb-3 border-bottom border-secondary" style={{ fontSize: "0.95rem", position: "relative", zIndex: 1 }}>We build robust platforms using enterprise-grade technologies to ensure security, speed, and scalability.</p>
              
              <div style={{ position: "relative", zIndex: 1 }}>
                {techStack.map((tech, idx) => (
                  <div key={idx} className="mb-4">
                    <h5 className="text-white mb-3" style={{ fontSize: "0.95rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", color: "#0083FF !important" }}>
                      {tech.category}
                    </h5>
                    <div className="d-flex flex-wrap gap-2">
                      {tech.items.map((item, itemIdx) => (
                        <span key={itemIdx} className="badge" style={{ background: "rgba(255, 255, 255, 0.1)", color: "#fff", padding: "8px 12px", fontSize: "0.85rem", fontWeight: "600", borderRadius: "8px", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
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

export default EducationTrust;
