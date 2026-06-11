'use client'
import React from 'react';

const ProcessWorkflow = () => {
  const steps = [
    {
      num: "01",
      title: "Requirement Discovery",
      desc: "We analyze project goals, technical requirements, team structure, and timelines."
    },
    {
      num: "02",
      title: "Talent Selection",
      desc: "Our recruitment and technical teams identify the most suitable candidates."
    },
    {
      num: "03",
      title: "Candidate Evaluation",
      desc: "You interview and approve resources before onboarding."
    },
    {
      num: "04",
      title: "Team Integration",
      desc: "Developers integrate into your workflows, communication channels, and development environment."
    },
    {
      num: "05",
      title: "Project Execution",
      desc: "Resources contribute directly to project deliverables while collaborating with your internal teams."
    },
    {
      num: "06",
      title: "Ongoing Management & Support",
      desc: "We continuously monitor performance and ensure successful project outcomes."
    }
  ];

  return (
    <section className="process-workflow-section pt100 pb70" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            HOW OUR <span className="c-primary">IT STAFF AUGMENTATION</span> PROCESS WORKS
          </h2>
          <p className="slider-content-text">Our streamlined workflow designed to deliver talent and results efficiently.</p>
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

export default ProcessWorkflow;
