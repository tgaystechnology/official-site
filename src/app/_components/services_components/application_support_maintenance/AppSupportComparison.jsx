'use client'
import React from 'react';

const AppSupportComparison = () => {
  const comparisonData = [
    { feature: "24x7 Availability", inHouse: "Limited", outsourced: "Yes" },
    { feature: "Cost Efficiency", inHouse: "High Cost", outsourced: "Optimized Cost" },
    { feature: "Scalability", inHouse: "Limited", outsourced: "Highly Scalable" },
    { feature: "Specialized Expertise", inHouse: "Variable", outsourced: "Dedicated Experts" },
    { feature: "SLA-Based Support", inHouse: "Rare", outsourced: "Yes" },
    { feature: "Continuous Monitoring", inHouse: "Limited", outsourced: "Advanced Monitoring" },
    { feature: "Security Management", inHouse: "Internal Dependency", outsourced: "Dedicated Processes" },
    { feature: "Global Support Coverage", inHouse: "Difficult", outsourced: "Available" }
  ];

  return (
    <section className="app-support-comparison pt100 pb70 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            IN-HOUSE VS <span className="c-primary">OUTSOURCED SUPPORT</span>
          </h2>
          <p className="slider-content-text">See how partnering with TGAYS Managed Support delivers better reliability, scalability, and cost efficiency compared to building an internal team.</p>
        </div>

        <div className="table-responsive rounded-4 shadow-sm mb-5" style={{ border: "1px solid #eee", overflow: "hidden", borderRadius: "12px", maxWidth: "900px", margin: "0 auto" }}>
          <table className="table table-hover align-middle mb-0 text-center" style={{ background: "#fff" }}>
            <thead>
              <tr style={{ background: "#0f172a", color: "#fff" }}>
                <th className="p-3 text-start" style={{ borderBottom: "none", fontSize: "1rem", color: "#fff" }}>Feature</th>
                <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", color: "#ff5e3a" }}>In-House Team</th>
                <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", color: "#0083FF" }}>TGAYS Managed Support</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index}>
                  <td className="p-3 text-start fw-bold text-dark" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.95rem" }}>
                    {item.feature}
                  </td>
                  <td className="p-3 text-muted fw-semibold" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem" }}>
                    {item.inHouse}
                  </td>
                  <td className="p-3 fw-bold text-primary" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem" }}>
                    {item.outsourced}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="quick-answer-box p-4 text-center mx-auto" style={{ background: "rgba(0, 131, 255, 0.03)", border: "1px solid rgba(0, 131, 255, 0.15)", borderRadius: "16px", maxWidth: "900px", boxShadow: "rgba(0, 0, 0, 0.01) 0px 10px 20px" }}>
          <h4 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0083FF", marginBottom: "8px" }}>
            <ion-icon name="bulb-outline" style={{ verticalAlign: "middle", marginRight: "8px" }}></ion-icon>
            Expert Insight
          </h4>
          <p className="mb-0 text-muted" style={{ fontSize: "1rem", color: "#444", fontStyle: "italic", lineHeight: "1.6" }}>
            "According to industry research, proactive application monitoring can reduce critical downtime by up to 70% while significantly improving customer satisfaction and operational efficiency."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppSupportComparison;
