'use client'
import React from 'react';

const AIBenefitsSection = () => {
  const benefits = [
    {
      title: "Accelerate Business Growth",
      desc: "AI-driven automation and analytics help businesses scale efficiently."
    },
    {
      title: "Reduce Operating Costs",
      desc: "Automate repetitive tasks and minimize resource wastage."
    },
    {
      title: "Improve Customer Experience",
      desc: "Deliver personalized, intelligent interactions at scale."
    },
    {
      title: "Increase Employee Productivity",
      desc: "Allow teams to focus on strategic and high-value activities."
    },
    {
      title: "Gain Competitive Advantage",
      desc: "Leverage advanced technologies before competitors."
    },
    {
      title: "Make Better Decisions",
      desc: "Transform data into actionable business intelligence."
    }
  ];

  const stats = [
    {
      percentage: "40%",
      label: "Productivity Improvements",
      desc: "Organizations implementing AI report productivity improvements of up to 40%."
    },
    {
      percentage: "20-30%",
      label: "Operational Cost Reduction",
      desc: "AI-powered automation can reduce operational costs by 20–30%."
    },
    {
      percentage: "Higher",
      label: "Forecasting Accuracy",
      desc: "Businesses using predictive analytics achieve better forecasting accuracy."
    },
    {
      percentage: "Smarter",
      label: "Customer Support",
      desc: "AI-driven customer support significantly improves response times and customer satisfaction."
    }
  ];

  return (
    <section className="ai-benefits-section pt100 pb70" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="row align-items-stretch">
          {/* Left Side: Benefits List */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="h-100 d-flex flex-column justify-content-center">
              <span className="badge mb-3 d-inline-block align-self-start" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083ff", fontWeight: "bold", padding: "8px 16px", fontSize: "0.8rem", borderRadius: "30px", letterSpacing: "1px" }}>
                Delivering Value
              </span>
              <h2 className="fw-bold mb-4 text-dark" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
                Benefits of Choosing the Best AI Development Company in India
              </h2>
              
              <div className="row mt-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="d-flex">
                      <div className="icon me-3" style={{ color: "#0083FF", fontSize: "1.3rem" }}>
                        <ion-icon name="checkmark-circle"></ion-icon>
                      </div>
                      <div>
                        <h4 className="h6 fw-bold text-dark mb-1" style={{ fontSize: "1rem" }}>{benefit.title}</h4>
                        <p className="text-muted mb-0" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>{benefit.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: AI by the Numbers */}
          <div className="col-lg-6">
            <div className="p-4 p-md-5 rounded-4 shadow-sm h-100" 
              style={{ 
                borderRadius: "24px", 
                background: "linear-gradient(135deg, #091020 0%, #0c1527 100%)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 20px 40px"
              }}>
              <div className="mb-4">
                <span className="badge mb-2 text-uppercase" style={{ background: "rgba(0, 240, 255, 0.15)", color: "#00F0FF", fontWeight: "bold", padding: "6px 12px", fontSize: "0.75rem", borderRadius: "4px" }}>
                  Metrics & Proof
                </span>
                <h3 className="text-white fw-bold mb-0" style={{ fontSize: "1.8rem" }}>AI by the Numbers</h3>
              </div>

              <div className="row">
                {stats.map((stat, idx) => (
                  <div key={idx} className="col-md-6 mb-4">
                    <div className="p-3 rounded-3 h-100" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                      <div className="text-primary fw-bold mb-1" style={{ fontSize: "2rem", color: "#00F0FF", fontWeight: "800" }}>
                        {stat.percentage}
                      </div>
                      <h5 className="text-white fw-bold mb-2" style={{ fontSize: "0.95rem" }}>{stat.label}</h5>
                      <p className="text-white-50 mb-0" style={{ fontSize: "0.8rem", lineHeight: "1.5" }}>
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIBenefitsSection;
