'use client'
import React from 'react';

const HealthcareComparison = () => {
  const comparisonData = [
    { feature: "Patient Records", traditional: "Paper-Based & Disconnected", tgays: "Digital EHR/EMR Integration" },
    { feature: "Appointment Management", traditional: "Manual, Prone to Errors", tgays: "Fully Automated & Self-Service" },
    { feature: "Communication", traditional: "Phone-Based & Siloed", tgays: "Omnichannel Patient Engagement" },
    { feature: "Reporting & Insights", traditional: "Delayed & Inaccurate", tgays: "Real-Time Interactive Analytics" },
    { feature: "Security & Compliance", traditional: "Limited Data Protection", tgays: "Enterprise-Grade HIPAA-Ready Security" },
    { feature: "System Scalability", traditional: "Highly Restricted", tgays: "Cloud-Based Unlimited Growth" },
    { feature: "Patient Experience", traditional: "Reactive & Frustrating", tgays: "Personalized & Proactive" }
  ];

  return (
    <section className="comparison-section pt100 pb100 bg-light">
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 767px) {
          .responsive-health-table {
            border: none !important;
            box-shadow: none !important;
            background: transparent !important;
            overflow: visible !important;
          }

          .responsive-health-table table, 
          .responsive-health-table thead, 
          .responsive-health-table tbody, 
          .responsive-health-table th, 
          .responsive-health-table td, 
          .responsive-health-table tr { 
            display: block; 
            width: 100% !important;
          }
          
          .responsive-health-table thead { 
            display: none !important;
          }
          
          .responsive-health-table tr {
            margin-bottom: 20px;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            background: #fff;
            padding: 16px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
          }
          
          .responsive-health-table td { 
            border: none !important;
            padding: 12px 0 !important;
            text-align: left !important;
            background: transparent !important;
          }

          .responsive-health-table td:first-child {
            font-size: 1.2rem !important;
            font-weight: 800 !important;
            border-bottom: 1px solid #f1f5f9 !important;
            padding-bottom: 12px !important;
            margin-bottom: 8px !important;
            color: #0f172a !important;
          }
          
          .responsive-health-table td::before { 
            display: block;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 800;
            margin-bottom: 6px;
          }
          
          .responsive-health-table td:nth-of-type(1)::before { 
            content: none !important;
          }
          
          .responsive-health-table td:nth-of-type(2)::before { 
            content: "Traditional Approach"; 
            color: #64748b; 
          }
          
          .responsive-health-table td:nth-of-type(3)::before { 
            content: "TGAYS Healthcare Solutions"; 
            color: #0083FF; 
          }
        }
      `}} />

      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <span className="badge mb-3 text-uppercase" style={{ background: "rgba(0, 131, 255, 0.1)", color: "#0083FF", fontWeight: "700", padding: "8px 16px", letterSpacing: "1px", borderRadius: "30px" }}>
              The TGAYS Advantage
            </span>
            <h2 className="heading-title mb-4">
              Digital Healthcare <span className="c-primary">Comparison</span>
            </h2>
            <p className="text-muted" style={{ fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
              See how upgrading to a modern digital healthcare platform transforms clinical and operational capabilities.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="responsive-health-table rounded-4 shadow-sm" style={{ border: "1px solid #eaeaea", background: "#fff", overflow: "hidden" }}>
              <table className="table mb-0 align-middle">
                <thead>
                  <tr style={{ background: "#f8fafd" }}>
                    <th className="py-4 px-4 text-dark" style={{ width: "34%", fontSize: "1.1rem", borderBottom: "2px solid #eaeaea" }}>Capability</th>
                    <th className="py-4 px-4 text-muted" style={{ width: "33%", fontSize: "1.1rem", borderBottom: "2px solid #eaeaea", background: "#fff5f5" }}>Traditional Approach</th>
                    <th className="py-4 px-4 text-white position-relative" style={{ width: "33%", fontSize: "1.1rem", borderBottom: "2px solid #0056b3", background: "linear-gradient(135deg, #0083FF 0%, #0056b3 100%)" }}>
                      TGAYS Healthcare Solutions
                      <div className="position-absolute w-100 h-100 top-0 start-0" style={{ background: "url('https://www.transparenttextures.com/patterns/cubes.png')", opacity: "0.1" }}></div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="transition-all" style={{ borderBottom: index !== comparisonData.length - 1 ? "1px solid #eaeaea" : "none" }}>
                      <td className="py-4 px-4 fw-bold text-dark" style={{ fontSize: "0.95rem" }}>{row.feature}</td>
                      <td className="py-4 px-4 text-muted position-relative" style={{ fontSize: "0.95rem", background: "#fffafa" }}>
                        <ion-icon name="close-circle" style={{ color: "#ff5e3a", marginRight: "8px", verticalAlign: "middle" }}></ion-icon>
                        {row.traditional}
                      </td>
                      <td className="py-4 px-4 fw-bold" style={{ fontSize: "0.95rem", color: "#0083FF", background: "#f4f9ff" }}>
                        <ion-icon name="checkmark-circle" style={{ color: "#0083FF", marginRight: "8px", verticalAlign: "middle", fontSize: "1.1rem" }}></ion-icon>
                        {row.tgays}
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

export default HealthcareComparison;
