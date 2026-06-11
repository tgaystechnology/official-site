'use client'
import React from 'react';

const AIChallengesAndSolutions = () => {
  const data = [
    { challenge: "High operational costs", solution: "Intelligent automation" },
    { challenge: "Slow customer response times", solution: "AI chatbots and virtual assistants" },
    { challenge: "Manual repetitive tasks", solution: "AI workflow automation" },
    { challenge: "Poor business forecasting", solution: "Predictive analytics" },
    { challenge: "Low conversion rates", solution: "AI personalization engines" },
    { challenge: "Data overload", solution: "AI-powered insights" },
    { challenge: "Customer retention issues", solution: "Intelligent engagement systems" },
    { challenge: "Scalability challenges", solution: "AI-driven process optimization" }
  ];

  return (
    <section className="challenges-solutions-section pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BUSINESS CHALLENGES <span className="c-primary">WE SOLVE</span>
          </h2>
          <p className="slider-content-text">How we apply AI solutions to resolve common business inefficiencies</p>
        </div>

        <div className="table-responsive rounded-4 shadow-sm" style={{ border: "1px solid #eee", overflow: "hidden", borderRadius: "12px" }}>
          <table className="table table-hover align-middle mb-0" style={{ background: "#fff" }}>
            <thead>
              <tr style={{ background: "#0c1527", color: "#fff" }}>
                <th className="p-4" style={{ width: "50%", borderBottom: "none", fontSize: "1.1rem", fontWeight: "600", color: "#fff" }}>Business Challenge</th>
                <th className="p-4" style={{ width: "50%", borderBottom: "none", fontSize: "1.1rem", fontWeight: "600", color: "#0083FF" }}>AI Solution</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="p-4 fw-medium text-dark" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.95rem" }}>
                    <span style={{ marginRight: "10px", color: "#ff5e3a" }}>●</span> {item.challenge}
                  </td>
                  <td className="p-4" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.95rem", color: "#111", fontWeight: "500" }}>
                    <span style={{ marginRight: "10px", color: "#0083FF", fontWeight: "bold" }}>✓</span> {item.solution}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AIChallengesAndSolutions;
