'use client'
import React from 'react';

const StaffingComparison = () => {
  const comparisonData = [
    { factor: "Hiring Time", staffAug: "Days", traditional: "Months" },
    { factor: "Recruitment Cost", staffAug: "Lower", traditional: "Higher" },
    { factor: "Flexibility", staffAug: "High", traditional: "Limited" },
    { factor: "Scalability", staffAug: "On-Demand", traditional: "Slow" },
    { factor: "Project-Based Staffing", staffAug: "Yes", traditional: "Difficult" },
    { factor: "Long-Term Commitment", staffAug: "No", traditional: "Yes" },
    { factor: "Access to Global Talent", staffAug: "Yes", traditional: "Limited" }
  ];

  return (
    <section className="staffing-comparison-section pt100 pb70" style={{ background: "#fcfcfc" }}>
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            STAFF AUGMENTATION <span className="c-primary">VS</span> TRADITIONAL HIRING
          </h2>
          <p className="slider-content-text">See how the staff augmentation model stacks up against traditional recruitment.</p>
        </div>

        <div className="table-responsive rounded-4 shadow-sm" style={{ border: "1px solid #eee", overflow: "hidden", borderRadius: "12px" }}>
          <table className="table table-hover align-middle mb-0 text-center" style={{ background: "#fff" }}>
            <thead>
              <tr style={{ background: "#0c1527", color: "#fff" }}>
                <th className="p-4 text-start" style={{ borderBottom: "none", fontSize: "1.1rem", fontWeight: "600", color: "#fff" }}>Factor</th>
                <th className="p-4" style={{ borderBottom: "none", fontSize: "1.1rem", fontWeight: "600", color: "#0083FF" }}>Staff Augmentation</th>
                <th className="p-4" style={{ borderBottom: "none", fontSize: "1.1rem", fontWeight: "600", color: "#aaa" }}>Traditional Hiring</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index}>
                  <td className="p-4 text-start fw-semibold text-dark" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.95rem" }}>
                    {item.factor}
                  </td>
                  <td className="p-4 fw-bold text-success" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.95rem" }}>
                    {item.staffAug}
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

export default StaffingComparison;
