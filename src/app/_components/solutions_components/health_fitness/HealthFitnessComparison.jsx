'use client'
import React from 'react';

const HealthFitnessComparison = () => {
  const comparisonData = [
    {
      capability: "Customer Reach",
      traditional: "Local Only",
      digital: "Global Audience"
    },
    {
      capability: "Revenue Model",
      traditional: "Limited Memberships",
      digital: "Multiple Revenue Streams"
    },
    {
      capability: "User Engagement",
      traditional: "In-Person Only",
      digital: "24/7 Digital Access"
    },
    {
      capability: "Data Insights",
      traditional: "Minimal",
      digital: "Real-Time Analytics"
    },
    {
      capability: "Personalization",
      traditional: "Manual",
      digital: "AI-Powered"
    },
    {
      capability: "Scalability",
      traditional: "Limited",
      digital: "Highly Scalable"
    },
    {
      capability: "Customer Retention",
      traditional: "Moderate",
      digital: "Enhanced Through Technology"
    }
  ];

  return (
    <section className="comparison-section pt100 pb100 bg-light">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            TRADITIONAL VS <span className="c-primary">DIGITAL FITNESS</span>
          </h2>
          <p className="slider-content-text">See how digital transformation elevates a traditional fitness business into a scalable, data-driven enterprise.</p>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="table-responsive rounded-4 shadow-sm" style={{ border: "1px solid #eee", background: "#fff", overflow: "hidden" }}>
              <table className="table table-hover mb-0" style={{ minWidth: "700px" }}>
                <thead>
                  <tr>
                    <th scope="col" className="p-4 bg-white text-dark" style={{ width: "30%", fontSize: "1.1rem", borderBottom: "2px solid #eee" }}>Capability</th>
                    <th scope="col" className="p-4" style={{ width: "35%", background: "#f8f9fa", color: "#6c757d", fontSize: "1.1rem", borderBottom: "2px solid #eee" }}>Traditional Fitness Model</th>
                    <th scope="col" className="p-4 text-white" style={{ width: "35%", background: "#0083FF", fontSize: "1.1rem", borderBottom: "2px solid #006bce" }}>TGAYS Digital Solutions</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index}>
                      <td className="p-4 text-dark fw-bold" style={{ verticalAlign: "middle", borderBottom: "1px solid #f5f5f5" }}>
                        {row.capability}
                      </td>
                      <td className="p-4 text-muted" style={{ background: "#f8f9fa", verticalAlign: "middle", borderBottom: "1px solid #eee" }}>
                        <ion-icon name="close-circle" style={{ color: "#dc3545", marginRight: "8px", verticalAlign: "text-bottom" }}></ion-icon>
                        {row.traditional}
                      </td>
                      <td className="p-4 fw-semibold" style={{ background: "rgba(0, 131, 255, 0.05)", color: "#0083FF", verticalAlign: "middle", borderBottom: "1px solid #e6f2ff" }}>
                        <ion-icon name="checkmark-circle" style={{ color: "#0083FF", marginRight: "8px", verticalAlign: "text-bottom" }}></ion-icon>
                        {row.digital}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthFitnessComparison;
