'use client';
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
            content: "Native Apps"; 
            color: #64748b; 
          }
          
          .custom-comparison-table td:nth-of-type(3)::before { 
            content: "React Native"; 
            color: #0083FF; 
          }

          .custom-comparison-table td:nth-of-type(4)::before { 
            content: "Flutter"; 
            color: #ff5e3a; 
          }
        }
      `}} />

      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            MOBILE APP <span className="c-primary">DEVELOPMENT COMPARISON</span>
          </h2>
          <p className="slider-content-text">Understand the differences between native and leading cross-platform frameworks</p>
        </div>

        <div className="custom-comparison-table mb-5">
          <table>
            <thead>
              <tr>
                <th className="text-start">Feature</th>
                <th style={{ color: "#fff" }}>Native Apps</th>
                <th style={{ color: "#0083FF" }}>React Native</th>
                <th style={{ color: "#ff5e3a" }}>Flutter</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <td className="text-start fw-bold text-dark">
                    {row.feature}
                  </td>
                  <td className="text-center text-muted">
                    {row.native}
                  </td>
                  <td className="text-center text-muted">
                    {row.react}
                  </td>
                  <td className="text-center text-muted">
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
