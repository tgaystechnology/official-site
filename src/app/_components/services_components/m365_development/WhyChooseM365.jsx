'use client'
import React from 'react';

const WhyChooseM365 = () => {
  const comparisonData = [
    { factor: "Microsoft 365 Consulting", tgays: "✓", typical: "Limited" },
    { factor: "Power Platform Expertise", tgays: "✓", typical: "Varies" },
    { factor: "Enterprise Automation", tgays: "✓", typical: "Basic" },
    { factor: "Custom App Development", tgays: "✓", typical: "Limited" },
    { factor: "Migration Services", tgays: "✓", typical: "Partial" },
    { factor: "Global Delivery Model", tgays: "✓", typical: "Regional" },
    { factor: "Dedicated Development Team", tgays: "✓", typical: "Optional" },
    { factor: "Post-Deployment Support", tgays: "✓", typical: "Limited" }
  ];

  const advantages = [
    {
      title: "Business-Centric Development Approach",
      desc: "We align Microsoft 365 technologies with measurable, real-world business outcomes."
    },
    {
      title: "Microsoft Ecosystem Expertise",
      desc: "Deep integration expertise across Microsoft 365, SharePoint, Teams, Power Platform, Azure, and APIs."
    },
    {
      title: "End-to-End Delivery",
      desc: "We handle the full lifecycle from upfront consultation and planning to deployment, security, and support."
    },
    {
      title: "Agile Development Methodology",
      desc: "Ensures faster implementation, lowers operational risk, and provides continuous loop improvements."
    },
    {
      title: "Global Delivery Capability",
      desc: "Proudly supporting businesses and organizations across India, USA, UK, Australia, and Dubai."
    }
  ];

  return (
    <section className="why-choose-m365-section pt100 pb70 bg-white" role="region" aria-labelledby="why-choose-m365-heading">
      <div className="container">
        <div className="crumina-module crumina-heading text-center mb-5">
          <h2 id="why-choose-m365-heading" className="heading-title" style={{ fontSize: "2.25rem", fontWeight: "700" }}>
            WHY CHOOSE TGAYS TECHNOLOGY FOR <span className="c-primary">MICROSOFT 365 DEVELOPMENT</span>?
          </h2>
          <p className="slider-content-text">
            Businesses require more than software implementation—they need strategic digital transformation partners who understand business processes, productivity challenges, and enterprise scalability.
          </p>
        </div>

        <div className="row align-items-start mt-5">
          {/* Table comparison Column */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h3 className="h4 fw-bold text-dark mb-4" style={{ fontSize: "1.4rem" }}>What Makes TGAYS Technology Different?</h3>
            <div className="table-responsive rounded-4 shadow-sm" style={{ border: "1px solid #eee", overflow: "hidden", borderRadius: "12px" }}>
              <table className="table table-hover align-middle mb-0 text-center" style={{ background: "#fff" }}>
                <thead>
                  <tr style={{ background: "#0c1527", color: "#fff" }}>
                    <th className="p-3 text-start" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#fff" }}>Feature</th>
                    <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#0083FF" }}>TGAYS Technology</th>
                    <th className="p-3" style={{ borderBottom: "none", fontSize: "1rem", fontWeight: "600", color: "#aaa" }}>Typical Provider</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index}>
                      <td className="p-3 text-start fw-semibold text-dark" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem" }}>
                        {item.factor}
                      </td>
                      <td className="p-3 fw-bold text-success" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem", color: "#0083FF" }}>
                        {item.tgays}
                      </td>
                      <td className="p-3 text-muted" style={{ borderBottom: "1px solid #f2f2f2", fontSize: "0.9rem" }}>
                        {item.typical}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Advantages Column */}
          <div className="col-lg-5">
            <h3 className="h4 fw-bold text-dark mb-4" style={{ fontSize: "1.4rem" }}>Our Competitive Advantages</h3>
            <div className="d-flex flex-column gap-3" style={{ gap: "15px" }}>
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

export default WhyChooseM365;