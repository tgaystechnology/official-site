'use client'
import React from 'react';

const WebDevProcess = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Requirement Analysis",
      desc: "We understand your business goals, audience, competitors, and technical requirements."
    },
    {
      num: "02",
      title: "Strategy & Planning",
      desc: "Our team creates a detailed roadmap, architecture plan, and project timeline."
    },
    {
      num: "03",
      title: "UI/UX Design",
      desc: "We design intuitive and engaging user experiences that maximize conversions."
    },
    {
      num: "04",
      title: "Development & Coding",
      desc: "Our developers build secure, scalable, and high-performance web solutions."
    },
    {
      num: "05",
      title: "Quality Assurance & Testing",
      desc: "Every website undergoes rigorous testing for performance, security, usability, and compatibility."
    },
    {
      num: "06",
      title: "Deployment & Launch",
      desc: "We ensure a smooth deployment process with minimal disruption."
    },
    {
      num: "07",
      title: "Ongoing Support & Optimization",
      desc: "Continuous monitoring, updates, maintenance, and performance improvements."
    }
  ];

  return (
    <section className="web-process pt100 pb70" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            OUR PROVEN <span className="c-primary">WEB DEVELOPMENT PROCESS</span>
          </h2>
          <p className="slider-content-text">How we transition your web concept from strategy to deployment and ongoing growth</p>
        </div>

        <div className="row justify-content-center mt-5">
          {steps.map((step, idx) => (
            <div key={idx} className="col-lg-3 col-md-6 mb-4">
              <div className="process-card p-4 h-100 rounded-4 shadow-sm"
                style={{
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease",
                  boxShadow: "rgba(0, 0, 0, 0.02) 0px 8px 24px",
                  position: "relative",
                  overflow: "hidden"
                }}>
                <div className="position-absolute" style={{ right: "15px", top: "5px", fontSize: "3rem", fontWeight: "900", color: "rgba(0, 131, 255, 0.06)" }}>
                  {step.num}
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span className="badge rounded-circle d-flex align-items-center justify-content-center fw-bold" 
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "#0083FF",
                      color: "#fff",
                      fontSize: "0.95rem"
                    }}>
                    {idx + 1}
                  </span>
                </div>
                <h3 className="h6 fw-bold text-dark mb-3" style={{ fontSize: "1.1rem" }}>{step.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.88rem", lineHeight: "1.6" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevProcess;
