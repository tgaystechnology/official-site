'use client'
import React from 'react';

const MobileAppProcess = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "We analyze your business goals, audience, competitors, and technical requirements to define a roadmap.",
      icon: "search-outline"
    },
    {
      step: "02",
      title: "UI/UX Design",
      desc: "Our designers create intuitive, user-centric wireframes and engaging interactive visual experiences.",
      icon: "color-palette-outline"
    },
    {
      step: "03",
      title: "Architecture Planning",
      desc: "We build scalable, secure technical foundations to support long-term traffic and updates.",
      icon: "git-network-outline"
    },
    {
      step: "04",
      title: "Development",
      desc: "Our engineers build robust applications using cutting-edge Android, iOS, or cross-platform code.",
      icon: "code-working-outline"
    },
    {
      step: "05",
      title: "Quality Assurance",
      desc: "Comprehensive manual and automated testing ensures maximum performance, security, and stability.",
      icon: "shield-checkmark-outline"
    },
    {
      step: "06",
      title: "Deployment",
      desc: "We fully manage the submissions and launch processes for both the App Store and Google Play Store.",
      icon: "rocket-outline"
    },
    {
      step: "07",
      title: "Ongoing Support",
      desc: "Continuous maintenance, platform compliance updates, bug fixes, and feature optimization.",
      icon: "construct-outline"
    }
  ];

  return (
    <section className="mobile-process-section pt100 pb100" style={{ background: "#fafafa" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            OUR MOBILE APP <span className="c-primary">DEVELOPMENT PROCESS</span>
          </h2>
          <p className="slider-content-text" style={{ maxWidth: "700px", margin: "15px auto 0 auto" }}>
            We follow a structured, agile lifecycle to deliver exceptional quality products from concept to launch and beyond.
          </p>
        </div>

        <div className="row mt-5 justify-content-center" style={{ gap: "20px 0" }}>
          {steps.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="process-card p-4 h-100 position-relative"
                style={{
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  boxShadow: "rgba(0, 0, 0, 0.02) 0px 10px 30px",
                  transition: "transform 0.3s ease"
                }}>
                <div className="step-badge position-absolute"
                  style={{
                    top: "20px",
                    right: "20px",
                    fontSize: "2rem",
                    fontWeight: "900",
                    color: "rgba(0, 131, 255, 0.15)",
                    fontFamily: "sans-serif"
                  }}>
                  {item.step}
                </div>
                <div className="icon-box mb-3 d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "rgba(0, 131, 255, 0.08)",
                    color: "#0083FF"
                  }}>
                  <ion-icon name={item.icon} style={{ fontSize: "1.5rem" }}></ion-icon>
                </div>
                <h3 className="h6 fw-bold text-dark mb-2" style={{ fontSize: "1.1rem" }}>{item.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.88rem", lineHeight: "1.5" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppProcess;
