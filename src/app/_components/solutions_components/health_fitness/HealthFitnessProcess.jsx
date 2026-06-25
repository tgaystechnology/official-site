'use client'
import React from 'react';

const HealthFitnessProcess = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "Understand business goals, audience, and product vision.",
      icon: "search-outline"
    },
    {
      step: "02",
      title: "Product Architecture",
      desc: "Design a scalable and secure technical solution.",
      icon: "layers-outline"
    },
    {
      step: "03",
      title: "UX/UI Design",
      desc: "Create intuitive experiences that encourage user engagement.",
      icon: "color-palette-outline"
    },
    {
      step: "04",
      title: "Development",
      desc: "Build applications using modern frameworks and best practices.",
      icon: "code-working-outline"
    },
    {
      step: "05",
      title: "Testing & Optimization",
      desc: "Ensure performance, usability, and security before launch.",
      icon: "shield-checkmark-outline"
    },
    {
      step: "06",
      title: "Deployment",
      desc: "Launch the solution across web and mobile platforms.",
      icon: "rocket-outline"
    },
    {
      step: "07",
      title: "Continuous Improvement",
      desc: "Enhance features based on analytics and user feedback.",
      icon: "sync-outline"
    }
  ];

  return (
    <section className="process-section pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            OUR FITNESS APP <span className="c-primary">DEVELOPMENT PROCESS</span>
          </h2>
          <p className="slider-content-text">A proven, agile methodology designed to deliver high-quality fitness solutions on time and within budget.</p>
        </div>

        <div className="row mt-5 justify-content-center">
          {steps.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="process-card p-4 rounded-4 text-center h-100" style={{ background: "#fafafa", border: "1px solid #eee", position: "relative", overflow: "hidden", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.boxShadow = "rgba(0, 131, 255, 0.15) 0px 10px 30px";
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fafafa";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ position: "absolute", top: "-10px", right: "-10px", fontSize: "5rem", fontWeight: "800", color: "rgba(0, 131, 255, 0.05)", zIndex: 0 }}>
                  {item.step}
                </div>
                <div className="icon-wrap mx-auto mb-3" style={{ width: "60px", height: "60px", background: "rgba(0, 131, 255, 0.1)", color: "#0083FF", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", fontSize: "1.5rem", position: "relative", zIndex: 1 }}>
                  <ion-icon name={item.icon}></ion-icon>
                </div>
                <h3 className="h6 fw-bold mb-3 text-dark" style={{ position: "relative", zIndex: 1 }}>{item.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem", position: "relative", zIndex: 1 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthFitnessProcess;
