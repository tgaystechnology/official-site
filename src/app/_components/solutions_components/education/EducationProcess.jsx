'use client'
import React from 'react';

const EducationProcess = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      desc: "Understand institution goals, current challenges, academic workflows, and administrative requirements.",
      icon: "search-outline"
    },
    {
      step: "02",
      title: "Architecture Planning",
      desc: "Define user roles, security framework, module structure, and integration requirements.",
      icon: "layers-outline"
    },
    {
      step: "03",
      title: "UI/UX Design",
      desc: "Design intuitive and accessible interfaces for students, parents, faculty, and administrators.",
      icon: "color-palette-outline"
    },
    {
      step: "04",
      title: "Development",
      desc: "Develop and customize the platform according to your institution's unique needs.",
      icon: "code-working-outline"
    },
    {
      step: "05",
      title: "Testing & QA",
      desc: "Perform rigorous functional, security, performance, and user acceptance testing.",
      icon: "shield-checkmark-outline"
    },
    {
      step: "06",
      title: "Deployment",
      desc: "Smooth implementation and data migration with minimal disruption to ongoing operations.",
      icon: "rocket-outline"
    },
    {
      step: "07",
      title: "Training & Support",
      desc: "Comprehensive user onboarding and ongoing technical support for your staff.",
      icon: "headset-outline"
    }
  ];

  return (
    <section className="process-section pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800" }}>
            OUR EMS <span className="c-primary">DEVELOPMENT PROCESS</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px" }}>
            A proven, agile methodology designed to deliver high-quality education management solutions on time and within budget.
          </p>
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

export default EducationProcess;
