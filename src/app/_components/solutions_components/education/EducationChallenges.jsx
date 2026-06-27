'use client'
import React from 'react';

const EducationChallenges = () => {
  const challenges = [
    {
      challenge: "Manual Administration",
      impact: "Traditional administration consumes significant time and resources.",
      solution: "Workflow automation and centralized management.",
      icon: "file-tray-stacked-outline"
    },
    {
      challenge: "Data Silos",
      impact: "Information is often scattered across different departments.",
      solution: "Unified Education Management Platform.",
      icon: "server-outline"
    },
    {
      challenge: "Poor Parent Communication",
      impact: "Parents need real-time visibility into student progress.",
      solution: "Integrated communication and notification systems.",
      icon: "chatbubbles-outline"
    },
    {
      challenge: "Attendance Monitoring",
      impact: "Manual attendance tracking is inefficient and prone to errors.",
      solution: "Automated attendance management and tracking.",
      icon: "hand-right-outline"
    },
    {
      challenge: "Complex Reporting",
      impact: "Generating academic and financial reports can be time-consuming.",
      solution: "Real-time dashboards and advanced analytics.",
      icon: "bar-chart-outline"
    }
  ];

  return (
    <section className="challenges-section pt100 pb70 bg-white" role="region" aria-labelledby="challenges-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="challenges-heading" className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800" }}>
            BUSINESS CHALLENGES <span className="c-primary">WE SOLVE</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px" }}>
            Educational institutions often struggle with fragmented systems and manual processes. We provide the solutions to overcome these operational hurdles.
          </p>
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
                    <p className="text-muted mb-2" style={{ fontSize: "0.95rem" }}><strong>The Challenge:</strong> {item.impact}</p>
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

export default EducationChallenges;
