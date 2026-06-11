'use client'
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

const WhyChooseOurAI = () => {
  const differentiators = [
    {
      icon: "sparkles-outline",
      title: "AI-First Development Approach",
      desc: "We design AI systems that solve business challenges rather than simply implementing technology."
    },
    {
      icon: "shield-checkmark-outline",
      title: "Enterprise-Grade Security",
      desc: "Our solutions follow industry best practices for data protection, compliance, governance, and secure AI deployment."
    },
    {
      icon: "infinite-outline",
      title: "End-to-End AI Expertise",
      desc: "From AI strategy and consulting to development, deployment, monitoring, and optimization, we handle the complete lifecycle."
    },
    {
      icon: "analytics-outline",
      title: "Industry-Specific Intelligence",
      desc: "Our AI models are tailored to your industry, workflows, customers, and business goals."
    },
    {
      icon: "git-network-outline",
      title: "Scalable Architecture",
      desc: "We build future-ready AI applications capable of handling growing user demands and business expansion."
    },
    {
      icon: "eye-outline",
      title: "Transparent Delivery Process",
      desc: "Clear communication, agile development, milestone tracking, and measurable outcomes throughout the project."
    }
  ];

  return (
    <section className="why-choose-ai-section pt100 pb70" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHY CHOOSE <span className="c-primary">TGAYS TECHNOLOGY</span> FOR AI DEVELOPMENT?
          </h2>
          <p className="slider-content-text" style={{ maxWidth: "800px", margin: "15px auto 0 auto" }}>
            Modern businesses need more than technology—they need measurable outcomes. Our AI specialists combine technical expertise, business understanding, and industry knowledge to create solutions that generate real business value.
          </p>
        </div>

        <div className="row mt-5">
          {differentiators.map((diff, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 mb-4">
              <div className="diff-card p-4 h-100 rounded-4 shadow-sm"
                style={{
                  borderRadius: "16px",
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  transition: "all 0.3s ease",
                  boxShadow: "rgba(0, 0, 0, 0.03) 0px 10px 30px"
                }}>
                <div className="icon-box mb-3 d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "12px",
                    background: "rgba(0, 131, 255, 0.1)",
                    color: "#0083FF"
                  }}>
                  <ion-icon name={diff.icon} style={{ fontSize: "1.6rem" }}></ion-icon>
                </div>
                <h3 className="h5 fw-bold text-dark mb-3" style={{ fontSize: "1.15rem" }}>{diff.title}</h3>
                <p className="text-muted mb-0" style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                  {diff.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOurAI;
