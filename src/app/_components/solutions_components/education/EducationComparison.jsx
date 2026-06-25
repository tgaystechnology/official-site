'use client'
import React from 'react';

const EducationComparison = () => {
  const comparisonData = [
    {
      feature: "Student Records",
      traditional: "Paper-Based & Scattered",
      digital: "Centralized & Secure"
    },
    {
      feature: "Attendance Tracking",
      traditional: "Manual Roll Calls",
      digital: "Automated & Instant"
    },
    {
      feature: "Fee Management",
      traditional: "Time-Consuming Queues",
      digital: "Digital & Automated"
    },
    {
      feature: "Reporting",
      traditional: "Delayed & Manual",
      digital: "Real-Time Dashboards"
    },
    {
      feature: "Parent Communication",
      traditional: "Limited & Periodic",
      digital: "Instant Notifications"
    },
    {
      feature: "Data Accuracy",
      traditional: "Error-Prone",
      digital: "High Precision"
    },
    {
      feature: "Accessibility",
      traditional: "On-Premise Only",
      digital: "Anywhere, Anytime"
    }
  ];

  return (
    <section className="comparison-section pt100 pb100 bg-light">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.5rem", fontWeight: "800" }}>
            EMS VS <span className="c-primary">TRADITIONAL ADMINISTRATION</span>
          </h2>
          <p className="slider-content-text mx-auto" style={{ maxWidth: "800px" }}>
            See how upgrading to a digital Education Management System transforms every aspect of institutional administration.
          </p>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="table-responsive rounded-4 shadow-sm" style={{ border: "1px solid #eee", background: "#fff", overflow: "hidden" }}>
              <table className="table table-hover mb-0" style={{ minWidth: "700px" }}>
                <thead>
                  <tr>
                    <th scope="col" className="p-4 bg-white text-dark" style={{ width: "30%", fontSize: "1.1rem", borderBottom: "2px solid #eee" }}>Feature</th>
                    <th scope="col" className="p-4" style={{ width: "35%", background: "#f8f9fa", color: "#6c757d", fontSize: "1.1rem", borderBottom: "2px solid #eee" }}>Traditional Administration</th>
                    <th scope="col" className="p-4 text-white" style={{ width: "35%", background: "#0083FF", fontSize: "1.1rem", borderBottom: "2px solid #006bce" }}>TGAYS Education System</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index}>
                      <td className="p-4 text-dark fw-bold" style={{ verticalAlign: "middle", borderBottom: "1px solid #f5f5f5" }}>
                        {row.feature}
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

export default EducationComparison;
