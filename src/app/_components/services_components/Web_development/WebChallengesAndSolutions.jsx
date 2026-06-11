'use client'
import React from 'react';

const WebChallengesAndSolutions = () => {
  const challenges = [
    { challenge: "Low website traffic", solution: "SEO-friendly development" },
    { challenge: "Poor user experience", solution: "UX-focused website design" },
    { challenge: "Low conversion rates", solution: "Conversion optimization" },
    { challenge: "Slow website performance", solution: "Performance engineering" },
    { challenge: "Security vulnerabilities", solution: "Enterprise-grade security" },
    { challenge: "Limited scalability", solution: "Future-ready architecture" },
    { challenge: "Outdated websites", solution: "Website modernization" },
    { challenge: "Poor mobile experience", solution: "Responsive development" }
  ];

  return (
    <section className="web-challenges pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BUSINESS CHALLENGES <span className="c-primary">WE SOLVE</span>
          </h2>
          <p className="slider-content-text">Common Website & Digital Challenges & How We Solve Them</p>
        </div>

        <div className="table-responsive rounded-4 shadow-sm" style={{ border: "1px solid #eee", overflow: "hidden", borderRadius: "16px" }}>
          <table className="table table-hover align-middle mb-0" style={{ background: "#fff" }}>
            <thead>
              <tr style={{ background: "#0c1527", color: "#fff" }}>
                <th className="p-4" style={{ width: "50%", borderBottom: "none", fontSize: "1.1rem", fontWeight: "600", color: "#fff" }}>Business Challenge</th>
                <th className="p-4" style={{ width: "50%", borderBottom: "none", fontSize: "1.1rem", fontWeight: "600", color: "#0083FF" }}>TGAYS Solution</th>
              </tr>
            </thead>
            <tbody>
              {challenges.map((item, index) => (
                <tr key={index}>
                  <td className="p-4 fw-medium text-dark" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.95rem" }}>
                    <span style={{ marginRight: "10px", color: "#ff5e3a" }}>●</span> {item.challenge}
                  </td>
                  <td className="p-4" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.95rem", color: "#0083FF", fontWeight: "600" }}>
                    <span style={{ marginRight: "10px", fontWeight: "bold" }}>✓</span> {item.solution}
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

export default WebChallengesAndSolutions;
