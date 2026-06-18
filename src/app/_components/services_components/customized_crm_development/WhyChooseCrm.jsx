'use client'
import React from 'react';

const WhyChooseCrm = () => {
  const comparisonData = [
    { factor: "Business Fit", custom: "100% Customized", typical: "Limited Customization" },
    { factor: "Scalability", custom: "Highly Scalable", typical: "Restricted" },
    { factor: "Integrations", custom: "Unlimited", typical: "Limited" },
    { factor: "Ownership", custom: "Full Ownership", typical: "Subscription Based" },
    { factor: "Security Control", custom: "Complete", typical: "Vendor Controlled" },
    { factor: "Long-Term Cost", custom: "Lower", typical: "Higher Over Time" },
    { factor: "Competitive Advantage", custom: "High", typical: "Low" }
  ];

  const advantages = [
    {
      title: "Business-Centric CRM Development",
      desc: "We focus on solving real business challenges rather than simply developing software."
    },
    {
      title: "Tailored CRM Architecture",
      desc: "Every CRM is designed according to your processes, goals, users, and operational structure."
    },
    {
      title: "Industry-Specific Expertise",
      desc: "Our CRM specialists understand the unique needs of healthcare, real estate, finance, retail, SaaS, and service-based industries."
    },
    {
      title: "Dedicated CRM Development Teams",
      desc: "Hire CRM developers in India who work as an extension of your internal team."
    },
    {
      title: "Scalable Technology Framework",
      desc: "Build a CRM today that supports your growth for years to come."
    },
    {
      title: "Transparent Development Process",
      desc: "Regular updates, agile delivery, sprint reviews, and complete project visibility."
    }
  ];

  return (
    <section className="why-choose-offshore pt100 pb70 bg-white" role="region" aria-labelledby="why-choose-crm-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="why-choose-crm-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHY CHOOSE TGAYS TECHNOLOGY FOR <span className="c-primary">CUSTOM CRM DEVELOPMENT</span>
          </h2>
          <p className="slider-content-text">
            As a trusted CRM software development company in India, we combine technical expertise, business intelligence, and user-focused design to build CRM solutions that improve productivity, increase customer retention, and generate higher revenue.
          </p>
        </div>

        <div className="row align-items-start mt-5">
          {/* Table comparison Column */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h3 className="h4 fw-bold text-dark mb-4" style={{ fontSize: "1.4rem" }}>Custom CRM vs Off-the-Shelf CRM</h3>
            <div className="table-responsive rounded-4 shadow-sm" style={{ border: "1px solid #eee", overflow: "hidden", borderRadius: "12px" }}>
              <table className="table table-hover align-middle mb-0 text-center" style={{ background: "#fff" }}>
                <thead>
                  <tr style={{ background: "#0c1527", color: "#fff" }}>
                    <th className="p-3 text-start" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#fff" }}>Feature</th>
                    <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#0083FF" }}>Custom CRM</th>
                    <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#aaa" }}>Off-the-Shelf CRM</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index}>
                      <td className="p-3 text-start fw-semibold text-dark" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem" }}>
                        {item.factor}
                      </td>
                      <td className="p-3 fw-bold text-success" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem", color: "#0083FF" }}>
                        {item.custom}
                      </td>
                      <td className="p-3 text-muted" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem" }}>
                        {item.typical}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Expert Insight block */}
            <div className="mt-4 p-4 rounded-4" style={{ background: "rgba(0, 131, 255, 0.05)", borderLeft: "4px solid #0083FF", borderRadius: "12px" }}>
              <h4 style={{ fontSize: "1.05rem", fontWeight: "700", marginBottom: "8px", color: "#0c1527" }}>Expert Insight</h4>
              <p style={{ fontSize: "0.9rem", color: "#333", margin: "0", lineHeight: "1.6" }}>
                Organizations with customized CRM platforms often experience improved workflow efficiency, better customer retention, and stronger operational control because the software is built around business requirements rather than forcing businesses to adapt to software limitations.
              </p>
            </div>
          </div>

          {/* Advantages Column */}
          <div className="col-lg-5">
            <style dangerouslySetInnerHTML={{__html: `
              .custom-scrollbar-advantages::-webkit-scrollbar {
                width: 4px;
              }
              .custom-scrollbar-advantages::-webkit-scrollbar-track {
                background: rgba(0, 131, 255, 0.05);
                border-radius: 10px;
              }
              .custom-scrollbar-advantages::-webkit-scrollbar-thumb {
                background: #0083FF;
                border-radius: 10px;
              }
              .custom-scrollbar-advantages::-webkit-scrollbar-thumb:hover {
                background: #005bb5;
              }
            `}} />
            <h3 className="h4 fw-bold text-dark mb-4" style={{ fontSize: "1.4rem" }}>Our Key Advantages</h3>
            <div className="d-flex flex-column gap-3 custom-scrollbar-advantages" style={{ gap: "15px", maxHeight: "500px", overflowY: "auto", paddingRight: "10px" }}>
              {advantages.map((adv, idx) => (
                <div key={idx} className="adv-card p-3 rounded-3" style={{ background: "rgba(0, 0, 0, 0.02)", borderLeft: "4px solid #0083FF", borderRadius: "8px" }}>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: "700", marginBottom: "6px", color: "#111" }}>{adv.title}</h4>
                  <p style={{ fontSize: "0.85rem", color: "#666", margin: "0", lineHeight: "1.5" }}>{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseCrm;
