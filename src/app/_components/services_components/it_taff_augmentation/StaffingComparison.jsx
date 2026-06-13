'use client';
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
      <style dangerouslySetInnerHTML={{__html: `
        .custom-comparison-table {
          border: 1px solid #e2e8f0;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
          background: #fff;
        }

        .custom-comparison-table table {
          width: 100%;
          border-collapse: collapse;
        }

        .custom-comparison-table thead tr {
          background: #0f172a;
          color: #fff;
        }

        .custom-comparison-table th {
          padding: 18px 24px;
          font-size: 1rem;
          font-weight: 700;
          border-bottom: none;
        }

        .custom-comparison-table td {
          padding: 18px 24px;
          font-size: 0.95rem;
          color: #334155;
          border-bottom: 1px solid #f1f5f9;
        }

        .custom-comparison-table tbody tr:last-child td {
          border-bottom: none;
        }

        .custom-comparison-table tbody tr:hover {
          background-color: #f8fafc;
        }

        @media (max-width: 767px) {
          .custom-comparison-table {
            border: none;
            box-shadow: none;
            background: transparent;
            overflow: visible;
          }

          .custom-comparison-table table, 
          .custom-comparison-table thead, 
          .custom-comparison-table tbody, 
          .custom-comparison-table th, 
          .custom-comparison-table td, 
          .custom-comparison-table tr { 
            display: block; 
            width: 100% !important;
          }
          
          .custom-comparison-table thead { 
            display: none !important;
          }
          
          .custom-comparison-table tr {
            margin-bottom: 20px;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            background: #fff;
            padding: 16px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
          }
          
          .custom-comparison-table td { 
            border: none !important;
            padding: 10px 0 !important;
            text-align: left !important;
          }

          .custom-comparison-table td:first-child {
            font-size: 1.1rem;
            font-weight: 700;
            border-bottom: 1px solid #f1f5f9 !important;
            padding-bottom: 12px !important;
            margin-bottom: 8px !important;
            color: #0f172a !important;
          }
          
          .custom-comparison-table td::before { 
            display: block;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 800;
            margin-bottom: 6px;
          }
          
          .custom-comparison-table td:nth-of-type(1)::before { 
            content: none !important;
          }
          
          .custom-comparison-table td:nth-of-type(2)::before { 
            content: "Staff Augmentation"; 
            color: #0083FF; 
          }
          
          .custom-comparison-table td:nth-of-type(3)::before { 
            content: "Traditional Hiring"; 
            color: #64748b; 
          }
        }
      `}} />

      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            STAFF AUGMENTATION <span className="c-primary">VS</span> TRADITIONAL HIRING
          </h2>
          <p className="slider-content-text">See how the staff augmentation model stacks up against traditional recruitment.</p>
        </div>

        <div className="custom-comparison-table">
          <table>
            <thead>
              <tr>
                <th className="text-start">Factor</th>
                <th style={{ color: "#0083FF" }}>Staff Augmentation</th>
                <th style={{ color: "#aaa" }}>Traditional Hiring</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index}>
                  <td className="text-start fw-semibold text-dark">
                    {item.factor}
                  </td>
                  <td className="fw-bold text-success text-center">
                    {item.staffAug}
                  </td>
                  <td className="text-muted text-center">
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
