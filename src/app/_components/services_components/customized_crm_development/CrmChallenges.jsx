'use client'
import React from 'react';
import { AlertCircle, Check } from 'lucide-react';

const CrmChallenges = () => {
  const challenges = [
    {
      title: "Poor Lead Management",
      challenge: "Leads are lost due to manual tracking, delayed entries, and disconnected systems.",
      solution: "Automated lead capture, intelligent sales assignment, nurturing workflows, and real-time tracking."
    },
    {
      title: "Low Sales Productivity",
      challenge: "Sales teams spend excessive time on repetitive administrative tasks and data entry rather than selling.",
      solution: "CRM sales automation modules that handle email updates, log interactions, and speed up conversions."
    },
    {
      title: "Fragmented Customer Data",
      challenge: "Customer information is scattered across emails, spreadsheets, and multiple billing platforms.",
      solution: "A centralized custom CRM dashboard providing a complete 360-degree customer view for all departments."
    },
    {
      title: "Inefficient Customer Support",
      challenge: "Slow support response times, duplicate tickets, and inconsistent post-purchase customer experiences.",
      solution: "Integrated customer service ticketing pipelines and automated issue resolution workflows."
    },
    {
      title: "Lack of Business Insights",
      challenge: "Decision-making is slowed by outdated reports and disconnected analytics tools.",
      solution: "Real-time custom reporting engines, BI dashboards, and advanced data visualization charts."
    }
  ];

  return (
    <section className="challenges-solutions-section pt100 pb70 bg-white" role="region" aria-labelledby="crm-challenges-heading">
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
          align-items: flex-start;
          gap: 12px;
          font-weight: 500;
          color: #1e293b;
        }

        .solution-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-weight: 500;
          color: #0f172a;
        }

        .challenge-icon {
          color: #ef4444;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .solution-icon {
          color: #0083FF;
          flex-shrink: 0;
          margin-top: 3px;
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
            content: "CRM Custom Solution"; 
            color: #0083FF; 
          }
        }
      `}} />

      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="crm-challenges-heading" className="heading-title text-uppercase" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            Business Challenges Our <span className="c-primary">CRM Solutions Solve</span>
          </h2>
          <p className="slider-content-text">Break down process hurdles and accelerate efficiency across sales, support, and marketing teams.</p>
        </div>

        <div className="custom-responsive-table">
          <table>
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Business Challenge</th>
                <th style={{ width: "50%" }}>Custom CRM Solution</th>
              </tr>
            </thead>
            <tbody>
              {challenges.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="challenge-item">
                      <AlertCircle className="challenge-icon" size={18} />
                      <div>
                        <strong className="text-dark d-block mb-1" style={{ fontSize: "1rem", fontWeight: "700" }}>{item.title}</strong>
                        <span style={{ fontSize: "0.9rem", color: "#555" }}>{item.challenge}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="solution-item">
                      <Check className="solution-icon" size={18} />
                      <div>
                        <strong className="text-primary d-block mb-1" style={{ fontSize: "1rem", fontWeight: "700", color: "#0083FF" }}>TGAYS Automated Architecture</strong>
                        <span style={{ fontSize: "0.9rem", color: "#444" }}>{item.solution}</span>
                      </div>
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

export default CrmChallenges;
