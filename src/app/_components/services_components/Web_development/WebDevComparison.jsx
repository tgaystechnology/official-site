'use client'
import React from 'react';

const WebDevComparison = () => {
  const comparisonData = [
    { feature: "Custom Development", tgays: "✓", traditional: "Limited" },
    { feature: "SEO-Friendly Development", tgays: "✓", traditional: "Often Basic" },
    { feature: "AI Search Optimization", tgays: "✓", traditional: "Rare" },
    { feature: "Scalable Architecture", tgays: "✓", traditional: "Limited" },
    { feature: "Dedicated Support", tgays: "✓", traditional: "Varies" },
    { feature: "Enterprise Expertise", tgays: "✓", traditional: "Limited" },
    { feature: "Modern Technology Stack", tgays: "✓", traditional: "Varies" },
    { feature: "Conversion-Focused Design", tgays: "✓", traditional: "Often Overlooked" }
  ];

  return (
    <section className="web-comparison pt100 pb70" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            TGAYS TECHNOLOGY <span className="c-primary">VS</span> TRADITIONAL AGENCIES
          </h2>
          <p className="slider-content-text">See how our business-centric development model compares to traditional agencies.</p>
        </div>

        <div className="table-responsive rounded-4 shadow-sm" style={{ border: "1px solid #eee", overflow: "hidden", borderRadius: "12px" }}>
          <table className="table table-hover align-middle mb-0 text-center" style={{ background: "#fff" }}>
            <thead>
              <tr style={{ background: "#0c1527", color: "#fff" }}>
                <th className="p-4 text-start" style={{ borderBottom: "none", fontSize: "1.1rem", fontWeight: "600", color: "#fff" }}>Feature</th>
                <th className="p-4" style={{ borderBottom: "none", fontSize: "1.1rem", fontWeight: "600", color: "#0083FF" }}>TGAYS Technology</th>
                <th className="p-4" style={{ borderBottom: "none", fontSize: "1.1rem", fontWeight: "600", color: "#aaa" }}>Traditional Agencies</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index}>
                  <td className="p-4 text-start fw-semibold text-dark" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.95rem" }}>
                    {item.feature}
                  </td>
                  <td className="p-4 fw-bold text-success" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "1.2rem" }}>
                    {item.tgays}
                  </td>
                  <td className="p-4 text-muted" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.95rem" }}>
                    {item.traditional}
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

export default WebDevComparison;
