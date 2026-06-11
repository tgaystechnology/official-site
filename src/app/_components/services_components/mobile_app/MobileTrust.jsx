'use client'
import React from 'react';

const MobileTrust = () => {
  const trustFactors = [
    {
      title: "Skilled Development Team",
      desc: "Experienced mobile engineers, system architects, UI/UX designers, and QA automation specialists working in sync.",
      icon: "people-outline"
    },
    {
      title: "Latest Technology Stack",
      desc: "React Native, Flutter, Swift, Kotlin, Node.js, Python, Laravel, AWS, Azure, Google Cloud.",
      icon: "code-slash-outline"
    },
    {
      title: "Transparent Communication",
      desc: "Regular updates, automated sprint reviews, daily standups, and direct access to project management boards.",
      icon: "chatbubble-ellipses-outline"
    },
    {
      title: "Flexible Engagement Models",
      desc: "Dedicated developer teams, Fixed-Cost milestone contracts, and agile Time & Materials models.",
      icon: "contract-outline"
    },
    {
      title: "Long-Term Support",
      desc: "Post-deployment monitoring, regular OS compliance checks, feature updates, and continuous maintenance.",
      icon: "shield-checkmark-outline"
    }
  ];

  return (
    <section className="mobile-trust-section pt100 pb70" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHY BUSINESSES TRUST <span className="c-primary">TGAYS TECHNOLOGY</span>
          </h2>
          <p className="slider-content-text">We combine industry experience, agile process, and deep technical capabilities for mobile excellence</p>
        </div>

        <div className="row mt-5 justify-content-center">
          {trustFactors.map((factor, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mb-4">
              <div className="trust-card p-4 h-100 rounded-4 shadow-sm"
                style={{
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease",
                  boxShadow: "rgba(0, 0, 0, 0.03) 0px 10px 30px"
                }}>
                <div className="icon-box mb-3 d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "rgba(0, 131, 255, 0.08)",
                    color: "#0083FF"
                  }}>
                  <ion-icon name={factor.icon} style={{ fontSize: "1.5rem" }}></ion-icon>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2" style={{ fontSize: "1.1rem" }}>{factor.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.5" }}>
                  {factor.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileTrust;
