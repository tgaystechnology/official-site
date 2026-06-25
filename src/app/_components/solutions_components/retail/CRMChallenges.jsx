'use client'
import React from 'react';

const CRMChallenges = () => {
  const challenges = [
    {
      problem: "Lost Leads",
      problemDesc: "Without proper lead tracking, opportunities fall through the cracks.",
      solution: "Automated lead capture and lead nurturing workflows.",
      icon: "funnel-outline"
    },
    {
      problem: "Poor Customer Visibility",
      problemDesc: "Teams often lack complete customer information.",
      solution: "Centralized customer database and activity tracking.",
      icon: "eye-off-outline"
    },
    {
      problem: "Manual Processes",
      problemDesc: "Repetitive tasks reduce productivity and waste time.",
      solution: "Workflow automation and intelligent task management.",
      icon: "cog-outline"
    },
    {
      problem: "Low Sales Performance",
      problemDesc: "Sales teams need actionable insights to close deals.",
      solution: "Real-time sales dashboards and predictive analytics.",
      icon: "trending-down-outline"
    },
    {
      problem: "Data Silos",
      problemDesc: "Departments operate independently with fragmented data.",
      solution: "Integrated CRM ecosystem connecting all business functions.",
      icon: "server-outline"
    }
  ];

  return (
    <section className="challenges-section pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800", textTransform: "uppercase" }}>
            CHALLENGES OUR CRM <span className="c-primary">SOLUTIONS SOLVE</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px" }}>
            Many organizations struggle with disconnected customer data and inefficient processes. We build platforms to solve these critical bottlenecks.
          </p>
        </div>

        <div className="row mt-5 justify-content-center">
          {challenges.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="challenge-card h-100 rounded-4 overflow-hidden position-relative d-flex flex-column" 
                style={{ 
                  border: "1px solid #eaeaea", 
                  background: "#fff",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)" 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 131, 255, 0.15)";
                  e.currentTarget.style.borderColor = "#cce5ff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.03)";
                  e.currentTarget.style.borderColor = "#eaeaea";
                }}
              >
                {/* Top Half: Problem */}
                <div className="p-4 d-flex flex-column flex-grow-1" style={{ background: "#ffffff", position: "relative" }}>
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-wrap me-3 shadow-sm" style={{ width: "50px", height: "50px", background: "linear-gradient(135deg, #fff5f3, #ffebeb)", color: "#ff5e3a", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", fontSize: "1.5rem", border: "1px solid #ffe1dc", flexShrink: 0 }}>
                      <ion-icon name={item.icon}></ion-icon>
                    </div>
                    <div>
                      <span className="text-uppercase fw-bold" style={{ fontSize: "0.75rem", color: "#ff5e3a", letterSpacing: "1px" }}>The Challenge</span>
                      <h3 className="h6 fw-bold mb-0 text-dark" style={{ lineHeight: "1.2" }}>{item.problem}</h3>
                    </div>
                  </div>
                  <p className="text-muted mb-4 pb-2 flex-grow-1" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{item.problemDesc}</p>
                  
                  {/* Decorative Arrow */}
                  <div className="position-absolute" style={{ bottom: "-15px", left: "50%", transform: "translateX(-50%)", width: "30px", height: "30px", background: "#fff", border: "1px solid #eaeaea", borderTop: "none", borderLeft: "none", transformOrigin: "center", rotate: "45deg", zIndex: 2 }}></div>
                </div>
                
                {/* Bottom Half: Solution */}
                <div className="p-4 position-relative" style={{ background: "linear-gradient(135deg, #0083FF 0%, #006dd6 100%)", color: "#fff", zIndex: 1, paddingTop: "35px" }}>
                  <div className="d-flex align-items-center mb-2">
                    <ion-icon name="checkmark-done-circle" style={{ fontSize: "1.3rem", marginRight: "8px", color: "#aaddff" }}></ion-icon>
                    <span className="fw-bold text-uppercase" style={{ fontSize: "0.8rem", letterSpacing: "1px", color: "#aaddff" }}>Our Solution</span>
                  </div>
                  <p className="mb-0 fw-semibold" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                    {item.solution}
                  </p>
                  {/* Subtle Background Icon */}
                  <ion-icon name="bulb-outline" style={{ position: "absolute", bottom: "-10px", right: "-10px", fontSize: "5rem", color: "rgba(255,255,255,0.05)", zIndex: 0 }}></ion-icon>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMChallenges;
