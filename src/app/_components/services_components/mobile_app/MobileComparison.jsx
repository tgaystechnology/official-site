'use client'
import React from 'react';

const MobileComparison = () => {
  const comparisonData = [
    { feature: "Performance", native: "Excellent", react: "High", flutter: "High" },
    { feature: "Development Speed", native: "Medium", react: "Fast", flutter: "Fast" },
    { feature: "Cost", native: "Higher", react: "Moderate", flutter: "Moderate" },
    { feature: "Cross Platform", native: "No", react: "Yes", flutter: "Yes" },
    { feature: "User Experience", native: "Excellent", react: "Very Good", flutter: "Excellent" },
    { feature: "Maintenance", native: "Higher", react: "Lower", flutter: "Lower" }
  ];

  return (
    <section className="mobile-comparison-section pt100 pb100 bg-white">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            MOBILE APP <span className="c-primary">DEVELOPMENT COMPARISON</span>
          </h2>
          <p className="slider-content-text">Understand the differences between native and leading cross-platform frameworks</p>
        </div>

        <div className="table-responsive rounded-4 shadow-sm mb-5" style={{ border: "1px solid #eee", overflow: "hidden", borderRadius: "12px" }}>
          <table className="table table-hover align-middle mb-0" style={{ background: "#fff" }}>
            <thead>
              <tr style={{ background: "#0c1527", color: "#fff" }}>
                <th className="p-4" style={{ borderBottom: "none", fontSize: "1.1rem", fontWeight: "600", color: "#fff" }}>Feature</th>
                <th className="p-4 text-center" style={{ borderBottom: "none", fontSize: "1.1rem", fontWeight: "600", color: "#fff" }}>Native Apps</th>
                <th className="p-4 text-center" style={{ borderBottom: "none", fontSize: "1.1rem", fontWeight: "600", color: "#0083FF" }}>React Native</th>
                <th className="p-4 text-center" style={{ borderBottom: "none", fontSize: "1.1rem", fontWeight: "600", color: "#ff5e3a" }}>Flutter</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <td className="p-4 fw-bold text-dark" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.95rem" }}>
                    {row.feature}
                  </td>
                  <td className="p-4 text-center text-muted" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.95rem" }}>
                    {row.native}
                  </td>
                  <td className="p-4 text-center text-muted" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.95rem", fontWeight: "500" }}>
                    {row.react}
                  </td>
                  <td className="p-4 text-center text-muted" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.95rem", fontWeight: "500" }}>
                    {row.flutter}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-4" 
          style={{ 
            background: "rgba(0, 131, 255, 0.04)", 
            borderLeft: "5px solid #0083ff", 
            borderRadius: "8px" 
          }}>
          <h4 className="fw-bold mb-2 text-dark" style={{ fontSize: "1.1rem" }}>
            <span style={{ marginRight: "8px" }}>💡</span> Expert Recommendation
          </h4>
          <p className="mb-0 text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
            For startups seeking faster launches, React Native and Flutter are often ideal. Enterprises requiring platform-specific functionality may benefit from native development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileComparison;
