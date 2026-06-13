'use client';
import React from 'react';
import { AlertCircle, Check } from 'lucide-react';

const ChallengesAndSolutions = () => {
  const data = [
    { challenge: "Long hiring cycles", solution: "Immediate access to vetted developers" },
    { challenge: "Skill shortages", solution: "Specialized technical talent on demand" },
    { challenge: "Rising recruitment costs", solution: "Cost-effective augmentation model" },
    { challenge: "Project delays", solution: "Rapid team scaling" },
    { challenge: "Resource gaps", solution: "Flexible staffing solutions" },
    { challenge: "Technology expertise shortages", solution: "Access to niche specialists" },
    { challenge: "Limited scalability", solution: "On-demand resource expansion" },
    { challenge: "Budget constraints", solution: "Optimized staffing costs" }
  ];

  return (
    <section className="challenges-solutions-section pt100 pb70 bg-white">
      <style dangerouslySetInnerHTML={{__html: `
        .custom-responsive-table {
          border: 1px solid #e2e8f0;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
          background: #fff;
        }

        .custom-responsive-table table {
          width: 100%;
          border-collapse: collapse;
        }

        .custom-responsive-table thead tr {
          background: #0f172a;
          color: #fff;
        }

        .custom-responsive-table th {
          padding: 18px 24px;
          font-size: 1rem;
          font-weight: 700;
          border-bottom: none;
        }

        .custom-responsive-table td {
          padding: 18px 24px;
          font-size: 0.95rem;
          color: #334155;
          border-bottom: 1px solid #f1f5f9;
        }

        .custom-responsive-table tbody tr:last-child td {
          border-bottom: none;
        }

        .custom-responsive-table tbody tr:hover {
          background-color: #f8fafc;
        }

        .challenge-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          color: #1e293b;
        }

        .solution-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          color: #0f172a;
        }

        .challenge-icon {
          color: #ef4444;
          flex-shrink: 0;
        }

        .solution-icon {
          color: #3b82f6;
          flex-shrink: 0;
        }

        @media (max-width: 767px) {
          .custom-responsive-table {
            border: none;
            box-shadow: none;
            background: transparent;
            overflow: visible;
          }

          .custom-responsive-table table, 
          .custom-responsive-table thead, 
          .custom-responsive-table tbody, 
          .custom-responsive-table th, 
          .custom-responsive-table td, 
          .custom-responsive-table tr { 
            display: block; 
            width: 100% !important;
          }
          
          .custom-responsive-table thead { 
            display: none !important;
          }
          
          .custom-responsive-table tr {
            margin-bottom: 20px;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            background: #fff;
            padding: 16px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
          }
          
          .custom-responsive-table td { 
            border: none !important;
            padding: 10px 0 !important;
          }

          .custom-responsive-table td:first-child {
            border-bottom: 1px dashed #e2e8f0 !important;
            padding-bottom: 14px !important;
            margin-bottom: 8px !important;
          }
          
          .custom-responsive-table td::before { 
            display: block;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 800;
            margin-bottom: 6px;
          }
          
          .custom-responsive-table td:nth-of-type(1)::before { 
            content: "Business Challenge"; 
            color: #ef4444; 
          }
          .custom-responsive-table td:nth-of-type(2)::before { 
            content: "TGAYS Solution"; 
            color: #3b82f6; 
          }
        }
      `}} />

      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            BUSINESS CHALLENGES <span className="c-primary">WE SOLVE</span>
          </h2>
          <p className="slider-content-text">Common Talent Challenges and Our Solutions</p>
        </div>

        <div className="custom-responsive-table">
          <table>
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Business Challenge</th>
                <th style={{ width: "50%", color: "#0083FF" }}>TGAYS Solution</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="challenge-item">
                      <AlertCircle size={18} className="challenge-icon" />
                      <span>{item.challenge}</span>
                    </div>
                  </td>
                  <td>
                    <div className="solution-item">
                      <Check size={18} className="solution-icon" />
                      <span>{item.solution}</span>
                    </div>
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

export default ChallengesAndSolutions;
