'use client'
import React from 'react';

const M365Process = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Assessment",
      desc: "We analyze current systems, business processes, user requirements, and identify technology gaps."
    },
    {
      num: "02",
      title: "Solution Architecture",
      desc: "Our architects map out technical roadmaps, integration paths, security frameworks, and deployment plans."
    },
    {
      num: "03",
      title: "Development & Configuration",
      desc: "Active development and cloud configuration of Power Apps, Power Automate, SharePoint, and custom Teams widgets."
    },
    {
      num: "04",
      title: "Testing & Validation",
      desc: "Rigorous system testing validating functionality, accessibility, access security, cloud performance, and UX."
    },
    {
      num: "05",
      title: "Deployment & Training",
      desc: "Go-live setups complete with detailed user training, full governance documentation, and rollout support."
    },
    {
      num: "06",
      title: "Ongoing Support & Optimization",
      desc: "Continuous performance audits and software optimizations to maximize your Microsoft 365 investment."
    }
  ];

  return (
    <section className="process-workflow-section pt100 pb70" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            OUR MICROSOFT 365 <span className="c-primary">DEVELOPMENT PROCESS</span>
          </h2>
          <p className="slider-content-text">A structured methodology that drives efficiency, mitigates risk, and ensures high adoption.</p>
        </div>

        <div className="row">
          {steps.map((step, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mb-4">
              <div className="step-card p-4 h-100 rounded-4 shadow-sm transition-all" 
                style={{ 
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  position: "relative",
                  overflow: "hidden"
                }}>
                <div className="step-num-badge" style={{ 
                  fontSize: "3rem", 
                  fontWeight: "800", 
                  color: "rgba(0, 131, 255, 0.1)", 
                  position: "absolute", 
                  right: "20px", 
                  top: "10px",
                  lineHeight: "1"
                }}>
                  {step.num}
                </div>
                <div style={{ position: "relative", zIndex: 2 }}>
                  <span className="d-inline-block p-2 rounded-3 text-white mb-3" style={{ background: "#0083FF", fontSize: "0.85rem", fontWeight: "bold" }}>
                    Step {step.num}
                  </span>
                  <h3 className="h5 fw-bold mb-3 text-dark">{step.title}</h3>
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default M365Process;
