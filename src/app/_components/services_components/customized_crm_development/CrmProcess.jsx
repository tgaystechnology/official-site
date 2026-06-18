'use client'
import React from 'react';

const CrmProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Business Discovery",
      desc: "We dive deep into your unique business goals, workflows, active users, and customer relationship challenges."
    },
    {
      num: "02",
      title: "CRM Planning & Strategy",
      desc: "Our architects draft a clear roadmap, custom modules, database architectures, and API integrations."
    },
    {
      num: "03",
      title: "UI/UX Design",
      desc: "We design intuitive CRM dashboard layouts that maximize operator productivity and encourage internal adoption."
    },
    {
      num: "04",
      title: "CRM Development",
      desc: "Our specialists develop automation scripts, user permissions, analytics widgets, and cloud modules."
    },
    {
      num: "05",
      title: "Quality Assurance",
      desc: "Rigorous testing loops inspect functional logic, database latency, role-based permission locks, and API data flows."
    },
    {
      num: "06",
      title: "Deployment & Launch",
      desc: "We securely transition your teams and deploy the CRM infrastructure on the cloud with zero downtime."
    },
    {
      num: "07",
      title: "Ongoing Support",
      desc: "Post-deployment monitoring, database tuning, regular software updates, and expert consulting assistance."
    }
  ];

  return (
    <section className="process-workflow-section pt100 pb70" style={{ background: "#fcfcfc" }} role="region" aria-labelledby="crm-process-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="crm-process-heading" className="heading-title text-uppercase" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            Our Custom <span className="c-primary">CRM Development Process</span>
          </h2>
          <p className="slider-content-text">A strategic, milestone-based timeline designed to deliver high-performing enterprise tools with zero disruption.</p>
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

export default CrmProcess;
