'use client'
import React from 'react';

const AppSupportChallenges = () => {
  const challenges = [
    {
      challenge: "Frequent Application Downtime",
      impact: "Unexpected outages impact revenue and customer trust.",
      solution: "Continuous monitoring and rapid incident response.",
      icon: "warning-outline"
    },
    {
      challenge: "Slow Application Performance",
      impact: "Poor performance leads to user frustration and lost business opportunities.",
      solution: "Performance optimization and infrastructure tuning.",
      icon: "speedometer-outline"
    },
    {
      challenge: "Security Vulnerabilities",
      impact: "Unpatched systems increase cybersecurity risks.",
      solution: "Regular updates, security audits, and vulnerability management.",
      icon: "lock-closed-outline"
    },
    {
      challenge: "Limited Internal Resources",
      impact: "Many businesses lack dedicated support teams.",
      solution: "Flexible support models and dedicated experts.",
      icon: "people-outline"
    },
    {
      challenge: "Growing User Demand",
      impact: "Applications struggle to scale with business growth.",
      solution: "Capacity planning and scalability optimization.",
      icon: "trending-up-outline"
    },
    {
      challenge: "High Maintenance Costs",
      impact: "Managing support internally can become expensive.",
      solution: "Cost-effective offshore support services.",
      icon: "cash-outline"
    }
  ];

  return (
    <section className="challenges-section pt100 pb70 bg-light" role="region" aria-labelledby="challenges-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="challenges-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BUSINESS CHALLENGES <span className="c-primary">WE SOLVE</span>
          </h2>
          <p className="slider-content-text">Addressing the most critical pain points in application management to keep your business running smoothly.</p>
        </div>

        <div className="row justify-content-center">
          {challenges.map((item, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="challenge-card p-4 rounded-4 shadow-sm h-100 bg-white" style={{ borderLeft: "4px solid #0083FF", transition: "transform 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div className="d-flex align-items-start">
                  <div className="icon-wrap me-3 text-primary" style={{ fontSize: "2rem", color: "#0083FF" }}>
                    <ion-icon name={item.icon}></ion-icon>
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-2 text-dark">{item.challenge}</h3>
                    <p className="text-muted mb-2" style={{ fontSize: "0.95rem" }}><strong>The Impact:</strong> {item.impact}</p>
                    <p className="text-primary fw-semibold mb-0" style={{ fontSize: "0.95rem", color: "#0083FF !important" }}>
                      <ion-icon name="checkmark-done-outline" style={{ verticalAlign: "middle", marginRight: "5px" }}></ion-icon>
                      Solution: {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppSupportChallenges;
