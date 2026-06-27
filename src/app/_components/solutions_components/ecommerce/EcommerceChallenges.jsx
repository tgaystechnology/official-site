'use client'
import React from 'react';

const EcommerceChallenges = () => {
  const challenges = [
    {
      problem: "Low Online Sales",
      problemDesc: "Visitors leave without purchasing due to poor UX.",
      solution: "Conversion-focused UI/UX and optimized checkout flows.",
      icon: "cart-outline"
    },
    {
      problem: "Inventory Mismanagement",
      problemDesc: "Overselling, stockouts, and inventory discrepancies.",
      solution: "Centralized inventory software with real-time sync.",
      icon: "cube-outline"
    },
    {
      problem: "Manual Operations",
      problemDesc: "Excessive time spent on order processing and updates.",
      solution: "Automated workflows and integrated order management.",
      icon: "cog-outline"
    },
    {
      problem: "Poor Customer Experience",
      problemDesc: "Slow websites and complicated purchasing journeys.",
      solution: "High-performance platforms with intuitive navigation.",
      icon: "happy-outline"
    },
    {
      problem: "Limited Scalability",
      problemDesc: "Existing systems cannot support business growth.",
      solution: "Cloud-native architecture built for massive expansion.",
      icon: "trending-up-outline"
    }
  ];

  return (
    <section className="challenges-section pt100 pb100 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5 pb-4">
          <span className="badge mb-3 text-uppercase" style={{ background: "rgba(255, 94, 58, 0.1)", color: "#ff5e3a", fontWeight: "700", padding: "8px 16px", letterSpacing: "1px", borderRadius: "30px" }}>
            Problem vs Solution
          </span>
          <h2 className="heading-title">
            BUSINESS CHALLENGES <span style={{ color: "#0083FF" }}>WE SOLVE</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px", fontSize: "1.1rem" }}>
            We don't just write code; we solve critical business bottlenecks that prevent your eCommerce business from reaching its full potential.
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
                <div className="p-4 position-relative d-flex flex-column justify-content-center" style={{ height: "140px", flexShrink: 0, background: "linear-gradient(135deg, #0083FF 0%, #0056b3 100%)", color: "#fff", overflow: "hidden" }}>
                  <ion-icon name="bulb-outline" style={{ position: "absolute", right: "-10px", bottom: "-10px", fontSize: "6rem", opacity: "0.08", transform: "rotate(-15deg)" }}></ion-icon>
                  <div className="d-flex align-items-center mb-2 position-relative" style={{ zIndex: 1 }}>
                    <div className="icon-wrap me-2" style={{ color: "#fff", fontSize: "1.2rem" }}>
                      <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                    <span className="text-uppercase fw-bold" style={{ fontSize: "0.75rem", letterSpacing: "1px", color: "#cce5ff" }}>Our Solution</span>
                  </div>
                  <p className="mb-0 fw-semibold position-relative" style={{ fontSize: "0.95rem", lineHeight: "1.5", zIndex: 1 }}>
                    {item.solution}
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

export default EcommerceChallenges;
