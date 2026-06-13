'use client';
import React from 'react';
import { Check } from 'lucide-react';

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

        .comparison-check-icon {
          color: #10b981;
          display: inline-block;
          vertical-align: middle;
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
            content: "TGAYS Technology"; 
            color: #0083FF; 
          }
          
          .custom-comparison-table td:nth-of-type(3)::before { 
            content: "Traditional Agencies"; 
            color: #64748b; 
          }
        }
      `}} />

      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            TGAYS TECHNOLOGY <span className="c-primary">VS</span> TRADITIONAL AGENCIES
          </h2>
          <p className="slider-content-text">See how our business-centric development model compares to traditional agencies.</p>
        </div>

        <div className="custom-comparison-table">
          <table>
            <thead>
              <tr>
                <th className="text-start">Feature</th>
                <th style={{ color: "#0083FF" }}>TGAYS Technology</th>
                <th style={{ color: "#aaa" }}>Traditional Agencies</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((item, index) => (
                <tr key={index}>
                  <td className="text-start fw-semibold text-dark">
                    {item.feature}
                  </td>
                  <td className="text-center">
                    <Check size={20} className="comparison-check-icon" strokeWidth={3} />
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

export default WebDevComparison;
