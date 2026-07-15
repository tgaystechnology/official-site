'use client'
import React from 'react';

const MvpWhyChoose = () => {
  const comparisonData = [
    { factor: "Initial Investment", mvp: "Lower", full: "Higher" },
    { factor: "Time to Market", mvp: "Faster", full: "Slower" },
    { factor: "Risk Level", mvp: "Lower", full: "Higher" },
    { factor: "User Feedback", mvp: "Immediate", full: "Delayed" },
    { factor: "Validation", mvp: "Early", full: "Late" },
    { factor: "Investor Appeal", mvp: "High", full: "Moderate" },
    { factor: "Flexibility", mvp: "High", full: "Lower" }
  ];

  const advantages = [
    {
      title: "Product-First Development Approach",
      desc: "We focus on business outcomes, user adoption, and market validation rather than simply building software."
    },
    {
      title: "Startup-Focused Expertise",
      desc: "Our team understands startup challenges, funding cycles, investor expectations, and product growth strategies."
    },
    {
      title: "Agile Development Methodology",
      desc: "Rapid iterations enable faster releases and continuous improvement."
    },
    {
      title: "Scalable Architecture",
      desc: "Build your MVP today and scale seamlessly into a full-fledged product tomorrow."
    },
    {
      title: "Dedicated Product Team",
      desc: "Access experienced developers, UI/UX designers, QA engineers, business analysts, and project managers."
    },
    {
      title: "Transparent Communication",
      desc: "Regular sprint reviews, progress updates, and milestone tracking ensure complete visibility."
    }
  ];

  return (
    <section className="why-choose-offshore pt100 pb70 bg-white" role="region" aria-labelledby="why-choose-mvp-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="why-choose-mvp-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            Why Choose TGAYS Technology for <span className="c-primary">MVP Development?</span>
          </h2>
          <p className="slider-content-text">
            A Strategic Product Development Partner for Innovative Businesses. Building an MVP is not just about coding. It requires product strategy, market validation, user experience design, scalable architecture, and rapid execution. As a trusted startup product development company, we help businesses move from concept to launch with confidence.
          </p>
        </div>

        <div className="row align-items-start mt-5">
          {/* Table comparison Column */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h3 className="h4 fw-bold text-dark mb-4" style={{ fontSize: "1.4rem" }}>MVP vs Full Product Development</h3>
            <div className="table-responsive rounded-4 shadow-sm" style={{ border: "1px solid #eee", overflow: "hidden", borderRadius: "12px" }}>
              <table className="table table-hover align-middle mb-0 text-center" style={{ background: "#fff" }}>
                <thead>
                  <tr style={{ background: "#0c1527", color: "#fff" }}>
                    <th className="p-3 text-start" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#fff" }}>Factor</th>
                    <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#0083FF" }}>MVP Development</th>
                    <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#aaa" }}>Full Product Development</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index}>
                      <td className="p-3 text-start fw-semibold text-dark" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem" }}>
                        {item.factor}
                      </td>
                      <td className="p-3 fw-bold text-success" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem", color: "#0083FF" }}>
                        {item.mvp}
                      </td>
                      <td className="p-3 text-muted" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem" }}>
                        {item.full}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-3 rounded-3" style={{ background: "rgba(0, 131, 255, 0.05)", borderLeft: "4px solid #0083FF" }}>
              <p className="mb-0" style={{ fontSize: "0.95rem", color: "#333", fontStyle: "italic" }}>
                <strong>Expert Insight:</strong> According to startup growth experts, businesses that validate ideas through MVPs significantly improve their chances of achieving product-market fit while minimizing development risks and unnecessary spending.
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
            <h3 className="h4 fw-bold text-dark mb-4" style={{ fontSize: "1.4rem" }}>What Makes TGAYS Different?</h3>
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

export default MvpWhyChoose;
