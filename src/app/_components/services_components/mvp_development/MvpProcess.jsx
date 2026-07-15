'use client'
import React from 'react';

const MvpProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Product Discovery Workshop",
      desc: "We identify your Business Goals, User Personas, Market Opportunities, and Competitive Landscape."
    },
    {
      num: "02",
      title: "Feature Prioritization",
      desc: "We determine the Must-Have Features, Nice-to-Have Features, and Future Enhancements."
    },
    {
      num: "03",
      title: "UI/UX Design",
      desc: "Create intuitive user experiences that maximize user engagement, retention, and adoption."
    },
    {
      num: "04",
      title: "MVP Development",
      desc: "Rapid development and execution using agile methodologies and modern, scalable frameworks."
    },
    {
      num: "05",
      title: "Testing & Quality Assurance",
      desc: "Comprehensive testing to ensure absolute reliability, system security, and high performance."
    },
    {
      num: "06",
      title: "Launch & Market Validation",
      desc: "Deploy your MVP to the market and start collecting real user feedback and analytics."
    },
    {
      num: "07",
      title: "Scale & Optimize",
      desc: "Transform your MVP into a fully scalable enterprise product based on data-driven insights."
    }
  ];

  return (
    <section className="process-workflow-section pt100 pb70" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            OUR MVP <span className="c-primary">DEVELOPMENT PROCESS</span>
          </h2>
          <p className="slider-content-text">A structured 7-step methodology to take your idea from concept to a successful market launch.</p>
        </div>

        <div className="row justify-content-center">
          {steps.map((step, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mb-4">
              <div className="step-card p-4 h-100 rounded-4 shadow-sm transition-all" 
                style={{ 
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "rgba(0, 131, 255, 0.08) 0px 15px 30px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
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
                  <span className="d-inline-block p-2 rounded-3 text-white mb-3" style={{ background: "#0083FF", fontSize: "0.85rem", fontWeight: "bold", padding: "4px 10px" }}>
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

export default MvpProcess;
